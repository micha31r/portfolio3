import clsx from "clsx"

export function H1 ({ className, children, muted }) {
  return (
    <h1 className={clsx('text-2xl leading-normal', {
      'text-muted-foreground': muted
    }, className)}>{children}</h1>
  )
}

export function P ({ className, children, muted }) {
  return (
    <p className={clsx('text-md leading-relaxed', {
      'text-muted-foreground': muted
    }, className)}>{children}</p>
  )
}