import { ITool } from "@/app/interfaces";
import { tools } from "@/app/tools";
import Image from "next/image";
import React from "react";

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
          width={40}
          height={40}
          alt={"tool-icon"}
          className={style.icon}
        />
      </button>

      {/* {props.active === tools.pencil && props.tool === "Pencil" ? (
        <div className={style.color_picker}></div>
      ) : null} */}
    </div>
  );
};

export default CustomToolButton;
