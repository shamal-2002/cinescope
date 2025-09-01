import Link from "next/link";
//Logo Component

// Header Navigation Component PascalCase
export default function HeaderNav() {
  return (
    <header className="border-primary/20 top-0 z-50 w-full border-b bg-background sticky">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-1">
          <div className="text-red-400 font-bold">CS</div>
          <div className="text-teal-400 font-bold">Cinescope.lk</div>
        </Link>
      </div>
    </header>
  );
}
