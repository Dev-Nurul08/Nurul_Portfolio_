import Link from "next/link";
import { Code2, UserCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">Nurul Shaikh</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Backend Developer based in Navsari, Gujarat.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Link href="https://www.linkedin.com/in/nurul-shaikh/" target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors">
            <UserCircle size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:shaikhnurul8200@gmail.com" className="p-2 rounded-full hover:bg-muted transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
          <Link href="https://github.com" target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors">
            <Code2 size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Nurul Shaikh. All rights reserved.
      </div>
    </footer>
  );
}
