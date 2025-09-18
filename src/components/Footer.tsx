import { personalInfo } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-purple-500/10 py-6 bg-gradient-to-t from-background to-muted/10">
            <div className="container max-w-4xl mx-auto px-6 md:px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-center md:text-left">
                        © {new Date().getFullYear()} Samuel Salcedo.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="h-5 w-5" />
                        </a>
                         <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}