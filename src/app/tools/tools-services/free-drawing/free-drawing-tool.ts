import { Layer } from "konva/lib/Layer";
import { Line } from "konva/lib/shapes/Line";
import { Stage } from "konva/lib/Stage";

export const lineDrawer = (stage: Stage, mode: string) => {
  var isPaint = false;
  var mode = mode;
  var lastLine: Line;
  const layer: Layer = stage.findOne("#mainLayer");

  stage.on("mousedown touchstart", function (e) {
    isPaint = true;
    const pos = stage.getRelativePointerPosition();

    lastLine = new Line({
      stroke: "white",
      strokeWidth: 10,
      globalCompositeOperation:
        mode === "pencil" ? "source-over" : "destination-out",
      lineCap: "round",
      lineJoin: "round",
      points: [pos.x, pos.y, pos.x, pos.y]
    });
    layer.add(lastLine);
  });

  stage.on("mouseup touchend", function () {
    isPaint = false;
  });

  stage.on("mousemove touchmove", function (e) {
    if (!isPaint) {
      return;
    }

    e.evt.preventDefault();
    const pos = stage.getRelativePointerPosition();
    var newPoints = lastLine.points().concat([pos.x, pos.y]);
    lastLine.points(newPoints);
  });
};
