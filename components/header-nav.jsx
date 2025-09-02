import Link from "next/link";
import { Logo } from "./ui/logo";
import ModeToggle from "./ui/mode-togle";

// Header Navigation Component PascalCase
export default function HeaderNav() {
  return (
    <header className="border-primary/20 top-0 z-50 w-full border-b bg-background sticky">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-1">
          <Logo className="h-8 w-8" fill="fill-primary" />
          <div className="text-primary font-bold text-xl">Cinescope</div>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-black">
          <Link
            href="/movies"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Movies
          </Link>
          <Link
            href="/genres"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Genres
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/admin"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Admin
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Login
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
