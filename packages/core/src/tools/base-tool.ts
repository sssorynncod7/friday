export interface FridayTool<T = unknown> { name: string; description: string; run(input: T): Promise<string>; }
