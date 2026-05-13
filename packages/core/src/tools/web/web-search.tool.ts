import { FridayTool } from "../base-tool";

export class WebSearchTool implements FridayTool<{ query: string }> {
  name = "web_search";
  description = "Web search and browsing.";

  async run(input: { query: string }) {
    const normalized = input.query.trim();
    if (!normalized) return "Search query is empty.";

    return `Search is active. Query accepted: ${normalized}`;
  }
}
