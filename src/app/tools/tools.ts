import { ITool } from "../interfaces";
export type tool = "pencil" | "eraser" | "marker";

export const tools: Record<tool, ITool> = {
  pencil: { tool: "pencil", cursor: "crosshair" },
  marker: { tool: "marker", cursor: "crosshair" },
  eraser: { tool: "eraser", cursor: "crosshair" }
};
