import clsx from "clsx";
import Link from "next/link";

// Styled link component
export default function SLink ({ className, href, children }) {
  return <Link className={clsx("border-b border-border hover:text-muted-foreground transition", className)} href={href}>{children}</Link>
}