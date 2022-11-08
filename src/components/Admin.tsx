import React from "react";
import { Preview } from "components/Preview/Preview";
import { Tools } from "components/Tools/Tools";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const Admin: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div className="homepage-creator">
          <Preview />
          <Tools />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
};
