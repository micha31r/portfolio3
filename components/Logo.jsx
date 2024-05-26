import clsx from "clsx"

export default function Logo ({ className, ...props }) {
  return (
    <div className={clsx("w-[1em] h-[1em] bg-foreground rounded-full", className)}></div>
  )
}