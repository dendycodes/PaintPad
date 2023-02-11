"use client";
import React, { useEffect, useRef, useState } from "react";
import { ITool } from "../interfaces";
import { Stage } from "konva/lib/Stage";
import { Layer } from "konva/lib/Layer";
import { lineDrawer, tools } from "../tools";

const BlackboardCore = () => {
  const stageRef = useRef(null);
  const [stage, setStage] = useState<Stage>();
  const [selected_tool, selectTool] = useState<ITool>();

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
  }, [selected_tool]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "60%",
          height: "50px",
          backgroundColor: "orange",
          borderRadius: "0  0  25px 25px",
          zIndex: 99999
        }}
      >
        <button onClick={() => selectTool(tools.pencil)}>Pencil</button>
        <button onClick={() => selectTool(tools.eraser)}>Eraser</button>
      </div>
      <div ref={stageRef}></div>
    </div>
  );
};
export default BlackboardCore;
