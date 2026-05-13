from __future__ import annotations

import argparse

from .core import FridayAssistant


def main() -> None:
    parser = argparse.ArgumentParser(description="FRIDAY komut satırı asistanı")
    parser.add_argument("command", help="Asistana iletilecek komut")
    args = parser.parse_args()

    assistant = FridayAssistant()
    print(assistant.handle(args.command))


if __name__ == "__main__":
    main()
