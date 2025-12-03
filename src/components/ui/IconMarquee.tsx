import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../theme/ThemeProvider';

const IconMarquee = ({ icons }: { icons: any[] }) => {
    const { theme } = useTheme()
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setScrollWidth(containerRef.current.scrollWidth / 2);
        }
    }, []);

    return (
        <div className="overflow-hidden relative w-full">
            <motion.div
                ref={containerRef}
                className="flex gap-12"
                animate={{ x: [0, -scrollWidth] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 40,
                        ease: 'linear',
                    },
                }}>
                {[...icons, ...icons, ...icons, ...icons, ...icons].map((Icon, i) => (
                    <div
                        key={i}
                        className="shrink-0 w-48 h-32 flex items-center justify-center px-4">
                        <Icon
                            size={54}
                            className={`grayscale ${theme === 'dark' ? 'white' : ''} hover:grayscale-0 transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100`}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default IconMarquee;
