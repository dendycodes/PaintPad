import { IDrawingOptions } from "@/app/interfaces";
import { Layer } from "konva/lib/Layer";
import { Line } from "konva/lib/shapes/Line";
import { Stage } from "konva/lib/Stage";

export const lineDrawer = (
  stage: Stage,
  mode: string,
  drawingOptions: IDrawingOptions
) => {
  const layer: Layer = stage.findOne("#mainLayer");
  stage.on("mousedown", (e) => {
    const pos = stage.getRelativePointerPosition();
    const lastLine = new Line({
      stroke: drawingOptions.color,
      strokeWidth: 10,
      globalCompositeOperation:
        mode === "pencil" ? "source-over" : "destination-out",
      lineCap: "round",
      lineJoin: "round",
      points: [pos.x, pos.y, pos.x, pos.y],
      pixelRatio: 1
    });
    layer.add(lastLine);
    layer.draw();

    stage.on("mousemove", () => startDrawing(stage, lastLine));
    stage.on("mouseup", () => {
      stopDrawing(stage);
    });
  });

  const startDrawing = (stage: Stage, line: Line) => {
    const pos = stage.getRelativePointerPosition();
    if (pos) {
      const newPoints = line.points().concat([pos.x, pos.y]);
      line.points(newPoints);
    }
  };
  const stopDrawing = (stage: Stage) => {
    stage?.off("mousemove");
    stage?.off("mouseup");
  };
};
