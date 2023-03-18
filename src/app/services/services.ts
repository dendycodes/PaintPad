import { Layer } from "konva/lib/Layer";
import { Stage } from "konva/lib/Stage";

export const clearStage = (stage: Stage) => {
  const layer: Layer = stage?.findOne("#mainLayer");
  if (layer) {
    layer.off("mousedown");
    layer.off("click");
    layer.off("mousemove");
    layer.off("drag");
    layer.off("dragstart");
    layer.off("mouseup");
    layer.off("transform");
  }
  stage?.removeEventListener("mousedown");
  stage?.removeEventListener("mousemove");
  stage?.removeEventListener("mouseup");
  stage?.removeEventListener("drag");
  stage?.removeEventListener("transform");
};
