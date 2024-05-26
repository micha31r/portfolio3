import clsx from "clsx";

export default function BrowserFrame({ className, blur, children }) {
  return (
    <div className={clsx("relative bg-white/10 rounded-sm overflow-hidden shadow-md", className)}>
      <div className="absolute w-full h-full rounded-sm shadow-[inset_0_0_0_1px_hsl(var(--border)/0.5)] z-10 mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
      <div className="absolute inset-0 [&>*]:w-screen blur-xl opacity-50 z-100">{blur}</div>
      <div className="p-1">
        <div className="rounded shadow-[0_1px_2px_1px_rgba(0,0,0,.2)]">
          {children}
        </div>
      </div>
    </div>
  )
}