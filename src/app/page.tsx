"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ClassroomToolsModal } from "@/components/ClassroomToolsModal";
import { ActivityCard } from "@/components/ActivityCard";
import { ActivityViewerModal } from "@/components/ActivityViewerModal";
import {
  GRADES_DATA,
  SAMPLE_ACTIVITIES,
  ActivityItem,
  GradeMeta,
} from "@/data/curriculum";
import {
  Sparkles,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const [selectedGrade, setSelectedGrade] = useState<1 | 2 | 3 | 4>(1);
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState<ActivityItem | null>(null);

  const gradeMeta: GradeMeta = GRADES_DATA[selectedGrade];

  // Filtreleme
  const filteredActivities = SAMPLE_ACTIVITIES.filter((item) => {
    if (item.grade !== selectedGrade) return false;
    if (selectedSubject !== "all" && item.subject !== selectedSubject) return false;
    if (selectedType !== "all" && item.type !== selectedType) return false;
    if (
      searchQuery &&
      !item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.topic.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* ÜST GEZİNME VE KONTROL ÇUBUĞU */}
      <Navbar
        currentGrade={selectedGrade}
        onSelectGrade={(g) => {
          setSelectedGrade(g);
          setSelectedSubject("all");
          setSelectedType("all");
        }}
        onOpenTools={() => setIsToolsOpen(true)}
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
        {/* SINIF SEÇİM ALANI (dersekranda & ABCya Modeli: Dev Dokunmatik Kartlar) */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                Sınıfını Seç & Derse Başla
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Giriş yapmaya gerek yok; sınıfını seç ve tahtada doğrudan oynat!
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>%100 Reklamsız & Güvenli</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[1, 2, 3, 4].map((g) => {
              const info = GRADES_DATA[g];
              const isCurrent = selectedGrade === g;
              return (
                <button
                  key={g}
                  onClick={() => {
                    setSelectedGrade(g as 1 | 2 | 3 | 4);
                    setSelectedSubject("all");
                    setSelectedType("all");
                  }}
                  className={`p-4 sm:p-5 rounded-3xl border-3 text-left transition-all duration-200 flex flex-col justify-between relative overflow-hidden btn-smart ${
                    isCurrent
                      ? `bg-white ${info.colorTheme.border} shadow-xl scale-102 ring-4 ring-amber-400/30`
                      : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl sm:text-4xl">
                      {g === 1 ? "🎒" : g === 2 ? "📘" : g === 3 ? "📗" : "📙"}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${info.colorTheme.pill}`}
                    >
                      {info.age}
                    </span>
                  </div>

                  <div>
                    <h2
                      className={`text-xl sm:text-2xl font-bold font-heading ${
                        isCurrent ? info.colorTheme.text : "text-slate-800"
                      }`}
                    >
                      {info.title}
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                      {info.weeklyHighlight.topic}
                    </p>
                  </div>

                  {/* BU HAFTANIN SESİ / KONUSU ETİKETİ */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-amber-600">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Öneri: {info.weeklyHighlight.topic}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* BU HAFTANIN ÖNE ÇIKAN DERS BANNERI (dersekranda "Bu Haftanın Sesi" Modeli) */}
        <section
          className={`rounded-3xl p-5 sm:p-6 border-2 shadow-sm bg-gradient-to-r ${gradeMeta.colorTheme.accent} text-white flex flex-col md:flex-row items-center justify-between gap-4`}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner shrink-0">
              {gradeMeta.weeklyHighlight.icon}
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/25 text-white text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bu Haftanın MEB Maarif Konusu ({gradeMeta.title})</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                {gradeMeta.weeklyHighlight.topic}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                {gradeMeta.weeklyHighlight.desc}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const highlightItem = SAMPLE_ACTIVITIES.find(
                (a) => a.grade === selectedGrade && a.isWeeklyHighlight
              );
              if (highlightItem) setActiveActivity(highlightItem);
            }}
            className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-sm sm:text-base btn-smart shadow-lg hover:bg-amber-100 transition-all font-heading whitespace-nowrap"
          >
            Hemen Başlat 🚀
          </button>
        </section>

        {/* DERS VE KATEGORİ SEÇİM SEKMELERİ (ABCya 4 Renkli Havuz) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            {/* DERS SEKMELERİ */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedSubject("all")}
                className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                  selectedSubject === "all"
                    ? "bg-slate-900 text-white shadow-md scale-102"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                Tüm Dersler
              </button>
              {gradeMeta.subjects.map((sub) => {
                const isSelected = selectedSubject === sub.key;
                return (
                  <button
                    key={sub.key}
                    onClick={() => setSelectedSubject(sub.key)}
                    className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                      isSelected
                        ? "bg-amber-400 text-slate-900 shadow-md scale-102 border-2 border-amber-500"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <span>{sub.icon}</span>
                    <span>{sub.title}</span>
                  </button>
                );
              })}
            </div>

            {/* ARAMA ÇUBUĞU */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Konu veya oyun ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-2xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* İÇERİK TÜRÜ FİLTRELERİ */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-bold shrink-0">Tür:</span>
            {[
              { key: "all", label: "Tümü" },
              { key: "oyun", label: "🎮 Eğitsel Oyunlar" },
              { key: "sunu", label: "🎬 Etkileşimli Sunular" },
              { key: "materyal", label: "🧩 Sanal Materyaller" },
              { key: "yazi", label: "✏️ Çizgi & Dikte" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setSelectedType(t.key)}
                className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  selectedType === t.key
                    ? "bg-slate-800 text-white"
                    : "bg-slate-200/70 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </section>

        {/* ETKİNLİK VE OYUN KARTLARI IZGARASI */}
        <section>
          {filteredActivities.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-slate-300">
              <span className="text-5xl block mb-3">🔍</span>
              <h3 className="text-xl font-bold font-heading text-slate-800">
                Aradığınız kriterde etkinlik bulunamadı
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Filtreleri sıfırlayarak tüm oyun ve etkinlikleri görüntüleyebilirsiniz.
              </p>
              <button
                onClick={() => {
                  setSelectedSubject("all");
                  setSelectedType("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2.5 rounded-2xl bg-amber-400 text-slate-900 font-bold text-sm btn-smart"
              >
                Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredActivities.map((act) => (
                <ActivityCard
                  key={act.id}
                  activity={act}
                  onLaunch={(activity) => setActiveActivity(activity)}
                />
              ))}
            </div>
          )}
        </section>

        {/* PEDAGOJİK BİLGİLENDİRME & ÖZEL EĞİTİM STANDARTLARI */}
        <section className="bg-white rounded-3xl p-6 border-2 border-slate-200 text-slate-700">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl shrink-0">
              🌱
            </div>
            <div>
              <h4 className="text-lg font-bold font-heading text-slate-900 mb-1">
                Öğretmenler & Veliler İçin Pedagojik Güvence
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bu platformda yer alan tüm materyaller; <strong>MEB Türkiye Yüzyılı Maarif Modeli</strong> ve kanıtlanmış ses temelli ilk okuma yazma (Sentetik Fonetik) ilkelerine göre hazırlanmıştır. Bilimsel dayanağı olmayan ezber modelleri (Basara vb.) platformumuzda yer almaz. Sistemimiz, evrensel tasarım (UDL) prensipleriyle tüm öğrencilerin, özel eğitim ve kaynaştırma öğrencilerinin de en yüksek verimle öğrenebileceği şekilde tasarlanmıştır.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-6 px-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-700">
          AkıllıTahtam © 2026 • İlkokul & Kapsayıcı Akıllı Tahta Eğitim Platformu
        </p>
        <p className="mt-1 text-[11px] text-slate-400">
          Öğretmenler, öğrenciler ve sınıflar için sevgi ve bilimsel pedagojiyle geliştirildi.
        </p>
      </footer>

      {/* MODALLAR */}
      <ClassroomToolsModal
        isOpen={isToolsOpen}
        onClose={() => setIsToolsOpen(false)}
      />

      <ActivityViewerModal
        activity={activeActivity}
        onClose={() => setActiveActivity(null)}
      />
    </div>
  );
}
