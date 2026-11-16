"use client";

import React, { useState, useEffect } from "react";
import {
  Volume2,
  Maximize2,
  Minimize2,
  Eye,
  Wrench,
  Music,
  BellRing,
  Sun,
} from "lucide-react";

interface NavbarProps {
  currentGrade: 1 | 2 | 3 | 4;
  onSelectGrade: (grade: 1 | 2 | 3 | 4) => void;
  onOpenTools: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentGrade,
  onSelectGrade,
  onOpenTools,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDyslexiaMode, setIsDyslexiaMode] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  // Ses Kanal Kontrolleri (PBS KIDS standardı)
  const [voEnabled, setVoEnabled] = useState(true); // Voiceover
  const [sfxEnabled, setSfxEnabled] = useState(true); // Sound effects
  const [bgmEnabled, setBgmEnabled] = useState(false); // Background music

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const toggleDyslexia = () => {
    setIsDyslexiaMode((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add("font-dyslexia");
      } else {
        document.body.classList.remove("font-dyslexia");
      }
      return next;
    });
  };

  const toggleHighContrast = () => {
    setIsHighContrast((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add("high-contrast");
      } else {
        document.body.classList.remove("high-contrast");
      }
      return next;
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-200 shadow-sm px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => onSelectGrade(1)}>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 flex items-center justify-center shadow-md transform hover:rotate-6 transition-transform">
            <span className="text-2xl">🎓</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent font-heading">
                AkıllıTahtam
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300">
                MEB Maarif Modeli
              </span>
            </div>
            <p className="text-xs text-slate-700 font-medium hidden sm:block">
              İlkokul & Kapsayıcı Akıllı Tahta Platformu
            </p>
          </div>
        </div>

        {/* HIZLI SINIF GEÇİŞ ÇUBUĞU */}
        <div className="hidden md:flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {[1, 2, 3, 4].map((g) => {
            const isSelected = currentGrade === g;
            return (
              <button
                key={g}
                onClick={() => onSelectGrade(g as 1 | 2 | 3 | 4)}
                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all duration-150 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-white text-slate-900 shadow-md scale-105 border border-slate-200"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                <span>{g === 1 ? "🎒" : g === 2 ? "📘" : g === 3 ? "📗" : "📙"}</span>
                <span>{g}. Sınıf</span>
              </button>
            );
          })}
        </div>

        {/* SAĞ KONTROLLER: Sınıf Araçları, Ses ve Erişilebilirlik */}
        <div className="flex items-center gap-2">
          {/* SINIF ARAÇLARI (Classroomscreen Modeli) */}
          <button
            onClick={onOpenTools}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 border-2 border-amber-300 font-bold text-xs sm:text-sm btn-smart transition-all shadow-sm"
            title="Sınıf Araçları: Çarkıfelek, Gürültü Ölçer, Zamanlayıcı"
          >
            <Wrench className="w-4 h-4 text-amber-600 animate-spin-slow" />
            <span className="hidden sm:inline">Sınıf Araçları</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-200 text-amber-900 text-[10px]">
              Canlı
            </span>
          </button>

          {/* SES KONTROLLERİ GRUBU */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-2xl p-1 border border-slate-200">
            <button
              onClick={() => setVoEnabled(!voEnabled)}
              className={`p-2 rounded-xl transition-colors ${
                voEnabled ? "bg-white text-emerald-700 shadow-sm" : "text-slate-500 hover:bg-slate-200"
              }`}
              title={voEnabled ? "Dış Ses / Yönerge: Açık" : "Dış Ses: Kapalı"}
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSfxEnabled(!sfxEnabled)}
              className={`p-2 rounded-xl transition-colors ${
                sfxEnabled ? "bg-white text-sky-700 shadow-sm" : "text-slate-500 hover:bg-slate-200"
              }`}
              title={sfxEnabled ? "Oyun Ses Efektleri: Açık" : "Efektler: Kapalı"}
            >
              <BellRing className="w-4 h-4" />
            </button>
            <button
              onClick={() => setBgmEnabled(!bgmEnabled)}
              className={`p-2 rounded-xl transition-colors ${
                bgmEnabled ? "bg-white text-purple-700 shadow-sm" : "text-slate-500 hover:bg-slate-200"
              }`}
              title={bgmEnabled ? "Fon Müziği: Açık" : "Fon Müziği: Kapalı"}
            >
              <Music className="w-4 h-4" />
            </button>
          </div>

          {/* ERİŞİLEBİLİRLİK: DİSLEKSİ */}
          <button
            onClick={toggleDyslexia}
            className={`p-2.5 rounded-2xl border transition-all ${
              isDyslexiaMode
                ? "bg-indigo-600 text-white border-indigo-700 shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200"
            }`}
            title="Disleksi & Kolay Okuma Yazı Tipi"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* ERİŞİLEBİLİRLİK: KONTRAST */}
          <button
            onClick={toggleHighContrast}
            className={`p-2.5 rounded-2xl border transition-all ${
              isHighContrast
                ? "bg-amber-500 text-white border-amber-600 shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200"
            }`}
            title="Yüksek Kontrast Modu"
          >
            <Sun className="w-4 h-4" />
          </button>

          {/* TAM EKRAN (Akıllı Tahta F11) */}
          <button
            onClick={toggleFullscreen}
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all active:scale-95"
            title={isFullscreen ? "Tam Ekrandan Çık" : "Akıllı Tahta Tam Ekran"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 text-rose-600" />
            ) : (
              <Maximize2 className="w-4 h-4 text-slate-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
