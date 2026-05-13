# FRIDAY

FRIDAY, Demir Adam'ın JARVIS vizyonundan ilham alan; modüler, genişletilebilir ve yerel çalıştırılabilir bir yapay zeka asistan altyapısıdır.

## Vizyon
- **Komuta merkezi**: Metin/ses komutlarını alır ve niyetleri çözümler.
- **Beceri sistemi**: Her yetenek bağımsız bir "skill" modülü olarak eklenir.
- **Güvenli eylem katmanı**: Kritik aksiyonlar için kural tabanlı onay mekanizması.
- **Geleceğe açık**: LLM, TTS, STT, otomasyon ve IoT entegrasyonlarına hazır çekirdek.

## Hızlı Başlangıç

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e .[dev]
python -m friday.cli "sistemi başlat"
```

## Örnek Komutlar
- `sistemi başlat`
- `durum raporu ver`
- `ışıkları aç`
- `takvime yarın 09:00 toplantı ekle`

## Mimari
- `friday.core`: Orkestrasyon, olay modeli, güvenlik ve skill kaydı.
- `friday.skills`: Dahili skill'ler (sistem, ev otomasyonu, takvim örnekleri).
- `friday.cli`: Hızlı prototipleme için komut satırı arayüzü.

## Yol Haritası
1. Ses girişi/çıkışı (STT/TTS) adaptörleri
2. Çoklu ajan koordinasyonu
3. Uzun dönem hafıza ve bağlam yönetimi
4. Görev planlayıcı + bildirim altyapısı
