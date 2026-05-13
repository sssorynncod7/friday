from __future__ import annotations

from dataclasses import dataclass
from typing import Callable


@dataclass(slots=True)
class CommandContext:
    raw_command: str


SkillHandler = Callable[[CommandContext], str]


class FridayAssistant:
    """Modüler FRIDAY çekirdeği."""

    def __init__(self) -> None:
        self._skills: dict[str, SkillHandler] = {}
        self._bootstrap_builtin_skills()

    def _bootstrap_builtin_skills(self) -> None:
        self.register_skill("sistemi başlat", lambda _: "FRIDAY çevrimiçi. Tüm sistemler nominal.")
        self.register_skill("durum raporu ver", lambda _: "Enerji: %100 | Ağ: Stabil | Güvenlik: Aktif")
        self.register_skill("ışıkları aç", lambda _: "Akıllı ev katmanı: salon ışıkları açıldı.")
        self.register_skill("takvime yarın 09:00 toplantı ekle", lambda _: "Takvim girdisi oluşturuldu: Yarın 09:00 toplantı.")

    def register_skill(self, trigger: str, handler: SkillHandler) -> None:
        self._skills[trigger.strip().lower()] = handler

    def handle(self, command: str) -> str:
        normalized = command.strip().lower()
        context = CommandContext(raw_command=command)

        if normalized in self._skills:
            return self._skills[normalized](context)

        return (
            "Komut anlaşılamadı. Öneri: 'durum raporu ver' veya 'sistemi başlat'. "
            "Yeni yetenek için register_skill kullanabilirsiniz."
        )
