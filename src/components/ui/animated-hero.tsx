import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, FileText, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../theme/ThemeProvider";

const Hero = ({ scrollIntoDiv } : { scrollIntoDiv: () => void }) => {
    const { theme } = useTheme()
    const [titleNumber, setTitleNumber] = useState(0);

    const titles = useMemo(
        () => ["Software Engineer", "Designer", "Problem Solver", "Tech Enthusiast", "Learner"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className={`w-full ${theme === 'dark' ? 'bg-black': ''}`}>
        <div className="container mx-auto">
            <div className="flex gap-8 py-13 lg:py-30 items-center justify-center flex-col">
            <div>
                <Button
                variant="secondary"
                size="sm"
                className="gap-4 cursor-pointer"
                onClick={() => window.open("/public/BONGHANOY, CRIS DYFORD (CV).pdf", "_blank")}
                >
                View My Cv <FileText className="w-4 h-4" />
                </Button>
            </div>

            <div className="flex gap-4 flex-col items-center">
                <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                <span className="text-spektr-cyan-50">Hi, I'm Cris Dyford, a</span>
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                    &nbsp;
                    {titles.map((title, index) => (
                    <motion.span
                        key={index}
                        className="absolute font-semibold"
                        initial={{ opacity: 0, y: "-100" }}
                        transition={{ type: "spring", stiffness: 50 }}
                        animate={
                        titleNumber === index
                            ? { y: 0, opacity: 1 }
                            : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                        }
                    >
                        {title}
                    </motion.span>
                    ))}
                </span>
                </h1>

                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                I build modern web applications, design intuitive interfaces, and love turning complex problems into elegant solutions. Explore my projects or connect with me to collaborate!
                </p>
            </div>

            <div className="flex flex-row gap-3">
                <Button
                size="lg"
                className="gap-4 cursor-pointer"
                variant="outline"
                onClick={() => window.open("https://github.com/ford-HUB", "_blank")}
                >
                Check my GitHub <GitBranch className="w-4 h-4" />
                </Button>
                <Button
                size="lg"
                className="gap-4 cursor-pointer"
                onClick={() => scrollIntoDiv()}
                >
                See my projects <MoveRight className="w-4 h-4" />
                </Button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Hero