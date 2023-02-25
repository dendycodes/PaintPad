import React from "react";
import { tools } from "@/app/tools";
import { ITool } from "@/app/interfaces";
import { Stage } from "konva/lib/Stage";

import { resetBoard } from "./helpers";
import { CustomToolButton } from "./components";
interface IToolbarProps {
  stage?: Stage;
  selectTool: (tool: ITool | null) => void;
  active: ITool | null;
}

const Toolbar = (props: IToolbarProps) => {
  return (
    <div className="absolute w-4/6 p-4 bg-white shadow-md rounded-md  top-5 z-[99999] flex gap-2">
      <CustomToolButton
        selectTool={() => props.selectTool(tools.pencil)}
        tool="Pencil"
        active={props.active}
      />

      <CustomToolButton
        selectTool={() => props.selectTool(tools.eraser)}
        tool="Eraser"
        active={props.active}
      />

      <CustomToolButton
        selectTool={() => {
          props.selectTool(null);
          props.stage && resetBoard(props.stage);
        }}
        tool="Clear"
        active={props.active}
      />
    </div>
  );
};

export default Toolbar;
