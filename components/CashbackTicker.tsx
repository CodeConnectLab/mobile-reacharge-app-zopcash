"use client";

import { BadgeIndianRupee } from "lucide-react";

interface Item {
  name: string;
  amount: number;
  service: string;
  city: string;
}

const ITEMS: Item[] = [
  { name: "Rahul", amount: 50, service: "Jio Recharge", city: "Mumbai" },
  { name: "Priya", amount: 120, service: "Electricity Bill", city: "Bengaluru" },
  { name: "Aman", amount: 35, service: "FASTag", city: "Delhi" },
  { name: "Sneha", amount: 85, service: "Broadband", city: "Pune" },
  { name: "Vikram", amount: 60, service: "DTH Recharge", city: "Hyderabad" },
  { name: "Ananya", amount: 25, service: "Mobile Top-Up", city: "Chennai" },
  { name: "Karan", amount: 110, service: "Postpaid Bill", city: "Indore" },
  { name: "Neha", amount: 45, service: "Data Recharge", city: "Kolkata" },
  { name: "Rohit", amount: 75, service: "Electricity", city: "Ahmedabad" },
  { name: "Meera", amount: 30, service: "Vi Recharge", city: "Jaipur" },
  { name: "Arjun", amount: 95, service: "Airtel Postpaid", city: "Lucknow" },
  { name: "Pooja", amount: 40, service: "Cylinder Booking", city: "Surat" },
];

function Chip({ item }: { item: Item }) {
  return (
    <span className="mx-3 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-brand-border bg-white px-4 py-2 text-xs font-medium text-brand-text-secondary shadow-card">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cashback text-white">
        <BadgeIndianRupee className="h-3 w-3" />
      </span>
      <span className="font-extrabold text-emerald-600">+ ₹{item.amount}</span>
      <span className="text-brand-text-primary font-semibold">{item.name}</span>
      <span className="text-brand-text-secondary">· {item.service}</span>
      <span className="text-[10px] text-brand-text-secondary/70">· {item.city}</span>
    </span>
  );
}

export default function CashbackTicker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section
      className="relative border-y border-brand-border bg-brand-surface py-5"
      aria-label="Recent cashback earned by users"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-3 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand-text-secondary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live cashbacks delivered this week
        </div>
      </div>

      <div className="group mask-fade-x relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {doubled.map((item, i) => (
            <Chip key={`a-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
