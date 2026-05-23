const trustItems = [
  "⚡ Instant Recharge",
  "🔒 No Wallet Storage",
  "✅ 99.9% Success Rate",
  "💳 Direct Payment",
  "🚀 Real-Time Processing",
];

export default function TrustBar() {
  const items = [...trustItems, ...trustItems];

  return (
    <section
      className="overflow-hidden border-y border-brand-border bg-brand-surface py-4"
      aria-label="Trust indicators"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 inline-flex items-center text-sm font-medium text-brand-text-secondary"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
