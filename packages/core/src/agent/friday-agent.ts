import { ChatMessage } from "../types";
import { WebSearchTool } from "../tools/web/web-search.tool";
import { WeatherTool } from "../tools/weather/weather.tool";

export class FridayAgent {
  private readonly webTool = new WebSearchTool();
  private readonly weatherTool = new WeatherTool();
  private shortTermMemory: ChatMessage[] = [];

  async chat(input: string): Promise<string> {
    const content = input.trim();
    this.remember({ role: "user", content });

    if (this.isWeatherIntent(content)) {
      const location = this.extractLocation(content) ?? "Istanbul";
      const result = await this.weatherTool.run({ location });
      return this.decorate(result);
    }

    if (this.isSearchIntent(content)) {
      const query = this.extractQuery(content);
      const result = await this.webTool.run({ query });
      return this.decorate(result);
    }

    if (this.isInfraIntent(content)) {
      return this.decorate(
        "Core infrastructure is active: routing, memory, weather, and web-search modules are online."
      );
    }

    return this.decorate("At your service. I can orchestrate tools, memory, and models.");
  }

  private remember(message: ChatMessage) {
    this.shortTermMemory.push(message);
    this.shortTermMemory = this.shortTermMemory.slice(-20);
  }

  private isWeatherIntent(text: string) {
    return /\b(weather|hava)\b/i.test(text);
  }

  private isSearchIntent(text: string) {
    return /\b(search|ara|lookup)\b/i.test(text);
  }

  private isInfraIntent(text: string) {
    return /(altyap|infrastructure|activate|aktif|online)/i.test(text);
  }

  private extractQuery(text: string) {
    return text.replace(/\b(search|ara|lookup)\b[:\s-]*/gi, "").trim() || text;
  }

  private extractLocation(text: string): string | null {
    const match = text.match(/\b(?:in|for|at|için)\s+([a-zA-ZçğıöşüÇĞİÖŞÜ\s-]+)/i);
    if (!match) return null;
    return match[1].trim();
  }

  private decorate(content: string) {
    return `FRIDAY> ${content}`;
  }
}
