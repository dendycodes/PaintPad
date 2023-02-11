"use client";
import React, { useEffect, useRef, useState } from "react";
import { ITool } from "../interfaces";
import { Stage } from "konva/lib/Stage";
import { Layer } from "konva/lib/Layer";
import { lineDrawer, tools } from "../tools";

const BlackboardCore = () => {
  const stageRef = useRef(null);
  const [stage, setStage] = useState<Stage>();
  const [selected_tool, selectTool] = useState<ITool>(tools.pencil);

  useEffect(() => {
    if (stageRef.current) {
      const stage = new Stage({
        container: stageRef.current,
        width: window.innerWidth,
        height: window.innerHeight
      });

      const mainLayer = new Layer({ id: "mainLayer" });
      stage.add(mainLayer);
      setStage(stage);
    }
  }, [stageRef]);

  switch (selected_tool?.tool) {
    case "pencil": {
      if (stage) {
        lineDrawer(stage, "brush");
        stage.container().style.cursor = tools.pencil.cursor;
      }
    }
    case "eraser": {
      if (stage) {
        lineDrawer(stage, "");
        stage.container().style.cursor = tools.eraser.cursor;
      }
    }
  }

  return <div ref={stageRef}></div>;
};
export default BlackboardCore;
