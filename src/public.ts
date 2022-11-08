import { createRoot } from "react-dom/client";
import { createElement } from "react";
import { Public } from "components/Public";
import "style/public.css";

kv.events.records.fetched.push((state: any) => {
  if (
    !state.records.length ||
    document.getElementById("homepage-creator-root")
  ) {
    return state;
  }
  const root = document.createElement("div");
  root.id = "homepage-creator-root";
  document.body.appendChild(root);
  createRoot(root).render(
    createElement(Public, {
      layout: JSON.parse(state.records[0].homepage_creator_layout.value),
    })
  );
  return state;
});
