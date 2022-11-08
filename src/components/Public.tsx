import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Row } from "components/Public/Row";
import type { Element } from "types/element";

export const Public: React.FC<{ layout: Element[][] }> = ({ layout }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="homepage-creator--public">
        {layout.map((row, index) => (
          <Row row={row} key={index} />
        ))}
      </div>
    </QueryClientProvider>
  );
};
