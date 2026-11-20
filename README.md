# 🎓 AkıllıTahtam - İlkokul & Kapsayıcı Akıllı Tahta Eğitim Platformu

[![Next.js 14](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![MEB Maarif Modeli](https://img.shields.io/badge/MEB-Türkiye%20Yüzyılı%20Maarif%20Modeli-red?style=for-the-badge)](https://meb.gov.tr)

**AkıllıTahtam**, ilkokul 1-4. sınıf düzeyindeki tüm öğrenciler ve kaynaştırma/özel eğitim gereksinimi olan çocuklar için özel olarak tasarlanmış, akıllı tahta (etkileşimli tahta) odaklı, modern, bilimsel ve kapsayıcı bir dijital eğitim platformudur.

---

## 🌟 Öne Çıkan Özellikler

- **🎯 MEB Türkiye Yüzyılı Maarif Modeli Uyumu:** Müfredat haftalarına göre dinamik konu ve ses önerileri.
- **♿ Doğuştan Kapsayıcı (UDL - Universal Design for Learning):** Özel eğitim için ayrı bir sekme yerine, tüm platform baştan itibaren disleksi, DEHB ve öğrenme güçlüğü olan çocukları destekleyecek şekilde kurgulanmıştır.
- **🔬 Bilimsel Ses Eğitimi:** Ezberci veya bilimsel geçerliliği olmayan sistemler (Basara vb.) yerine, kanıtlanmış **Sentetik Fonetik (Ses Temelli İlk Okuma)** metodolojisi.
- **🚀 Sıfır Bürokrasili Sınıf Deneyimi:** Giriş yapma veya kayıt olma zorunluluğu yok. Tahtayı aç, sınıfını seç ve derse başla.
- **🎨 Çocuk Odaklı Canlı Tasarım:** Baloo 2 ve Nunito yazı tipleri ile %100 eksiksiz Türkçe karakter desteği, parlak canlı renkler ve yüksek kontrast seçenekleri.
- **🛠️ Entegre Sınıf Araçları:**
  - 🎡 **Çarkıfelek:** Rastgele öğrenci seçici & konfeti kutlaması
  - 🎙️ **Gürültü Ölçer:** Sınıf ses seviyesi takipçisi
  - ⏱️ **Geri Sayım Sayacı:** Etkinlik ve süre yönetimi
  - 🚦 **Trafik Lambası:** Sınıf kuralları görsel durum ışıkları
- **👥 İki Oyunculu Tahta Modu:** Tahta başında yan yana iki öğrencinin aynı anda yarışıp öğrenebileceği bölünmüş ekran desteği.

---

## 📜 Proje Anayasası (7 Temel İlke)

1. **Özel Eğitim Doğal Olarak İçeride:** Ayrı bir "engelli/özel eğitim" sekmesi yok; tüm sistem evrensel tasarım prensipleriyle herkes için erişilebilir.
2. **Çocuk Dostu Tipografi ve Renkler:** %100 Türkçe destekli yuvarlak hatlı fontlar, göz yormayan yüksek kontrastlı renkler.
3. **Kayıt ve Giriş Yok:** Sınıfta akıllı tahta başında vakit kaybetmeden doğrudan öğrenmeye odaklanma.
4. **MEB Maarif Modeli ve Bilimsel Pedagoji:** Sadece bilimsel olarak kanıtlanmış öğretim modelleri yer alır.
5. **Modern Vektörel Grafikler:** 10 yıllık eski Flash oyunları veya hantal Wordwall iframe'leri yok; 60 FPS modern web motorları.
6. **Sıkı Sürüm Kontrolü:** Her geliştirme aşaması Git commit'leri ve günlük kayıtları (`GUNLUK_*.md`) ile arşivlenir.
7. **Akıllı Tahta Dokunmatik Ergonomisi:** Minimum 64-80px dokunma hedefleri ve cezalandırıcı olmayan pozitif ses/görsel pekiştireçler.

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# 1. Depoyu klonlayın
git clone https://github.com/sdt-cloud/akillitahtam.git
cd akillitahtam

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

### Üretim Derlemesi:

```bash
npm run build
npm run start
```

---

## 📁 Proje Yapısı

```
├── public/
│   └── fonts/             # Baloo 2 ve Nunito yerel font dosyaları
├── src/
│   ├── app/
│   │   ├── globals.css    # Tailwind & özel animasyonlar
│   │   ├── layout.tsx     # Kök düzen ve meta veriler
│   │   └── page.tsx       # Ana akıllı tahta paneli
│   ├── components/
│   │   ├── Navbar.tsx             # Akıllı tahta üst kontrol çubuğu
│   │   ├── ActivityCard.tsx       # Dokunmatik etkinlik kartı
│   │   ├── ActivityViewerModal.tsx# Tam ekran tahta sahnesi
│   │   └── ClassroomToolsModal.tsx# Çarkıfelek, gürültü ölçer vb.
│   └── data/
│       └── curriculum.ts  # 1-4. Sınıf MEB Maarif müfredat veri modeli
├── PROJE_ANAYASASI.md     # 7 Temel Kural
├── KURALLAR_VE_PEDAGOJI.md# Pedagoji ve UDL standartları
├── SISTEM_VE_MIMARI.md    # Teknik mimari ve oyun motoru şeması
└── GUNLUK_*.md            # Günlük geliştirme kayıtları
```

---

## 📄 Lisans

Bu proje, öğretmenler, özel eğitimciler ve öğrenciler için sevgi ve bilimsel pedagojiyle geliştirilmektedir.
