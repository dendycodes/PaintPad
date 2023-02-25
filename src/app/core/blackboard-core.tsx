"use client";
import React, { useEffect, useRef, useState } from "react";
import { Stage } from "konva/lib/Stage";
import { Layer } from "konva/lib/Layer";
import { Rect } from "konva/lib/shapes/Rect";

import { Toolbar } from "../components";
import { ITool } from "../interfaces";
import { lineDrawer, tools } from "../tools";

const BlackboardCore = () => {
  const stageRef = useRef(null);
  const [stage, setStage] = useState<Stage>();
  const [selected_tool, selectTool] = useState<ITool | null>(null);

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
        fill: "rgb(220,220,220)"
      });

      const backgroundLayer = new Layer({ id: "backgroundLayer" });
      backgroundLayer.add(background);
      stage.add(backgroundLayer);

      const mainLayer = new Layer({ id: "mainLayer" });
      stage.add(mainLayer);
      setStage(stage);
    }
  }, [stageRef]);

  useEffect(() => {
    switch (selected_tool?.tool) {
      case "pencil": {
        if (stage) {
          lineDrawer(stage, "pencil");
          stage.container().style.cursor = tools.pencil.cursor;
        }
        break;
      }
      case "eraser": {
        if (stage) {
          lineDrawer(stage, "eraser");
          stage.container().style.cursor = tools.eraser.cursor;
        }
        break;
      }
    }
  }, [selected_tool, stage]);

  return (
    <div className="flex items-start justify-center">
      <div ref={stageRef}></div>
      <Toolbar stage={stage} selectTool={selectTool} />
    </div>
  );
};
export default BlackboardCore;
