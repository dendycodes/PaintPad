import { ITool } from "@/app/interfaces";
import { tools } from "@/app/tools";
import Image from "next/image";
import React from "react";
import { TwitterPicker } from "react-color";
import { useRecoilState } from "recoil";
import { drawingOptionsState } from "../../../../stores/drawing-options";
import classNames from "classnames";
import style from "./custom-tool-button.module.scss";

interface IToolbarProps {
  selectTool: () => void;
  tool: string;
  active: ITool | null;
  iconSource: string;
  activityIndicator?: boolean;
}

const CustomToolButton = (props: IToolbarProps) => {
  const [drawingOptions, setDrawingOptions] =
    useRecoilState(drawingOptionsState);

  return (
    <div className=" relative ">
      <button
        className={classNames(
          style.tool_button,
          props.activityIndicator ? style.active : null
        )}
        onClick={props.selectTool}
      >
        <Image
          src={props.iconSource}
          width={30}
          height={30}
          alt={"tool-icon"}
        />
      </button>

      {props.active === tools.pencil && props.tool === "Pencil" ? (
        <div className={style.color_picker}>
          <TwitterPicker
            triangle="hide"
            onChange={(color) => {
              setDrawingOptions({ color: color.hex });
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CustomToolButton;
