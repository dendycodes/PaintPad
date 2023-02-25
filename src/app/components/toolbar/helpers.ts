import { Layer } from "konva/lib/Layer";
import { Stage } from "konva/lib/Stage";

export const resetBoard = (stage: Stage) => {
  const mainLayer: Layer = stage.findOne("#mainLayer");
  mainLayer.destroy();
  const newLayer = new Layer({ id: "mainLayer" });
  stage.add(newLayer);
};
