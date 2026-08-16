export default function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3 text-xs tracking-label text-gold uppercase">
      {index && <span className="text-gold">{index}</span>}
      <span className="h-px w-8 bg-gold-dim" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
