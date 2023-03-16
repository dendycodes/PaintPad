import { ITool } from "../interfaces";
export type tool = "pencil" | "eraser" | "brush";

export const tools: Record<tool, ITool> = {
  pencil: { tool: "pencil", cursor: "crosshair" },
  brush: { tool: "brush", cursor: "crosshair" },
  eraser: { tool: "eraser", cursor: "crosshair" }
};
