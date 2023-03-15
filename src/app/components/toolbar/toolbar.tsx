import React from "react";
import { tools } from "@/app/tools";
import { ITool } from "@/app/interfaces";
import { Stage } from "konva/lib/Stage";

import { resetBoard, downloadPaint } from "./help_services";
import { CustomToolButton } from "./components";
import eraserIcon from "public/assets/toolbar-svg/eraser-svgrepo-com.svg";
import pencilIcon from "public/assets/toolbar-svg/pencil-svgrepo-com.svg";
import clearIcon from "public/assets/toolbar-svg/undo-svgrepo-com.svg";
import downloadIcon from "public/assets/toolbar-svg/download-svgrepo-com.svg";
import Draggable from "react-draggable";
import style from "./toolbar.module.scss";

interface IToolbarProps {
  stage?: Stage;
  selectTool: (tool: ITool | null) => void;
  active: ITool | null;
}

const Toolbar = (props: IToolbarProps) => {
  return (
    <Draggable>
      <div className={style.toolbar}>
        <div className={style.toolbar_row}>
          <CustomToolButton
            selectTool={() => props.selectTool(tools.pencil)}
            tool="Pencil"
            active={props.active}
            iconSource={pencilIcon}
            activityIndicator={props.active?.tool === "pencil" ? true : false}
          />

          <CustomToolButton
            selectTool={() => props.selectTool(tools.eraser)}
            tool="Eraser"
            active={props.active}
            iconSource={eraserIcon}
            activityIndicator={props.active?.tool === "eraser" ? true : false}
          />
        </div>
        <div className={style.toolbar_row}>
          <CustomToolButton
            selectTool={() => {
              props.selectTool(null);
              props.stage && resetBoard(props.stage);
            }}
            tool="Clear"
            active={props.active}
            iconSource={clearIcon}
          />

          <CustomToolButton
            selectTool={() => {
              props.selectTool(null);
              props.stage && downloadPaint(props.stage);
            }}
            tool="Download"
            active={props.active}
            iconSource={downloadIcon}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default Toolbar;
