from friday.core import FridayAssistant


def test_builtin_skill_response() -> None:
    assistant = FridayAssistant()
    result = assistant.handle("durum raporu ver")
    assert "Enerji" in result


def test_unknown_command_response() -> None:
    assistant = FridayAssistant()
    result = assistant.handle("bilinmeyen komut")
    assert "Komut anlaşılamadı" in result
