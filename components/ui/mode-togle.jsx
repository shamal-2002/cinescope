import { Sun } from "lucide-react";
import { Button } from "./button";

export default function ModeToggle() {
  return (
    <Button variant="ghost" size="icon" className="h-9 w-9">
      <Sun className="h-4 w-4" />
      <span className="sr-only">Toggle light/dark mode</span>
    </Button>
  );
}
