import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Minimize } from 'lucide-react';
import { profile } from '@/assets';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Hero from '@/components/ui/animated-hero';
import { ProjectHighlights } from '@/components/ui/project-highlights';
import { highlights_project_data } from '@/constant/ProjectList';
import { useTheme } from '@/components/theme/ThemeProvider';

import { FaGithub, FaReact, FaNodeJs, FaDocker   } from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb   } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import IconMarquee from '@/components/ui/IconMarquee';

const Home = () => {
    const { theme, setTheme } = useTheme()
    const [toggleTheme, setToggleTheme] = React.useState<any>(false)
    const [minimizeContent, setMinimizeContent] = React.useState<any>(false)
    const useScroller = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        toggleTheme ? setTheme('dark') : setTheme('light')
    }, [toggleTheme])

    const targetScroll = () => {
        useScroller.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className={`${theme === 'dark' ? 'bg-black': ''} min-h-screen flex justify-center items-end font-heading overflow-hidden`}>
            <motion.div
                className={`header-container ${minimizeContent ? 'cursor-pointer': 'border bg-white/20 backdrop-blur-[2px]'} rounded-md p-4 fixed bottom-6 right-6 z-100 `}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: 10, y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeIn' }}>
                <div className="header flex justify-between items-center space-x-8">
                    <div className="profile">
                        <img
                            className={`${minimizeContent ? 'h-15 w-15 border border-gray-600 rounded-full': 'h-46 w-46 rounded-lg'} `}
                            src={profile}
                            alt="onedev photo"
                        />
                        {
                            minimizeContent && <button onClick={() => setMinimizeContent(false)} className='cursor-pointer opacity-0 absolute inset-0'></button>
                        }
                    </div>
                    {
                        !minimizeContent && <>
                            <motion.div className="info space-y-2.5"
                            initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
                            animate={ minimizeContent
                                ? { scale: 0.5, opacity: 0.9, x: 0, y: 0 }
                                : { scale: 1, opacity: 1, x: 0, y: 0 }
                            }
                            transition={{duration:0.5, ease: "easeOut"}}
                            >
                                <div className="perfonal-info">
                                    <h1 className="font-bold">
                                        Cris Dyford C. Bonghanoy
                                    </h1>
                                    <div className="location inline-flex items-center space-x-1.5">
                                        <MapPin className="w-5 h-5 text-gray-600" />
                                        <span>Cebu, Philippines</span>
                                    </div>
                                    <div className="position">
                                        <span className="text-sm">
                                            Aspiring Software Engineer \ Student
                                        </span>
                                    </div>
                                </div>

                                <div className="reacher-container mt-5">
                                    <a
                                        className="py-1.5 px-3 bg-black text-white rounded-md"
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=dyfordbonghanoy@gmail.com">
                                        Send Email
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div className="toggle-dark relative bottom-12 ">
                                <div className="flex items-center space-x-2">
                                    <Switch checked={toggleTheme} onCheckedChange={setToggleTheme} id="airplane-mode"/>
                                    <Label htmlFor="airplane-mode">Dark Mode</Label>
                                </div>
                                <div className='absolute top-34 right-0'>
                                    <Minimize 
                                    onClick={() => setMinimizeContent(true)}
                                    size={18}
                                    className='cursor-pointer' />
                                </div>
                            </motion.div>
                        </>
                    }
                </div>
            </motion.div>

            <motion.main
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: 0, y: -30, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                className="flex-col justify-center">
                <div className="mb-4">
                    <Hero scrollIntoDiv={targetScroll}/>
                </div>

                <div className='mb-4'>
                    <IconMarquee icons={[FaReact, FaGithub, SiTypescript, FaNodeJs, SiExpress, SiMongodb, TbBrandCSharp, BiLogoPostgresql, FaDocker]} />
                </div>

                <div ref={useScroller}>
                    <ProjectHighlights data={highlights_project_data} />
                </div>
            </motion.main>
        </div>
    );
};

export default Home;
