import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ mode: "realtime-ready", provider: "livekit/websocket" });
}
