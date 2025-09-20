export function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
  eyebrowClass,
  titleClass,
  descClass,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
  eyebrowClass?: string; 
  titleClass?: string;   
  descClass?: string;    
}) {
  const wrapAlign = align === "center" ? "text-center" : "";
  const titleCls = titleClass ?? "text-2xl md:text-3xl font-semibold";
  const descCls =
    descClass ??
    `mt-2 text-slate-600 ${align === "center" ? "max-w-2xl mx-auto" : ""}`;
  const eyebrowText = eyebrowClass ?? "text-xs text-slate-600";

  return (
    <div className={`mb-8 ${wrapAlign}`}>
      {eyebrow && (
        <div className={`inline-block rounded-full border px-3 py-1 mb-3 ${eyebrowText}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={titleCls}>{title}</h2>
      {desc && <p className={descCls}>{desc}</p>}
    </div>
  );
}
