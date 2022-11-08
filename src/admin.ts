import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { Admin } from "components/Admin";
import { setup } from "lib/setup";
import "style/admin.css";
import { Spinner } from "kintone-ui-component";

(async (PLUGIN_ID) => {
  const spinner = new Spinner();
  spinner.open();
  await setup();
  spinner.close();
  const root = document.getElementById("config-root");
  if (!root) {
    return;
  }
  createRoot(root).render(createElement(Admin));
})(kintone.$PLUGIN_ID);
