import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import Logo from "./Logo"
import { ArrowUpLeftIcon, HomeIcon } from "@heroicons/react/24/solid"

const links = [
  {
    name: "Work",
    href: "/",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/m-ren/",
  },
  {
    name: "Github",
    href: "https://github.com/micha31r",
  }
]

export default function Navbar() {
  return (
    <div className="fixed w-max left-1/2 -translate-x-1/2 bottom-0 flex justify-center gap-2 mx-auto px-2 py-4 z-20">
      <div className="flex h-12 p-1 shadow-lg bg-secondary/80 backdrop-blur-md rounded-full [&>*]:my-auto">
        {links.map(({ name, href }) => (
          <Link key={name} href={href} className="flex flex-1 h-full hover:bg-background transition w-20 rounded-full"><span className="text-center w-full my-auto">{name}</span></Link>
        ))}
      </div>
      <ThemeToggle className="[&_button]:shadow-lg"/>
    </div>
  )
}