import { IDrawingOptions } from "@/app/interfaces";
import { Layer } from "konva/lib/Layer";
import { Line } from "konva/lib/shapes/Line";
import { Stage } from "konva/lib/Stage";

export const lineDrawer = (
  stage: Stage,
  mode: GlobalCompositeOperation,
  drawingOptions: IDrawingOptions
) => {
  stage.on("mousedown", () => {
    initDrawing(stage, mode, drawingOptions);
  });
};

const initDrawing = (
  stage: Stage,
  mode: GlobalCompositeOperation,
  drawingOptions: IDrawingOptions
) => {
  const pos = stage.getRelativePointerPosition();
  const lastLine = new Line({
    stroke: drawingOptions.color,
    strokeWidth: drawingOptions.strokeWidth,
    globalCompositeOperation: mode,
    lineCap: "round",
    points: [pos.x, pos.y, pos.x, pos.y],
    listening: false,
    pixelRatio: 1
  });

  const layer: Layer = stage.findOne("#mainLayer");
  layer.add(lastLine);

  stage.on("mousemove", () => {
    startDrawing(stage, lastLine);
  });
  stage.on("mouseup", () => {
    stopDrawing(stage);
  });
};

const startDrawing = (stage: Stage, line: Line) => {
  const pos = stage.getRelativePointerPosition();
  if (pos) {
    const newPoints = line.points().concat([pos.x, pos.y]);
    line.points(newPoints);
  }
};

const stopDrawing = (stage: Stage) => {
  stage?.off("mousemove");
  stage.off("mouseup");
};
