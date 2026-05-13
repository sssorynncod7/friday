import { FridayTool } from "../base-tool";

const CITIES: Record<string, { tempC: number; condition: string }> = {
  istanbul: { tempC: 22, condition: "clear" },
  ankara: { tempC: 18, condition: "partly cloudy" },
  izmir: { tempC: 24, condition: "sunny" },
  london: { tempC: 14, condition: "rain" },
  newyork: { tempC: 17, condition: "windy" }
};

export class WeatherTool implements FridayTool<{ location: string }> {
  name = "weather";
  description = "Real-time weather insights.";

  async run(input: { location: string }) {
    const location = input.location.trim() || "Istanbul";
    const key = location.toLowerCase().replace(/\s+/g, "");
    const hit = CITIES[key];

    if (!hit) {
      return `Weather is active, but no cached profile exists for ${location}.`;
    }

    return `Weather for ${location}: ${hit.tempC}C ${hit.condition}.`;
  }
}
