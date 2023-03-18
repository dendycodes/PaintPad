import React, { useEffect, useRef, useState } from "react";
import { Stage } from "konva/lib/Stage";
import { Layer } from "konva/lib/Layer";
import { Rect } from "konva/lib/shapes/Rect";

import { Toolbar } from "../components";
import { ITool } from "../interfaces";
import { lineDrawer, tools } from "../tools";
import { useRecoilValue } from "recoil";
import { drawingOptionsState } from "../stores/drawing-options";
import { clearStage } from "../services/services";

const BlackboardCore = () => {
  const stageRef = useRef(null);
  const [stage, setStage] = useState<Stage>();
  const [selected_tool, selectTool] = useState<ITool | null>(null);
  const drawingOptions = useRecoilValue(drawingOptionsState);

  useEffect(() => {
    if (stageRef.current) {
      const stage = new Stage({
        container: stageRef.current,
        width: window.innerWidth,
        height: window.innerHeight
      });

      const background = new Rect({
        width: stage.width(),
        height: stage.height(),
        fill: "rgb(255,255,255)"
      });

      const backgroundLayer = new Layer({
        id: "backgroundLayer",
        listening: false
      });
      const mainLayer = new Layer({ id: "mainLayer", listening: false });

      backgroundLayer.add(background);
      stage.add(backgroundLayer);
      stage.add(mainLayer);
      setStage(stage);
    }
  }, [stageRef]);

  useEffect(() => {
    if (stage) {
      clearStage(stage);
      switch (selected_tool?.tool) {
        case tools.pencil.tool: {
          if (stage) {
            lineDrawer(stage, "source-over", drawingOptions);
            stage.container().style.cursor = tools.pencil.cursor;
          }
          break;
        }
        case tools.eraser.tool: {
          if (stage) {
            lineDrawer(stage, "destination-out", drawingOptions);
            stage.container().style.cursor = tools.eraser.cursor;
          }
          break;
        }
      }
    }
  }, [selected_tool, drawingOptions]);

  return (
    <div>
      <Toolbar stage={stage} selectTool={selectTool} active={selected_tool} />
      <div className="ml-[140px]" ref={stageRef}></div>
    </div>
  );
};
export default BlackboardCore;
