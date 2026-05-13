import { FridayTool } from "../base-tool";
export class WebSearchTool implements FridayTool<{ query: string }> { name = "web_search"; description = "Web search and browsing."; async run(input:{query:string}){ return `Search results for: ${input.query}`; } }
