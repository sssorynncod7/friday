"""Vercel Python entrypoint for FRIDAY project."""

import json


async def app(scope, receive, send):
    if scope["type"] != "http":
        return

    body = json.dumps({"status": "ok", "service": "friday-jarvis-core"}).encode("utf-8")
    headers = [(b"content-type", b"application/json")]

    await send({"type": "http.response.start", "status": 200, "headers": headers})
    await send({"type": "http.response.body", "body": body})
