export type ActivityType = "oyun" | "sunu" | "etkinlik" | "yazi" | "materyal";

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  type: ActivityType;
  grade: 1 | 2 | 3 | 4;
  subject: "turkce" | "matematik" | "dunya" | "zeka";
  subjectTitle: string;
  topic: string;
  badges: string[];
  icon: string;
  color: string;
  description: string;
  isWeeklyHighlight?: boolean;
}

export interface GradeMeta {
  grade: 1 | 2 | 3 | 4;
  title: string;
  age: string;
  colorTheme: {
    bg: string;
    border: string;
    text: string;
    accent: string;
    pill: string;
  };
  weeklyHighlight: {
    topic: string;
    desc: string;
    icon: string;
  };
  subjects: {
    key: "turkce" | "matematik" | "dunya" | "zeka";
    title: string;
    icon: string;
    description: string;
  }[];
}

export const GRADES_DATA: Record<number, GradeMeta> = {
  1: {
    grade: 1,
    title: "1. Sınıf",
    age: "6 - 7 Yaş",
    colorTheme: {
      bg: "bg-rose-50",
      border: "border-rose-400",
      text: "text-rose-700",
      accent: "from-rose-500 to-amber-500",
      pill: "bg-rose-100 text-rose-800 border-rose-300",
    },
    weeklyHighlight: {
      topic: "1. Grup Sesler: [ E - T - İ - L ] & Hece Birleştirme",
      desc: "MEB Maarif Modeli ses grupları ve animasyonlu hece fabrikası",
      icon: "🔤",
    },
    subjects: [
      {
        key: "turkce",
        title: "İlk Okuma Yazma",
        icon: "🔤",
        description: "Ses sezdirme, hece oluşturma, ritmik okuma ve yazı yönü",
      },
      {
        key: "matematik",
        title: "Matematik",
        icon: "🔢",
        description: "Ritmik saymalar, onluk-birlik, nesne-sayı eşleme",
      },
      {
        key: "dunya",
        title: "Hayat Bilgisi",
        icon: "🌱",
        description: "Okulumuzda hayat, sağlıklı yaşam ve güvenli çevre",
      },
      {
        key: "zeka",
        title: "Görsel Algı & Zeka",
        icon: "🧠",
        description: "b-d ses ayrımı, dikkat, hafıza ve gölge eşleştirme",
      },
    ],
  },
  2: {
    grade: 2,
    title: "2. Sınıf",
    age: "7 - 8 Yaş",
    colorTheme: {
      bg: "bg-blue-50",
      border: "border-blue-400",
      text: "text-blue-700",
      accent: "from-blue-500 to-cyan-500",
      pill: "bg-blue-100 text-blue-800 border-blue-300",
    },
    weeklyHighlight: {
      topic: "Eş & Zıt Anlamlı Kelimeler Rallisi",
      desc: "İki kişilik yarış modu ile kelime dağarcığını zenginleştirme",
      icon: "🏁",
    },
    subjects: [
      {
        key: "turkce",
        title: "Türkçe",
        icon: "📚",
        description: "Eş-zıt anlam, noktalama işaretleri, okuduğunu anlama",
      },
      {
        key: "matematik",
        title: "Matematik",
        icon: "✖️",
        description: "Çarpma işlemine hazırlık, basamak değeri, geometrik şekiller",
      },
      {
        key: "dunya",
        title: "Hayat Bilgisi",
        icon: "🏡",
        description: "Evimizde hayat, milli günler, doğa ve çevre bilinci",
      },
      {
        key: "zeka",
        title: "Akıl & Mantık Oyunları",
        icon: "🧩",
        description: "Resimli Sudoku, şifreli kelimeler, analitik düşünme",
      },
    ],
  },
  3: {
    grade: 3,
    title: "3. Sınıf",
    age: "8 - 9 Yaş",
    colorTheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-400",
      text: "text-emerald-700",
      accent: "from-emerald-500 to-teal-500",
      pill: "bg-emerald-100 text-emerald-800 border-emerald-300",
    },
    weeklyHighlight: {
      topic: "Çarpım Tablosu 'Hit the Button' Dokunma Yarışı",
      desc: "Hızlı refleks ve ezbersiz zihinden çarpma pekiştirme oyunu",
      icon: "⚡",
    },
    subjects: [
      {
        key: "turkce",
        title: "Türkçe",
        icon: "📖",
        description: "5N1K metin anlama, söz sanatları, atasözleri ve deyimler",
      },
      {
        key: "matematik",
        title: "Matematik",
        icon: "📐",
        description: "3 basamaklı sayılar, çarpma-bölme, kesir çubukları",
      },
      {
        key: "dunya",
        title: "Fen & Hayat Bilgisi",
        icon: "🔬",
        description: "Gezegenimiz, duyu organları, kuvvet ve hareket simülatörü",
      },
      {
        key: "zeka",
        title: "BİLSEM & Strateji",
        icon: "💡",
        description: "Şekil matrisleri, örüntü tamamlama, uzamsal zeka",
      },
    ],
  },
  4: {
    grade: 4,
    title: "4. Sınıf",
    age: "9 - 10 Yaş",
    colorTheme: {
      bg: "bg-purple-50",
      border: "border-purple-400",
      text: "text-purple-700",
      accent: "from-purple-500 to-indigo-500",
      pill: "bg-purple-100 text-purple-800 border-purple-300",
    },
    weeklyHighlight: {
      topic: "Trafik Güvenliği: Yaya ve Yolcu Kuralları Simülasyonu",
      desc: "Trafik işaretleri hafıza oyunu ve acil durum senaryoları",
      icon: "🚦",
    },
    subjects: [
      {
        key: "turkce",
        title: "Türkçe",
        icon: "🖋️",
        description: "Paragraf tamamlama, ana fikir, eleştirel düşünme",
      },
      {
        key: "matematik",
        title: "Matematik",
        icon: "📊",
        description: "Dört işlem problemleri, açılar, kesirlerle toplama-çıkarma",
      },
      {
        key: "dunya",
        title: "Fen, Sosyal & Trafik",
        icon: "🚦",
        description: "Trafik işaretleri, ilk yardım, harita bilgisi, maddelerin halleri",
      },
      {
        key: "zeka",
        title: "BİLSEM & Problem Çözme",
        icon: "🎯",
        description: "Zeka soruları, algoritmik düşünme, mantık muhakeme",
      },
    ],
  },
};

export const SAMPLE_ACTIVITIES: ActivityItem[] = [
  // 1. SINIF ETKİNLİKLERİ
  {
    id: "g1-harf-canavari",
    title: "Aç Canavar: Hece Lokmaları",
    subtitle: "Duyduğun heceyi canavara fırlat!",
    type: "oyun",
    grade: 1,
    subject: "turkce",
    subjectTitle: "İlk Okuma Yazma",
    topic: "1. Grup Sesler (A-N-E-T-İ-L)",
    badges: ["MEB Maarif Modeli", "Sesli Yönerge", "Tek / Çift Kişilik"],
    icon: "👾",
    color: "from-amber-400 to-orange-500",
    description: "Starfall ve mbakillitahtam tarzı, öğrencinin doğru ses veya heceyi dinleyip dokunarak canavarı beslediği akıllı tahta oyunu.",
    isWeeklyHighlight: true,
  },
  {
    id: "g1-ziplayan-top",
    title: "Zıplayan Top: Ritmik Koro Okuma",
    subtitle: "Müzikle birlikte heceden heceye zıpla",
    type: "oyun",
    grade: 1,
    subject: "turkce",
    subjectTitle: "İlk Okuma Yazma",
    topic: "Akıcı Okuma",
    badges: ["Ayarlanabilir Hız", "Sınıf Korosu", "Piyano Eşlikli"],
    icon: "⚽",
    color: "from-rose-400 to-pink-500",
    description: "Kelimelerin üstünde ritimle zıplayan top eşliğinde sınıfça sesli okuma etkinliği. Disleksi ve hız ayarı destekli.",
  },
  {
    id: "g1-dijital-satir",
    title: "Kılavuz Çizgili Harf Çizim Tahtası",
    subtitle: "Yön oklarını takip et, harfi doğru çiz!",
    type: "yazi",
    grade: 1,
    subject: "turkce",
    subjectTitle: "İlk Okuma Yazma",
    topic: "Dik Temel Harfler Yazım Yönü",
    badges: ["Dokunmatik Çizim", "MEB Çizgi Standardı"],
    icon: "✏️",
    color: "from-sky-400 to-indigo-500",
    description: "4 çizgi 3 aralıklı MEB standart satırında parmakla animasyonlu harf yönü izleme ve dikte tahtası.",
  },
  {
    id: "g1-sayi-treni",
    title: "Sayı Treni & Onluk Bloklar",
    subtitle: "Vagonlara doğru miktarda yolcu yerleştir",
    type: "materyal",
    grade: 1,
    subject: "matematik",
    subjectTitle: "Matematik",
    topic: "Doğal Sayılar & Basamak Değeri",
    badges: ["Somut Materyal", "Sürükle-Bırak"],
    icon: "🚂",
    color: "from-emerald-400 to-teal-500",
    description: "Toy Theater tarzı sanal somut materyal: Onluk ve birlik çubukları tahtada parmakla vagonlara yerleştirilir.",
  },
  {
    id: "g1-bd-ayrim",
    title: "b - d Harf Aynası Dedektifi",
    subtitle: "Karışan harfleri dedektif büyüteciyle bul!",
    type: "oyun",
    grade: 1,
    subject: "zeka",
    subjectTitle: "Görsel Algı & Zeka",
    topic: "Disleksi & Yön Karışıklığı Çözümü",
    badges: ["Özel Eğitim Odaklı", "Sesli Ayrıştırma"],
    icon: "🔍",
    color: "from-purple-400 to-fuchsia-500",
    description: "Emin Alagöz modelinde, b ve d, p ve q harflerinin yön karmaşasını somut görsel ipuçlarıyla eğlenceli çözen dedektiflik oyunu.",
  },

  // 2. SINIF ETKİNLİKLERİ
  {
    id: "g2-anlam-rallisi",
    title: "Türkiye Kelime Rallisi",
    subtitle: "Eş ve zıt anlamlıyı bul, arabanı bitişe ulaştır!",
    type: "oyun",
    grade: 2,
    subject: "turkce",
    subjectTitle: "Türkçe",
    topic: "Sözcükte Anlam",
    badges: ["2 Öğrenci Yarış Modu", "Harita Etapları"],
    icon: "🏎️",
    color: "from-blue-400 to-indigo-500",
    description: "Ekran ikiye bölünür, iki öğrenci doğru eş anlamlı butonuna bastıkça arabaları Türkiye haritasında etap atlar.",
    isWeeklyHighlight: true,
  },
  {
    id: "g2-interaktif-saat",
    title: "Akıllı Sınıf Saati & Zaman Manipülatifi",
    subtitle: "Akrep ve yelkovanı parmağınla döndür",
    type: "materyal",
    grade: 2,
    subject: "matematik",
    subjectTitle: "Matematik",
    topic: "Zamanı Ölçme (Tam, Yarım, Çeyrek)",
    badges: ["Dokunmatik Kadran", "Dijital & Analog Eşleme"],
    icon: "⏰",
    color: "from-amber-400 to-yellow-500",
    description: "Toy Theater efsanevi interaktif saatinin Türkçe müfredat uyarlaması. Öğretmen tahtada sorular sorar, saat anında cevap verir.",
  },

  // 3. SINIF ETKİNLİKLERİ
  {
    id: "g3-hit-the-button",
    title: "Çarpım Tablosu: Butona Dokun (Hit the Button)!",
    subtitle: "Doğru sonuca en hızlı sen dokun!",
    type: "oyun",
    grade: 3,
    subject: "matematik",
    subjectTitle: "Matematik",
    topic: "Çarpma & Bölme İşlemleri",
    badges: ["İngiltere Topmarks Modeli", "Süreli/Süresiz"],
    icon: "🔘",
    color: "from-emerald-400 to-cyan-500",
    description: "Topmarks fenomen oyununun akıllı tahtaya özel versiyonu. Ekranda beliren 8 dev butondan doğru olanına el ayasıyla dokunma.",
    isWeeklyHighlight: true,
  },
  {
    id: "g3-fen-kuvvet",
    title: "Kuvvet & Hareket Laboratuvarı",
    subtitle: "İtme ve çekme kuvvetlerini nesnelerle dene",
    type: "sunu",
    grade: 3,
    subject: "dunya",
    subjectTitle: "Fen Bilimleri",
    topic: "Kuvveti Tanıyalım",
    badges: ["İnteraktif Deney Simülasyonu", "Görsel Fizik"],
    icon: "🧲",
    color: "from-teal-400 to-blue-500",
    description: "Mıknatıs, yay ve arabalarla itme-çekme kuvvetinin simülasyonu.",
  },

  // 4. SINIF ETKİNLİKLERİ
  {
    id: "g4-trafik-guvenligi",
    title: "Trafik Şehri: İşaretler & Yaya Kuralları",
    subtitle: "Doğru trafik işaretini sepetine at, yolu aç!",
    type: "oyun",
    grade: 4,
    subject: "dunya",
    subjectTitle: "Trafik Güvenliği",
    topic: "Trafik İşaretleri ve Kurallar",
    badges: ["Simülasyon", "Acil Numaralar", "MEB 4. Sınıf"],
    icon: "🚦",
    color: "from-violet-400 to-purple-500",
    description: "Yaya geçidi, okul geçidi, ışıklı işaret cihazı ve acil durum araçları senaryolarıyla hazırlanmış interaktif simülatör.",
    isWeeklyHighlight: true,
  },
  {
    id: "g4-kesir-cubuklari",
    title: "Kesir Çubukları & Modelleme Tahtası",
    subtitle: "Bütün, yarım, çeyrek çubuklarını üst üste koy",
    type: "materyal",
    grade: 4,
    subject: "matematik",
    subjectTitle: "Matematik",
    topic: "Kesirler ve Karşılaştırma",
    badges: ["Sanal Manipülatif", "Görsel Matematik"],
    icon: "📏",
    color: "from-pink-400 to-rose-500",
    description: "Kesirleri soyut bir sayı olmaktan çıkarıp renkli çubuklarla tahtada somutlaştıran laboratuvar aracı.",
  },
];
