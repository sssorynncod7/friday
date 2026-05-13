import { ChatMessage } from "../types";
import { WebSearchTool } from "../tools/web/web-search.tool";
import { WeatherTool } from "../tools/weather/weather.tool";

export class FridayAgent {
  private tools = [new WebSearchTool(), new WeatherTool()];
  private shortTermMemory: ChatMessage[] = [];

  async chat(input: string): Promise<string> {
    this.shortTermMemory.push({ role: "user", content: input });
    if (input.toLowerCase().includes("weather")) {
      const result = await this.tools[1].run({ location: "Istanbul" });
      return this.decorate(result);
    }
    if (input.toLowerCase().includes("search")) {
      const result = await this.tools[0].run({ query: input });
      return this.decorate(result);
    }
    return this.decorate("At your service. I can orchestrate tools, memory, and models.");
  }

  private decorate(content: string) {
    return `FRIDAY> ${content}`;
  }
}
