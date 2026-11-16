"use client";

import React from "react";
import { ActivityItem } from "@/data/curriculum";
import { Play, Sparkles } from "lucide-react";

interface ActivityCardProps {
  activity: ActivityItem;
  onLaunch: (activity: ActivityItem) => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onLaunch }) => {
  const getTypeBadge = (type: ActivityItem["type"]) => {
    switch (type) {
      case "oyun":
        return { label: "🎮 Eğitsel Oyun", bg: "bg-rose-100 text-rose-800 border-rose-200" };
      case "sunu":
        return { label: "🎬 Etkileşimli Sunu", bg: "bg-blue-100 text-blue-800 border-blue-200" };
      case "materyal":
        return { label: "🧩 Sanal Materyal", bg: "bg-amber-100 text-amber-800 border-amber-200" };
      case "yazi":
        return { label: "✏️ Çizgi & Dikte", bg: "bg-emerald-100 text-emerald-800 border-emerald-200" };
      default:
        return { label: "📌 Etkinlik", bg: "bg-slate-100 text-slate-800 border-slate-200" };
    }
  };

  const badgeInfo = getTypeBadge(activity.type);

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group card-interactive">
      <div>
        {/* ÜST ROZETLER */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-xs px-3 py-1 rounded-full font-bold border ${badgeInfo.bg}`}
          >
            {badgeInfo.label}
          </span>
          {activity.isWeeklyHighlight && (
            <span className="text-[11px] px-2.5 py-0.5 rounded-full font-bold bg-amber-400 text-slate-900 border border-amber-500 animate-pulse-subtle flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Bu Hafta
            </span>
          )}
        </div>

        {/* BAŞLIK & İKON */}
        <div className="flex items-start gap-4 mb-3">
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr ${activity.color} flex items-center justify-center text-3xl shadow-md shrink-0 group-hover:scale-105 transition-transform`}
          >
            {activity.icon}
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {activity.topic}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
              {activity.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              {activity.subtitle}
            </p>
          </div>
        </div>

        {/* AÇIKLAMA */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {activity.description}
        </p>

        {/* PEDAGOJİ VE ÖZELLİK ROZETLERİ */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {activity.badges.map((b, i) => (
            <span
              key={i}
              className="text-[10px] px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 font-semibold border border-slate-200"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* BAŞLAT BUTONU (Akıllı Tahta Parmak Dostu) */}
      <button
        onClick={() => onLaunch(activity)}
        className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-white font-bold text-sm sm:text-base btn-smart flex items-center justify-center gap-2 font-heading shadow-md active:scale-98 transition-all"
      >
        <Play className="w-4 h-4 fill-white" />
        <span>TAHTADA BAŞLAT</span>
      </button>
    </div>
  );
};
