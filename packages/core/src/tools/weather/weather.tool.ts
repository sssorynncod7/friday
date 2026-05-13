import { FridayTool } from "../base-tool";
export class WeatherTool implements FridayTool<{ location: string }> { name = "weather"; description = "Real-time weather insights."; async run(input:{location:string}){ return `Weather for ${input.location}: 22C clear.`; } }
