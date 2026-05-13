export type ModelProvider = "grok" | "claude" | "gpt4o" | "deepseek" | "ollama";

export interface ChatMessage { role: "system" | "user" | "assistant"; content: string; }
export interface ToolResult { tool: string; content: string; success: boolean; }
