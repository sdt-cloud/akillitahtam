"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { ActivityItem } from "@/data/curriculum";
import { X, Users } from "lucide-react";

interface ActivityViewerModalProps {
  activity: ActivityItem | null;
  onClose: () => void;
}

export const ActivityViewerModal: React.FC<ActivityViewerModalProps> = ({
  activity,
  onClose,
}) => {
  const [isTwoPlayer, setIsTwoPlayer] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!activity) return null;

  // Mini interaktif test demosu (Canavar / Eşleme mekaniği gösterimi)
  const handleOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 10);
      setFeedback("🎉 Harika! Doğru ses/hece!");
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {
        // Confetti opsiyonel
      }
    } else {
      // PBS Kids Kuralı: Asla kırmızı X veya acı hata sesi yok! Yumuşak yönlendirme
      setFeedback("💡 Neredeyse oluyordu! Bir kez daha dene!");
    }

    setTimeout(() => {
      setFeedback(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 rounded-3xl border-4 border-amber-400 w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden shadow-2xl text-white">
        {/* ÜST BİLGİ & KONTROL ÇUBUĞU */}
        <div className="bg-slate-800/90 px-4 sm:px-6 py-3 border-b border-slate-700 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{activity.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {activity.grade}. Sınıf • {activity.subjectTitle}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {activity.topic}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-heading text-white">
                {activity.title}
              </h2>
            </div>
          </div>

          {/* SAĞ ÜST KONTROLLER */}
          <div className="flex items-center gap-2">
            {/* 2 KİŞİLİK YARIŞ MODU */}
            <button
              onClick={() => setIsTwoPlayer(!isTwoPlayer)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                isTwoPlayer
                  ? "bg-purple-600 border-purple-400 text-white shadow-md"
                  : "bg-slate-700/60 border-slate-600 text-slate-300 hover:bg-slate-700"
              }`}
              title="Ekranı İkiye Böl (2 Öğrenci Yarış Modu)"
            >
              <Users className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">2 Kişilik Tahta Modu</span>
            </button>

            {/* KAPAT */}
            <button
              onClick={onClose}
              className="p-2 rounded-2xl bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/40 transition-all"
              title="Kapat ve Listeye Dön"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ANA SAHNE (ETKİNLİK / OYUN ALANI) */}
        <div className="flex-1 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 p-4 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden">
          {/* GERİ BİLDİRİM BANNERI (PBS KIDS YUMUŞAK DÖNÜT) */}
          {feedback && (
            <div className="absolute top-6 z-30 bg-amber-400 text-slate-950 px-6 py-2.5 rounded-2xl font-bold text-base sm:text-lg shadow-xl animate-bounce-slow font-heading border-2 border-white">
              {feedback}
            </div>
          )}

          {/* OYUN / MATERYAL İSKELETİ DEMO GÖRÜNÜMÜ */}
          <div className="w-full flex-1 flex flex-col items-center justify-center max-w-3xl text-center">
            {/* Karakter / Canavar / Hedef Alanı */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-7xl sm:text-8xl shadow-2xl animate-float border-4 border-amber-200 mb-6">
              {activity.icon}
            </div>

            <div className="bg-slate-800/80 backdrop-blur-md px-6 py-4 rounded-3xl border border-slate-700 mb-6 max-w-lg">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                🗣️ Dış Ses Yönergesi:
              </p>
              <p className="text-base sm:text-lg font-medium text-slate-200">
                &ldquo;{activity.subtitle}&rdquo;
              </p>
            </div>

            {/* DOKUNMATİK SEÇENEK BUTONLARI (Hitbox: 80px, Dokunmatik Akıllı Tahta Standardı) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl">
              {[
                { label: "EL", isCorrect: true },
                { label: "AL", isCorrect: false },
                { label: "LE", isCorrect: false },
              ].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(opt.isCorrect)}
                  className="py-5 px-6 rounded-3xl bg-gradient-to-b from-slate-700 to-slate-800 hover:from-amber-500 hover:to-orange-600 active:scale-95 text-white font-bold text-2xl sm:text-3xl btn-smart border-2 border-slate-600 hover:border-amber-300 transition-all font-heading shadow-lg"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* ALT KONTROL BİLGİSİ */}
          <div className="w-full flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Akıllı Tahta Tam Dokunmatik Uyumlu</span>
            </div>
            <div className="font-bold text-amber-400">
              Puan: <span className="text-white text-base">{score}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
