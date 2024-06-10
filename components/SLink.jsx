import clsx from "clsx";
import Link from "next/link";

// Styled link component
export default function SLink ({ className, target, href, children }) {
  return <Link className={clsx("border-b border-border hover:text-muted-foreground transition", className)} target={target} href={href}>{children}</Link>
}