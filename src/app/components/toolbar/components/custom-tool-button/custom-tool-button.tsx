import { ITool } from "@/app/interfaces";
import { tools } from "@/app/tools";
import React from "react";
import { TwitterPicker } from "react-color";

import { useRecoilState } from "recoil";
import { drawingOptionsState } from "../../../../stores/drawing-options";

interface IToolbarProps {
  selectTool: () => void;
  tool: string;
  active: ITool | null;
}

const CustomToolButton = (props: IToolbarProps) => {
  const [drawingOptions, setDrawingOptions] =
    useRecoilState(drawingOptionsState);

  return (
    <div className=" relative ">
      {props.active === tools.pencil && props.tool === "Pencil" ? (
        <div className=" absolute top-14 ">
          <TwitterPicker
            onChange={(color) => {
              setDrawingOptions({ color: color.hex });
            }}
          />
        </div>
      ) : null}
      <button onClick={props.selectTool}>{props.tool}</button>
    </div>
  );
};

export default CustomToolButton;
