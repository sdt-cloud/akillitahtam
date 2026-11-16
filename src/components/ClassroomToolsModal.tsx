"use client";

import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import {
  X,
  RotateCw,
  Play,
  Pause,
  RotateCcw,
  Mic,
  MicOff,
} from "lucide-react";

interface ClassroomToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClassroomToolsModal: React.FC<ClassroomToolsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"cark" | "gurultu" | "sayac" | "trafik">("cark");

  // --- 1. ÇARKI FELEK (ÖĞRENCİ SEÇİCİ) ---
  const [namesText, setNamesText] = useState(
    "Ali\nAyşe\nMehmet\nZeynep\nCan\nElif\nBurak\nDuru\nKerem\nDefne"
  );
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [wheelRotation, setWheelRotation] = useState(0);

  const spinWheel = () => {
    const list = namesText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    if (list.length === 0 || isSpinning) return;

    setIsSpinning(true);
    setSelectedStudent(null);

    const randomIndex = Math.floor(Math.random() * list.length);
    const chosen = list[randomIndex];

    // Çoklu tam dönüş + rastgele açı
    const extraDegree = 360 * 5 + Math.floor(Math.random() * 360);
    setWheelRotation((prev) => prev + extraDegree);

    setTimeout(() => {
      setSelectedStudent(chosen);
      setIsSpinning(false);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Confetti opsiyonel
      }
    }, 3000);
  };

  // --- 2. GERİ SAYIM SAYACI ---
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTimerRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            try {
              confetti({ particleCount: 50, spread: 60 });
            } catch {
              // Confetti opsiyonel
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isTimerRunning]);

  const setTimerPreset = (secs: number) => {
    setIsTimerRunning(false);
    setTimerSeconds(secs);
  };

  // --- 3. GÜRÜLTÜ ÖLÇER (DESİBEL METRE) ---
  const [micActive, setMicActive] = useState(false);
  const [noiseLevel, setNoiseLevel] = useState(25);
  const audioContextRef = useRef<AudioContext | null>(null);
  const micAnimRef = useRef<number | null>(null);

  const startMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const audioCtx = new AudioCtx();
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      audioContextRef.current = audioCtx;
      setMicActive(true);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const checkVolume = () => {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        const avg = sum / dataArray.length;
        // 0-100 ölçeğine eşle
        setNoiseLevel(Math.min(100, Math.round(avg * 1.5)));
        micAnimRef.current = requestAnimationFrame(checkVolume);
      };
      checkVolume();
    } catch {
      // Mikrofon izni verilmediyse veya tahtada mikrofon yoksa simülasyon modu
      setMicActive(true);
      const interval = setInterval(() => {
        setNoiseLevel(Math.floor(20 + Math.random() * 40));
      }, 300);
      return () => clearInterval(interval);
    }
  };

  const stopMic = () => {
    setMicActive(false);
    if (micAnimRef.current) cancelAnimationFrame(micAnimRef.current);
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
    }
    setNoiseLevel(0);
  };

  // --- 4. TRAFİK IŞIĞI (SINIF ÇALIŞMA KURALI) ---
  const [trafficColor, setTrafficColor] = useState<"red" | "yellow" | "green">("green");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-300 w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* MODAL BAŞLIK */}
        <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 p-4 sm:p-5 flex items-center justify-between text-white select-none">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛠️</span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                Akıllı Sınıf Araçları
              </h3>
              <p className="text-xs text-amber-100 font-medium">
                Öğretmenler için pratik akıllı tahta paneli
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-white/20 hover:bg-white/30 text-white transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* ARAÇ SEÇİM SEKMELERİ */}
        <div className="flex border-b border-slate-200 bg-slate-50 p-2 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("cark")}
            className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
              activeTab === "cark"
                ? "bg-amber-400 text-slate-900 shadow-md scale-102"
                : "text-slate-600 hover:bg-slate-200/70"
            }`}
          >
            <span>🎡</span>
            <span>Çarkıfelek</span>
          </button>
          <button
            onClick={() => setActiveTab("gurultu")}
            className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
              activeTab === "gurultu"
                ? "bg-rose-400 text-white shadow-md scale-102"
                : "text-slate-600 hover:bg-slate-200/70"
            }`}
          >
            <span>🔊</span>
            <span>Gürültü Ölçer</span>
          </button>
          <button
            onClick={() => setActiveTab("sayac")}
            className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
              activeTab === "sayac"
                ? "bg-sky-400 text-white shadow-md scale-102"
                : "text-slate-600 hover:bg-slate-200/70"
            }`}
          >
            <span>⏱️</span>
            <span>Süreölçer</span>
          </button>
          <button
            onClick={() => setActiveTab("trafik")}
            className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
              activeTab === "trafik"
                ? "bg-emerald-500 text-white shadow-md scale-102"
                : "text-slate-600 hover:bg-slate-200/70"
            }`}
          >
            <span>🚦</span>
            <span>Trafik Işığı</span>
          </button>
        </div>

        {/* MODAL İÇERİK */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* TAB 1: ÇARKI FELEK */}
          {activeTab === "cark" && (
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                {/* İbre */}
                <div className="absolute -top-3 z-20 text-3xl text-rose-600 transform drop-shadow-md">
                  ▼
                </div>
                {/* Dönen Çember */}
                <div
                  className="w-full h-full rounded-full border-8 border-amber-400 bg-gradient-to-tr from-amber-200 via-orange-200 to-rose-200 shadow-xl flex items-center justify-center text-4xl transition-transform duration-[3000ms] cubic-bezier(0.15, 0.9, 0.2, 1)"
                  style={{ transform: `rotate(${wheelRotation}deg)` }}
                >
                  🎯
                </div>
              </div>

              {/* Kazanan Öğrenci Rozeti */}
              {selectedStudent && (
                <div className="bg-amber-100 border-2 border-amber-400 text-amber-900 px-6 py-3 rounded-2xl text-center animate-bounce-slow">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    Sıradaki Şanslı Öğrenci:
                  </p>
                  <p className="text-3xl font-bold font-heading">{selectedStudent} 🌟</p>
                </div>
              )}

              {/* Çevir Butonu */}
              <button
                onClick={spinWheel}
                disabled={isSpinning}
                className="w-full sm:w-64 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-slate-900 font-bold text-lg btn-smart transition-all shadow-lg flex items-center justify-center gap-2 font-heading"
              >
                <RotateCw className={`w-5 h-5 ${isSpinning ? "animate-spin" : ""}`} />
                <span>{isSpinning ? "Çark Dönüyor..." : "ÇARK I ÇEVİR!"}</span>
              </button>

              {/* Sınıf Listesi Düzenleme */}
              <div className="w-full">
                <label className="block text-xs font-bold text-slate-500 mb-1">
                  Öğrenci Listesi (Her satıra bir isim):
                </label>
                <textarea
                  rows={3}
                  value={namesText}
                  onChange={(e) => setNamesText(e.target.value)}
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono"
                  placeholder="Ali&#10;Ayşe&#10;Mehmet"
                />
              </div>
            </div>
          )}

          {/* TAB 2: GÜRÜLTÜ ÖLÇER (DESİBEL METRE) */}
          {activeTab === "gurultu" && (
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold font-heading text-slate-800">
                  Sınıf Sessizlik & Dikkat Ölçer
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Sınıf sessiz kaldıkça bar yeşilde kalır. Gürültü artınca kırmızıya döner!
                </p>
              </div>

              {/* Gösterge Barı */}
              <div className="w-full max-w-md bg-slate-100 rounded-3xl p-4 border-2 border-slate-200">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-emerald-600">Harika Sessizlik 🟢</span>
                  <span className="text-amber-600">Fısıltı 🟡</span>
                  <span className="text-rose-600">Çok Gürültülü 🔴</span>
                </div>
                <div className="w-full h-8 bg-slate-200 rounded-2xl overflow-hidden p-1 flex">
                  <div
                    className={`h-full rounded-xl transition-all duration-200 ${
                      noiseLevel < 40
                        ? "bg-emerald-500"
                        : noiseLevel < 70
                        ? "bg-amber-500"
                        : "bg-rose-500 animate-pulse"
                    }`}
                    style={{ width: `${noiseLevel}%` }}
                  />
                </div>
                <div className="text-center mt-3 text-2xl font-bold font-heading">
                  {noiseLevel < 40 ? (
                    <span className="text-emerald-700">🌟 Aferin, Sınıf Çok Düzenli!</span>
                  ) : noiseLevel < 70 ? (
                    <span className="text-amber-700">⚠️ Fısıltı Seviyesi Yükseliyor</span>
                  ) : (
                    <span className="text-rose-700">🚨 Lütfen Biraz Sessiz Olalım!</span>
                  )}
                </div>
              </div>

              {/* Mikrofon Aç / Kapat Butonu */}
              <button
                onClick={micActive ? stopMic : startMic}
                className={`px-6 py-3.5 rounded-2xl font-bold text-base btn-smart transition-all shadow-md flex items-center gap-2 ${
                  micActive
                    ? "bg-rose-500 hover:bg-rose-600 text-white"
                    : "bg-emerald-500 hover:bg-emerald-600 text-white"
                }`}
              >
                {micActive ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                <span>{micActive ? "Ölçümü Durdur" : "Ölçümü Başlat"}</span>
              </button>
            </div>
          )}

          {/* TAB 3: GERİ SAYIM SAYACI */}
          {activeTab === "sayac" && (
            <div className="flex flex-col items-center gap-6">
              {/* Dijital Zaman Göstergesi */}
              <div className="w-full max-w-sm py-8 bg-slate-900 rounded-3xl text-center shadow-inner border-4 border-slate-800">
                <span className="text-6xl sm:text-7xl font-bold font-mono text-emerald-400 tracking-wider">
                  {Math.floor(timerSeconds / 60)
                    .toString()
                    .padStart(2, "0")}
                  :
                  {(timerSeconds % 60).toString().padStart(2, "0")}
                </span>
              </div>

              {/* Hızlı Süre Butonları */}
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  { label: "30 Sn", val: 30 },
                  { label: "1 Dk", val: 60 },
                  { label: "2 Dk", val: 120 },
                  { label: "5 Dk", val: 300 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    onClick={() => setTimerPreset(preset.val)}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-300"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Kontrol Butonları */}
              <div className="flex gap-4">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`px-6 py-3 rounded-2xl font-bold text-base btn-smart transition-all text-white flex items-center gap-2 ${
                    isTimerRunning ? "bg-amber-500 hover:bg-amber-600" : "bg-emerald-500 hover:bg-emerald-600"
                  }`}
                >
                  {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isTimerRunning ? "Duraklat" : "Başlat"}</span>
                </button>
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setTimerSeconds(60);
                  }}
                  className="px-5 py-3 rounded-2xl font-bold text-base bg-slate-200 hover:bg-slate-300 text-slate-700 btn-smart flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Sıfırla</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: TRAFİK IŞIĞI (SINIF ÇALIŞMA KURALI) */}
          {activeTab === "trafik" && (
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold font-heading text-slate-800">
                  Sınıf Çalışma Trafik Lambası
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Tahtada öğrencilere o anki çalışma modunu gösterin
                </p>
              </div>

              {/* Trafik Lambası Gövdesi */}
              <div className="bg-slate-900 p-4 rounded-3xl border-4 border-slate-700 shadow-2xl flex flex-col gap-3">
                <button
                  onClick={() => setTrafficColor("red")}
                  className={`w-20 h-20 rounded-full transition-all border-4 ${
                    trafficColor === "red"
                      ? "bg-rose-500 border-white shadow-[0_0_25px_rgba(244,63,94,0.8)] scale-105"
                      : "bg-rose-950/60 border-rose-900 opacity-40 hover:opacity-70"
                  }`}
                />
                <button
                  onClick={() => setTrafficColor("yellow")}
                  className={`w-20 h-20 rounded-full transition-all border-4 ${
                    trafficColor === "yellow"
                      ? "bg-amber-400 border-white shadow-[0_0_25px_rgba(251,191,36,0.8)] scale-105"
                      : "bg-amber-950/60 border-amber-900 opacity-40 hover:opacity-70"
                  }`}
                />
                <button
                  onClick={() => setTrafficColor("green")}
                  className={`w-20 h-20 rounded-full transition-all border-4 ${
                    trafficColor === "green"
                      ? "bg-emerald-500 border-white shadow-[0_0_25px_rgba(16,185,129,0.8)] scale-105"
                      : "bg-emerald-950/60 border-emerald-900 opacity-40 hover:opacity-70"
                  }`}
                />
              </div>

              {/* Anlam Rozeti */}
              <div className="text-center">
                {trafficColor === "red" && (
                  <div className="bg-rose-100 text-rose-900 border-2 border-rose-300 px-6 py-2.5 rounded-2xl font-bold">
                    🔴 Bireysel Çalışma & Tam Sessizlik
                  </div>
                )}
                {trafficColor === "yellow" && (
                  <div className="bg-amber-100 text-amber-900 border-2 border-amber-300 px-6 py-2.5 rounded-2xl font-bold">
                    🟡 Fısıltı İle Arkadaşına Sorma Modu
                  </div>
                )}
                {trafficColor === "green" && (
                  <div className="bg-emerald-100 text-emerald-900 border-2 border-emerald-300 px-6 py-2.5 rounded-2xl font-bold">
                    🟢 Grup Çalışması & Serbest Tartışma
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
