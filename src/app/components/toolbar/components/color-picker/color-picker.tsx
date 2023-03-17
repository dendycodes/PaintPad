import { IDrawingOptions } from "@/app/interfaces";
import React from "react";
import { CirclePicker } from "react-color";
import { SetterOrUpdater } from "recoil";
import style from "./color-section.module.scss";

interface IColorPickerProps {
  current_color: string;
  setDrawingOptions: SetterOrUpdater<IDrawingOptions>;
}

const ColorPicker = ({
  current_color,
  setDrawingOptions
}: IColorPickerProps) => {
  return (
    <div className={style.color_picker}>
      <div
        className={style.current_color}
        style={{
          backgroundColor: `${current_color}`
        }}
      ></div>
      <CirclePicker
        className={style.circle_picker}
        onChange={(color) => {
          setDrawingOptions({ color: color.hex });
        }}
      />
    </div>
  );
};

export default ColorPicker;
