

export default function SectionHeader({ title, children }) {
  return (
    <div className="flex flex-col gap-1 w-60">
      {/* text */}
      <h1 className="pl-5 text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-mainColor to-textColor">
        {title} {children}
      </h1>
      {/* bar */}
      <span className="relative inline-block h-[1.5px] overflow-hidden rounded bg-mainColor20">
        <span className="absolute top-0 left-0 inline-block w-4 h-full rounded-full bg-mainColor animate-leftToRight"></span>
      </span>
    </div>
  );
}


