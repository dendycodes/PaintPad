import { atom, selector } from "recoil";
import { IDrawingOptions } from "../interfaces";

export const drawingOptionsState = atom({
  key: "drawingOptionsState",
  default: { color: "#FF6900" } as IDrawingOptions
});

export const drawingSelector = selector({
  key: "drawingSelector",
  get: ({ get }) => {
    const drawingOptions = get(drawingOptionsState);
    return drawingOptions;
  }
});
