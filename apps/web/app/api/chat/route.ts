import { NextRequest, NextResponse } from "next/server";
import { FridayAgent } from "@friday/core";

const agent = new FridayAgent();

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const reply = await agent.chat(message ?? "");
  return NextResponse.json({ reply });
}
