import React from "react";
import { tools } from "@/app/tools";
import { ITool } from "@/app/interfaces";
import { Stage } from "konva/lib/Stage";

import { resetBoard } from "./helpers";

interface IToolbarProps {
  stage?: Stage;
  selectTool: (tool: ITool | null) => void;
}

const Toolbar = (props: IToolbarProps) => {
  return (
    <div className="absolute w-4/6 p-4 border border-black rounded-md  bottom-5 z-[99999] flex gap-2">
      <button onClick={() => props.selectTool(tools.pencil)}>Pencil</button>
      <button onClick={() => props.selectTool(tools.eraser)}>Eraser</button>
      <button
        onClick={() => {
          props.selectTool(null);
          props.stage && resetBoard(props.stage);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Toolbar;
