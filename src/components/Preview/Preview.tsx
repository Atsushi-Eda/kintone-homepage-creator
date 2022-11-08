import React, { useRef, useEffect } from "react";
import { Row } from "components/Preview/Row";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { layoutState, previewWidthState } from "lib/state";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Preview: React.FC = () => {
  const layout = useRecoilValue(layoutState);
  const setPreviewWidth = useSetRecoilState(previewWidthState);
  const previewRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (previewRef.current) {
      setPreviewWidth(previewRef.current.offsetWidth);
    }
  }, [setPreviewWidth]);

  return (
    <div ref={previewRef} className="homepage-creator--preview">
      <DndProvider backend={HTML5Backend}>
        {layout.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <Row
              key={`${rowIndex}-empty`}
              row={[]}
              rowIndex={rowIndex}
              parentElementIndex={null}
            />
            <Row
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              parentElementIndex={null}
            />
          </React.Fragment>
        ))}
        <Row
          key={`${layout.length}-empty`}
          row={[]}
          rowIndex={layout.length}
          parentElementIndex={null}
        />
      </DndProvider>
    </div>
  );
};
