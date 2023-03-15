import { ITool } from "@/app/interfaces";
import { tools } from "@/app/tools";
import Image from "next/image";
import React from "react";
import { TwitterPicker } from "react-color";
import { useRecoilState } from "recoil";
import { drawingOptionsState } from "../../../../stores/drawing-options";
import style from "./custom-tool-button.module.scss";

interface IToolbarProps {
  selectTool: () => void;
  tool: string;
  active: ITool | null;
  iconSource: string;
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

      <button className={style.tool_button} onClick={props.selectTool}>
        <Image
          src={props.iconSource}
          width={30}
          height={30}
          alt={"tool-icon"}
        />
      </button>
    </div>
  );
};

export default CustomToolButton;
