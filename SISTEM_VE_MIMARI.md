# 🏛️ Sistem ve İçerik Mimarisi
> **Kapsam:** 1-4. Sınıf, Özel Eğitim, Dersler, Oyun Motorları ve Veri Modeli.

---

## 1. Sınıf ve Kategori Hiyerarşisi

Sistem `ABCya` ve `dersekranda` modellerinin birleşimiyle 4 ana seviyede kurgulanmıştır:

### A. Giriş Katmanı (Anasayfa)
* **Hızlı Sınıf Butonları:**
  * 🎒 1. Sınıf *(Haftalık Öneri: "Bu Hafta: [X] Sesi")*
  * 📘 2. Sınıf *(Haftalık Öneri: "Bu Hafta: Eş Anlamlı Kelimeler")*
  * 📗 3. Sınıf *(Haftalık Öneri: "Bu Hafta: 4'er Ritmik Sayma")*
  * 📙 4. Sınıf *(Haftalık Öneri: "Bu Hafta: Trafik İşaretleri")*
  * 🧩 Özel Eğitim & Bireysel Destek *(Hassas mod, dikkat, eşleme)*
* **Sınıf Yönetim Araç Çubuğu:**
  * 🔊 Desibel Ölçer (Gürültü Uyarısı)
  * 🎡 Çarkıfelek (Öğrenci Seçici)
  * ⏱️ Geri Sayım Sayacı & Kum Saati
  * 🚦 Sınıf Trafik Lambası (Kırmızı / Sarı / Yeşil Çalışma Kuralı)
  * 📝 Kılavuz Çizgili Yazı/Çizim Tahtası

### B. Her Sınıfın İçindeki 4 Renkli Havuz (ABCya Modeli)
1. 🔤 **Harfler & Dil (Türkçe)**
   * *1. Sınıf:* Ses hissetme, ses birleştirme (blending), Aç Canavar (hece yeme), zıplayan top (ritmik okuma), dik temel harf yazım yönü.
   * *2-4. Sınıf:* Eş/Zıt anlamlılar ralli oyunu, noktalama işaretleri fırlatma, 5N1K treni, sözcükte anlam.
2. 🔢 **Sayılar & Hesap (Matematik)**
   * *1. Sınıf:* Nesne-sayı eşleme, ritmik sayma zıp zıp kurbağa, 10'a tamamlama.
   * *2-4. Sınıf:* Çarpım tablosu "Hit the Button", onluk-birlik şeker fabrikası, kesir çubukları, geometrik şekil avcısı.
3. 🌍 **Dünya & Beceri (Hayat Bilgisi, Fen, Trafik)**
   * *1-3. Sınıf Hayat Bilgisi:* Okul kuralları, sağlıklı beslenme sepeti, duygu tanıma.
   * *3-4. Sınıf Fen Bilimleri:* Canlılar dünyası, kuvvet-hareket deney simülasyonları, gezegenler.
   * *4. Sınıf Trafik Güvenliği:* Trafik işaretleri hafıza kartları, yaya geçidi simülatörü, acil numaralar oyunu.
4. 🧠 **Zeka & Strateji (BİLSEM, Dikkat, Özel Eğitim)**
   * `b - d` ve `m - n` ses ayrıştırma oyunları.
   * Çocuklar için resimli 4x4 ve 6x6 Sudoku.
   * Göz kası ve sıçrama (hızlı görme) egzersizleri.
   * Görsel hafıza, gölge eşleştirme, labirentler.

---

## 2. Yeniden Kullanılabilir 6 Temel Oyun Motoru

Yeni bir oyun yapmak için sıfırdan kod yazılmaz. 6 ana motor şablonu hazırlanır; her etkinlik bir JSON veri dosyasından beslenir.

```
┌────────────────────────────────────────────────────────┐
│                      OYUN MOTORU                       │
│    (Sürükle-Bırak, Çarpışma, Ses Efektleri, Konfeti)    │
└──────────────────────────▲─────────────────────────────┘
                           │
             ┌─────────────┴─────────────┐
             │    JSON VERİ DOSYASI      │
             │   - Soru listesi          │
             │   - Hedef kutular         │
             │   - Ses & görsel yolları  │
             └───────────────────────────┘
```

1. **Besleme & Sepete Atma Motoru ("Aç Canavar / Hazine Sandığı"):**
   * Nesneleri sürükleyip doğru canavarın/kutunun ağzına bırakma.
2. **Ritim & Zıplayan Top Motoru:**
   * Kelimeler veya sayılar üzerinde ritimli atlayan gösterge.
3. **Refleks & Dokunma Motoru ("Hit the Button"):**
   * Tahtadaki doğru butonlara en hızlı şekilde dokunma.
4. **2 Kişilik Ralli / Yarış Motoru:**
   * Ekran ikiye bölünür, doğru cevaba basan yarışçının arabası bitişe yaklaşır.
5. **Hafıza & Eşleme Motoru:**
   * Kart çevirme, çizgiyle birleştirme, gölge-nesne eşleme.
6. **Yazı & Çizgi Takip Motoru:**
   * Dik temel harf ve sayıların yön oklu kılavuz çizgilerinde parmakla çizilmesi.

---

## 3. Örnek JSON İçerik Formatı (Veri Modeli)

Öğretmen ileride tek satır kod değiştirmeden sadece bir liste vererek yeni oyun türetebilir:

```json
{
  "id": "1-sinif-el-hecesi-canavar",
  "engine": "monster_drop",
  "title": "Aç Canavar: 'EL' Hecesini Bul",
  "category": "harfler",
  "grade": 1,
  "config": {
    "target": "el",
    "voicePrompt": "/sounds/vo/el-bul.mp3",
    "options": [
      { "text": "el", "isCorrect": true, "sound": "/sounds/el.mp3" },
      { "text": "al", "isCorrect": false, "sound": "/sounds/al.mp3" },
      { "text": "le", "isCorrect": false, "sound": "/sounds/le.mp3" }
    ]
  }
}
```
