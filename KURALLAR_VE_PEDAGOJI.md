# 🎯 Pedagojik ve Tasarım Kuralları Rehberi
> **Kaynak & İlham:** PBS KIDS (UDL Standartları), Starfall (Sentetik Fonetik) ve Özel Eğitim İlkeleri.

Bu belge, akıllı tahta platformunda geliştirilecek her ekran, her oyun ve her ses efekti için uyulması zorunlu kuralları belirler.

---

## 1. Ses ve Seslendirme Kuralları (Audio & Voiceover)

PBS KIDS ve Starfall'ın en kritik kuralı: **"Okuma bilmeyen veya okumada zorlanan çocuk hiçbir zaman ekranda tek başına ve çaresiz bırakılamaz."**

* **Üç Ayrı Ses Kanalı (Zorunlu):**
  1. `VO (Voiceover - Seslendirme):` Öğretmen ve dış ses yönergeleri.
  2. `SFX (Sound Effects - Efektler):` Doğru cevap alkışı, tıklama sesi, yıldız sesi.
  3. `BGM (Background Music - Fon Müziği):` Arka plandaki sakin melodi.
  * *Kural:* Kullanıcı veya öğretmen bu üç kanalı birbirinden bağımsız olarak kısabilmeli veya kapatabilmelidir. (Özellikle otizm ve duyusal hassasiyeti olan çocuklar için fon müziği kapatılabilmeli, sadece yönerge sesi açık kalmalıdır).

* **Yumuşak ve Cesaretlendirici Dönütler (Zero-Punitive Feedback):**
  * Yanlış cevap verildiğinde asla kırmızı çarpı (`X`), sinir bozucu hata sesi (buzzer / "bzzzt") veya "Yanlış!" ibaresi **kullanılamaz**.
  * Bunun yerine: Sevimli bir "Tekrar dene!", "Neredeyse oluyordu!", hafif bir sekme sesi veya doğru seçeneğe doğru hafifçe parlayan bir görsel ipucu verilir.

* **Saf Fonetik Seslendirme (Türkçe Kuralı):**
  * Harfler öğretilirken harf ismi (Örn: "be", "me", "te") kesinlikle kullanılmaz.
  * Saf sesler kullanılır: `/b/`, `/m/`, `/t/`.
  * Seslendirme net, tane tane ve acele edilmeden yapılmış olmalıdır.

---

## 2. Görsel ve Arayüz Kuralları (UI & Visuals)

Akıllı tahtalar geniş ekranlıdır ancak dokunmatik hassasiyetleri bir telefon kadar milimetrik değildir; öğrenci tüm avucuyla veya parmağıyla tahtaya vurabilir.

* **Geniş Dokunma Alanları (Generous Hitboxes):**
  * Tıklanabilir butonlar ve sürüklenebilir nesneler en az **64px × 64px** (ideal olarak 80px+) boyutunda olmalıdır.
  * İnce kenarlıklar, minik kapatma çarpıları (`x`) akıllı tahtada yasaktır.

* **Görsel Kontrast ve Odak (Sakin Tasarım):**
  * Arka planda dikkati dağıtan, sürekli hareket eden, yanıp sönen GIF'ler veya karmaşık desenler bulunamaz.
  * Ana etkileşim nesnesi daima sahnenin merkezinde ve yüksek kontrastla yer alır.

* **Özel Eğitim ve Disleksi Desteği:**
  * Tek tıkla açılabilen **"Disleksi Dostu Yazı Tipi"** (OpenDyslexic veya MEB Dik Temel Harf fontu) standardı.
  * Harflerin tabanları belirginleştirilmiş olmalı, `b` ve `d`, `p` ve `q` harflerinin yön karmaşasını engelleyecek renk/ipucu destekleri bulunmalıdır.

---

## 3. Etkileşim ve Oyun Mekaniği Kuralları

* **Zaman Baskısı Yok (Untimed Mode Varsayılan):**
  * Süre sınırlaması çocukta kaygı yaratır. Bütün oyunlar varsayılan olarak **süresiz** çalışır.
  * Süreölçer sadece öğretmenin tercihine bağlı olarak (sınıf yarışı vs.) opsiyonel bir mod olarak açılabilir.

* **Çoklu Duyusal Destek (Multimodal):**
  * Bir olay gerçekleştiğinde çocuk bunu aynı anda üç şekilde hisseder:
    1. *Görsel:* Parıldama, zıplama, konfeti.
    2. *İşitsel:* Neşeli bir tını, onay sesi.
    3. *Semantik:* Yazının veya hecenin seslendirilmesi.

* **Sınıf Yönetimi (İki Kişilik Yarış & Sınıf Modu):**
  * Tahtada iki öğrencinin yan yana yarışabileceği "Ekranı İkiye Böl" (Split Screen) desteği.
  * Öğretmenin tek tuşla oyunu duraklatıp açıklama yapabilmesi için "Durdur / Tahta Modu".
