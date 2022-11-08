import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import { HomepageCreatorAppRecord } from "types/record";
import { Element } from "types/element";

export const getTargetRecord = async () => {
  const client = new KintoneRestAPIClient();
  const app = kintone.app.getId();
  if (!app) {
    return null;
  }
  const {
    records: [record],
  } = await client.record.getRecords<HomepageCreatorAppRecord>({
    app,
    query: "homepage_creator_identifier = 1 limit 1",
  });
  return record;
};

export const addTargetRecord = () => {
  const client = new KintoneRestAPIClient();
  const app = kintone.app.getId();
  if (!app) {
    return null;
  }
  return client.record.addRecord({
    app,
    record: {
      homepage_creator_identifier: {
        value: 1,
      },
    },
  });
};

export const updateLayout = (layout: Element[][]) => {
  const client = new KintoneRestAPIClient();
  const app = kintone.app.getId();
  if (!app) {
    return null;
  }
  return client.record.updateRecord({
    app,
    updateKey: {
      field: "homepage_creator_identifier",
      value: 1,
    },
    record: {
      homepage_creator_layout: {
        value: JSON.stringify(layout),
      },
    },
  });
};
