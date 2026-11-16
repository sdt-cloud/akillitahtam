# 🛠️ Teknoloji ve Geliştirme Araçları Seçenekleri

Bu belge, projenin hangi araçlar, kütüphaneler ve programlama dilleriyle kodlanacağına karar vermek üzere hazırlanmıştır.

---

## Seçenek 1: Next.js (React) + Tailwind CSS + Web Audio / Canvas (Şiddetle Önerilen)

* **Nasıl Çalışır?**
  * Modern web dünyasının endüstri standardıdır.
  * Bileşen (Component) mimarisiyle çalışır (Her buton, her canavar, her ses çubuğu bağımsız birer yapı taşıdır).
  * **PWA (Progressive Web App)** özelliği sayesinde internet bağlantısı kopsa bile tahtada çevrimdışı çalışabilir.
* **Artıları:**
  * İnanılmaz hızlı sayfa geçişleri (Öğretmen 1. sınıfa bastığında sayfa yenilenmez, anında açılır).
  * Akıllı tahtalarda (Pardus / Windows) donanım ivmesini doğrudan GPU üzerinden kullanır; kasma yapmaz.
  * İleride genel yayına çıktığınızda sunucu masrafı sıfıra yakındır (Vercel, Cloudflare Pages gibi yerlerde ücretsiz yayınlanabilir).
  * Kod yapısı tertemizdir; bir oyunda yapılan düzeltme diğer oyunları bozmaz.
* **Eksileri:**
  * WordPress gibi sürükle-bırak arayüzü yoktur; temiz kod yazmayı gerektirir (Bunu zaten birlikte inşa edeceğiz).

---

## Seçenek 2: Phaser.js (2D Oyun Motoru) + Hafif Web Arayüzü

* **Nasıl Çalışır?**
  * Doğrudan HTML5 Canvas üzerinde 60 FPS grafikler çizen saf bir oyun motorudur.
* **Artıları:**
  * Karmaşık fizik efektleri, parçacık patlamaları, gelişmiş animasyonlar için çok güçlüdür.
* **Eksileri:**
  * Menüler, sınıf listeleri, butonlar ve erişilebilirlik (ekran okuyucu, disleksi fontu değiştirmek) çok zordur.
  * Her şeyi sıfırdan çizmek gerekir; normal web metinleri ve butonları gibi doğal dokunmatik davranmaz.

---

## Seçenek 3: WordPress / PHP / Eklentiler

* **Nasıl Çalışır?**
  * Geleneksel içerik yönetim sistemi (Elementor, H5P eklentileri vb.).
* **Neden Önerilmiyor?**
  * **Yavaşlık:** Veritabanı sorguları ve ağır eklentiler akıllı tahtalarda donma ve takılma yapar.
  * **Sınırlı İnteraktiflik:** Aç Canavar, Zıplayan Top, Gürültü Ölçer gibi mikrofon veya dinamik ses isteyen araçlar WordPress'te ya çalışmaz ya da harici iframe gerektirir.
  * **Özelleştirme Zorluğu:** Özel eğitim ve disleksi modunu entegre etmek bir çileye dönüşür.

---

## Özet Karar Matrisi

| Kriter | Next.js (React) + Tailwind | Phaser.js | WordPress |
| :--- | :---: | :---: | :---: |
| **Akıllı Tahta Hızı (FPS)** | ⭐⭐⭐⭐⭐ (Çok Yüksek) | ⭐⭐⭐⭐⭐ (Çok Yüksek) | ⭐⭐ (Yavaş/Kasıntılı) |
| **PWA (İnternetsiz Çalışma)** | ⭐⭐⭐⭐⭐ (Mükemmel) | ⭐⭐⭐⭐ (İyi) | ⭐ (Çok Zor) |
| **Özel Eğitim Erişilebilirliği**| ⭐⭐⭐⭐⭐ (Tam Uyumlu) | ⭐⭐ (Zor) | ⭐⭐⭐ (Orta) |
| **Geliştirme Hızı & Modülerlik**| ⭐⭐⭐⭐⭐ (Bileşen Bazlı) | ⭐⭐⭐ (Zahmetli) | ⭐⭐⭐⭐ (Başta kolay, sonra kilitlenir) |
| **Maliyet (Hosting / Sunucu)** | ⭐⭐⭐⭐⭐ (0 TL - Ücretsiz CDN) | ⭐⭐⭐⭐⭐ (0 TL) | ⭐⭐ (Aylık sunucu ücreti) |

---

## Nihai Tavsiye:
Arayüzü, sınıf seçimlerini ve genel iskeleti **Next.js (React) + Tailwind CSS** ile kurup; oyun mekaniklerinde HTML5 Canvas ve Web Audio API gücünden faydalanmak hem performans hem de uzun vadeli genel yayın için en doğru yoldur.
