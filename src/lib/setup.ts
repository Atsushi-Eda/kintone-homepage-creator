import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import type { Element } from "types/element";
import type { Properties } from "@kintone/rest-api-client/lib/client/types";
import { homepageCreatorAppFields } from "const/homepage-creator-app-fields";
import { addTargetRecord, getTargetRecord } from "lib/record";

export const setup = async () => {
  const client = new KintoneRestAPIClient();
  const app = kintone.app.getId();
  if (!app) {
    return;
  }
  const { properties } = await client.app.getFormFields({ app, preview: true });
  const missingFields = getMissingFields(properties);
  if (Object.keys(missingFields).length) {
    await client.app.addFormFields({
      app,
      properties: missingFields,
    });
    await client.app.deployApp({ apps: [{ app }] });
    await waitForDeploy(client, app);
  }
  const record = await getTargetRecord();
  if (!record) {
    await addTargetRecord();
  }
};

export const getInitialLayout = async (): Promise<Element[][]> => {
  try {
    const record = await getTargetRecord();
    if (!record?.homepage_creator_layout.value) {
      return [];
    }
    return JSON.parse(record.homepage_creator_layout.value);
  } catch (_) {
    return [];
  }
};

const getMissingFields = (properties: Properties) => {
  const missingFields: Properties = {};
  if (!("homepage_creator_identifier" in properties)) {
    missingFields.homepage_creator_identifier =
      homepageCreatorAppFields.homepage_creator_identifier;
  }
  if (!("homepage_creator_layout" in properties)) {
    missingFields.homepage_creator_layout =
      homepageCreatorAppFields.homepage_creator_layout;
  }
  if (!("homepage_creator_file" in properties)) {
    missingFields.homepage_creator_file =
      homepageCreatorAppFields.homepage_creator_file;
  }
  return missingFields;
};

const waitForDeploy = (client: KintoneRestAPIClient, app: number) =>
  new Promise((resolve) => {
    const timer = setInterval(async () => {
      const { apps } = await client.app.getDeployStatus({ apps: [app] });
      if (apps.every(({ status }) => status === "SUCCESS")) {
        clearInterval(timer);
        resolve(null);
      }
    }, 1000);
  });
