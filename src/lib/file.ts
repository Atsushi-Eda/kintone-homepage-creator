import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import type { HomepageCreatorAppRecord } from "types/record";

export const uploadFile = async (file: File): Promise<string | null> => {
  const client = new KintoneRestAPIClient();
  const app = kintone.app.getId();
  if (!app) {
    return null;
  }
  const { fileKey } = await client.file.uploadFile({
    file: {
      name: file.name,
      data: file,
    },
  });
  const { record } = await client.record.getRecord<HomepageCreatorAppRecord>({
    app,
    id: 1,
  });
  await client.record.updateRecord({
    app,
    id: 1,
    record: {
      homepage_creator_file: {
        value: [...record.homepage_creator_file.value, { fileKey }],
      },
    },
  });

  const { record: newRecord } =
    await client.record.getRecord<HomepageCreatorAppRecord>({
      app,
      id: 1,
    });
  return newRecord.homepage_creator_file.value.slice(-1)[0].fileKey;
};
