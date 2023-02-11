import { ITool } from "../interfaces";
export type tool = "pencil" | "eraser";

export const tools: Record<tool, ITool> = {
  pencil: { tool: "pencil", cursor: "crosshair" },
  eraser: { tool: "eraser", cursor: "crosshair" }
};
