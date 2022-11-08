export const getFileUrl = (kviewerUrl: string, fileKey: string) => {
  const urlObj = new URL(kviewerUrl);
  return `${urlObj.origin}/public/file/inline/${getViewCode(
    urlObj.pathname
  )}/${fileKey}`;
};

const getViewCode = (pathname: string) => {
  if (pathname.startsWith("/public/api")) {
    return pathname.split("/")[4];
  }
  return pathname.split("/")[2];
};
