"use client";
import { useState } from "react";
import Hero from "@/components/Hero.jsx";
import RoleCards from "@/components/roleCards.jsx";
import Masonry from "@/components/Masonry.jsx";
import CallToAction from "@/components/CallToAction.jsx";

export default function Home() {
const items = [
  {
    id: "1",
    img: "https://tse3.mm.bing.net/th/id/OIP.4Ov5uIXZTs5NPxfHsEAnFQHaJk",
    url: "https://theshillongtimes.com/2020/03/06/disaster-preparedness-drill-held-for-youth-at-icfai-university/",
    height: 450,
  },
  {
    id: "2",
    img: "https://tse2.mm.bing.net/th/id/OIP.OVXSyDhQl1-NnN4VZSQImgHaEx",
    url: "https://www.tribuneindia.com/news/archive/ludhiana/disaster-management-workshop-487915",
    height: 400,
  },
  {
    id: "3",
    img: "https://tse4.mm.bing.net/th/id/OIP.4V6B23Nl2uOrFcRO8JCjjAHaE8",
    url: "https://www.tribuneindia.com/news/archive/ludhiana/disaster-management-workshop-487915",
    height: 420,
  },
  {
    id: "4",
    img: "https://tse4.mm.bing.net/th/id/OIP.xNPw1c5cC8edEtH2toWQ9QHaE8",
    url: "https://www.thekhaitanschool.org/disaster-management-mock-drill-for-students/",
    height: 430,
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1018/600/900",
    url: "https://example.com/five",
    height: 450,
  },
  {
    id: "6",
    img: "https://picsum.photos/id/1025/600/800",
    url: "https://example.com/six",
    height: 400,
  },
  {
    id: "7",
    img: "https://picsum.photos/id/1033/600/750",
    url: "https://example.com/seven",
    height: 350,
  },
  {
    id: "8",
    img: "https://picsum.photos/id/1041/600/850",
    url: "https://example.com/eight",
    height: 420,
  },
  {
    id: "9",
    img: "https://picsum.photos/id/1050/600/900",
    url: "https://example.com/nine",
    height: 480,
  },
  {
    id: "10",
    img: "https://picsum.photos/id/1062/600/700",
    url: "https://example.com/ten",
    height: 330,
  },
  {
    id: "11",
    img: "https://picsum.photos/id/1074/600/800",
    url: "https://example.com/eleven",
    height: 400,
  },
  {
    id: "12",
    img: "https://picsum.photos/id/1081/600/750",
    url: "https://example.com/twelve",
    height: 360,
  },
];



  const sections = [
    { id: "hero", label: "Hero" },
    { id: "roles", label: "Roles" },
    { id: "masonry", label: "Gallery" },
    { id: "cta", label: "CTA" },
  ];

  const [active, setActive] = useState("hero");

  const handleScroll = (id) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
  setActive(id);
};

// Sections



  return (
    <div className="relative scroll-smooth">
      {/* Scroll Navigator */}
      <nav className="fixed top-[40%] right-5 -translate-x-1/2 flex flex-col gap-6  bg-white/5 backdrop-blur-md text-white px-2 py-3 rounded-xl  z-50">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => handleScroll(s.id)}
            className={`text-sm font-medium transition cursor-pointer ${
              active === s.id
                ? "text-white"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* Sections */}
      <div id="hero" className="scroll-mt-90"><Hero /></div>
      <div id="roles" className="scroll-mt-40"><RoleCards /></div>
      <div id="masonry" className="scroll-mt-50"><Masonry items={items} /></div>
      <div id="cta" className="scroll-mt-20"><CallToAction /></div>
    </div>
  );
}
