import clsx from "clsx";

export default function Section ({ className, classNameInner, children }) {
  return (
    <div className={clsx("w-screen flex p-4 space-y-20", className)}>
      <div className={clsx("max-w-md w-full flex flex-col mx-auto", classNameInner)}>{children}</div>
    </div>
  )
}