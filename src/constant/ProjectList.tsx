import { uclmcaresDashboard, uclmcaresInterestSelection, uclmcaresLandingPage } from "@/assets";

export const highlights_project_data = [
    {
        title: '2025 - Present',
        images:[uclmcaresLandingPage, uclmcaresInterestSelection, uclmcaresDashboard],
        content: (
            <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
                <li>
                    UCLM CARES (AI-Enhanced Volunteer & Donation System)
                </li>
                <li>
                    Developed a full-stack PERN-based platform integrating AI
                    for event coordination, donation tracking, and financial
                    reporting.
                </li>
                <li>
                    Implemented payment processing via PayMongo and secondary
                    database integration using Supabase.
                </li>
                <li>
                    Designed and maintained secure, scalable RESTful APIs with
                    real-time updates.
                </li>
                <li>
                    Deployed system with cloud database integration for
                    accessibility and reliability.
                </li>
            </ul>
        ),
    },
    {
        title: '2024 – 2024',
        content: (
            <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
                <li>
                    Online Secret Notes System
                </li>
                <li>
                    Built a secure online note-taking platform using the PERN
                    stack.
                </li>
                <li>
                    Focused on backend API design, database management, and
                    frontend functionality for smooth user experience.
                </li>
            </ul>
        ),
    },
    {
        title: '2024 – 2024',
        content: (
            <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
                <li>
                    KaChismisan ChatApp
                </li>
                <li>
                    Created a real-time chat application using MERN stack and
                    Socket.io.
                </li>
                <li>
                    Implemented user authentication, chat rooms, and message
                    history.
                </li>
                <li>Ensured low-latency communication and responsive UI/UX.</li>
            </ul>
        ),
    }
];
