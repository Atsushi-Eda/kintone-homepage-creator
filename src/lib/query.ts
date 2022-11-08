import { useQuery } from "@tanstack/react-query";
import { Record } from "@kintone/rest-api-client/lib/client/types";
import { KintoneRestAPIClient } from "@kintone/rest-api-client";

export const useRecords = (apiUrl: string) =>
  useQuery<Record[]>(
    ["records", apiUrl],
    () =>
      apiUrl
        ? fetch(apiUrl)
            .then((response) => response.json())
            .then(({ records }) => records)
        : Promise.resolve(null),
    {
      initialData: [],
      refetchOnWindowFocus: false,
    }
  );

export const useFile = (fileKey: string) =>
  useQuery<string>(
    ["file", fileKey],
    () =>
      fileKey
        ? new KintoneRestAPIClient().file
            .downloadFile({ fileKey })
            .then((response) => URL.createObjectURL(new Blob([response])))
        : "",
    {
      initialData: "",
      refetchOnWindowFocus: false,
    }
  );
