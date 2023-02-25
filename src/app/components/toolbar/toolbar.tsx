import React from "react";
import { tools } from "@/app/tools";
import { ITool } from "@/app/interfaces";

interface IToolbarProps {
  selectTool: (tool: ITool) => void;
}

const Toolbar = (props: IToolbarProps) => {
  return (
    <div className="absolute w-4/6 bg-yellow-600 rounded-md h-10 bottom-5 z-[99999]">
      <button onClick={() => props.selectTool(tools.pencil)}>Pencil</button>
      <button onClick={() => props.selectTool(tools.eraser)}>Eraser</button>
    </div>
  );
};

export default Toolbar;
