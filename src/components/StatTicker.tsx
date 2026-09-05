export type TickerItem = { label: string; value: string };

export default function StatTicker({ items }: { items: TickerItem[] }) {
  const track = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden border-b border-white/10 bg-brand-dark">
      <div className="flex w-max animate-ticker py-2.5 text-xs sm:text-sm font-medium tracking-wide text-white/85">
        {track.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-4 sm:px-6">
            <span className="font-bold text-white">{item.value}</span>
            <span className="ml-2 text-white/70">{item.label}</span>
            <span className="ml-4 sm:ml-6 text-white/30">&#9679;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
