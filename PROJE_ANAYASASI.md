# 📜 Proje Anayasası: Temel İlkeler ve Tasarım Kuralları

Bu belge, platformun geliştirilmesinde taviz verilmeyecek 7 temel kuralı belirler.

---

### Kural 1: Kapsayıcı Tasarım (Özel Eğitim Ayrı Bir Bölüm Değildir)
* Sitede ayrı bir "Özel Eğitim" sekmesi, butonu veya ayrılmış bir kategori **bulunmayacaktır**.
* Platform, en başından itibaren özel eğitim ve kaynaştırma öğrencilerini de kapsayacak biçimde **Evrensel Öğrenme Tasarımı (UDL)** ilkelerine göre inşa edilir.
* Her öğrenci aynı sayfayı kullanır; ancak büyük butonlar, sadeleştirilmiş görsel odak, yüksek kontrast, ayarlanabilir ses kanalları ve yumuşak dönütler standart olarak tüm öğrencilere hizmet eder.

### Kural 2: İlkokul Çocuklarına Uygun Canlı ve Ergonomik Tasarım
* Renk paleti canlı, neşeli fakat göz yormayan pastel tonlardan oluşur.
* Yazı tipleri (fontlar) çocuklar için özel seçilir: Yuvarlak hatlı, harf ayrımı belirgin (örn. `b` ve `d` karışıklığını önleyen, dik temel harflere uyumlu - *Fredoka, Nunito, Quicksand*).
* Büyüklükler akıllı tahtada en arkadaki sıradan bile rahatça okunabilecek puntolardadır.

### Kural 3: Sıfır Engel – Doğrudan Erişim
* Kayıt olma, şifre girme, giriş yapma veya onay kodu gibi bariyerler **yoktur**.
* Akıllı tahtada site açıldığı an doğrudan:
  `[ Sınıf Seçimi: 1. Sınıf | 2. Sınıf | 3. Sınıf | 4. Sınıf ] ➔ [ Ders / Konu ] ➔ [ Etkinlik ]`
* 3 saniye içinde ders başlar.

### Kural 4: MEB Maarif Modeli ve Bilimsel Pedagoji
* Tüm içerikler MEB güncel müfredatına ve kanıtlanmış pedagojik bilimsel yöntemlere dayanır.
* Bilimsel geçerliliği olmayan veya MEB standartlarıyla uyuşmayan yaklaşımlar (Basara vb.) sisteme alınmaz.
* İlk okuma yazmada **Ses Temelli Sentetik Fonetik** (Harf grupları: `a-n-e-t-i-l`, `o-k-u-r-ı-m`...), ses hissettirme, ses birleştirme (blending), ritmik akıcı okuma ve dik temel yazı yönü esas alınır.
* Matematikte somuttan soyuta aşamalı öğretim uygulanır.

### Kural 5: Modern Yüksek Kaliteli Görseller
* 10 yıllık piksel piksel olmuş eski görseller, kırpılmış düşük kaliteli resimler kullanılmaz.
* Modern SVG vektörler, temiz illüstrasyonlar ve yapay zeka destekli görsel üretim araçları kullanılır.

### Kural 6: Sıkı Sürüm Kontrolü (Git & GitHub)
* Her kritik aşamada, her yeni bileşende düzenli Git commit'i alınır.
* Olası bir hata veya geri dönüş talebinde geriye sarılabilir mimari korunur.

### Kural 7: Yeni Nesil Akıllı Tahta Deneyimi
* Flash oyun taklitleri veya hantal Wordwall iframe yığınları kullanılmaz.
* 60 FPS hızında çalışan, akıllı tahta dokunmatiğine duyarlı, modern web bileşenleri üretilir.
