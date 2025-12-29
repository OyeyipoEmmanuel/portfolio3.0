interface ExperienceListDataType {
    date: string;
    role: string;
    company: string;
    desc: string
}

export const experiences: ExperienceListDataType[] = [
    {
        date: "June 2025 - Present",
        role: "Intern Frontend Developer",
        company: "FriendnPal",
        desc: "Frontend Developer Intern at FriendnPal, where I redesigned and optimized the landing page to boost engagement and performance. Built fast, responsive, and accessible interfaces with React, TypeScript, and Tailwind CSS, applied clean MVC-based structure, and worked closely with design and product teams to deliver a polished, SEO-friendly experience."
    },
    {
        date: "July 2025 - August 2025",
        role: "Contract Frontend Engineer",
        company: "Omni-X",
        desc: "Contributed to an existing React, TypeScript, and Tailwind CSS codebase, collaborating closely with backend and UI/UX teams to ship new features and deliver a smooth user experience. Improved performance through lazy loading, code splitting, and efficient data memoization to reduce unnecessary backend requests and speed up the application."
    },
    {
        date: "August 2024 - October 2025",
        role: "Junior Frontend Developer",
        company: "Eleextr Tech",
        desc: "Designed and built responsive web pages using React, Tailwind CSS, and JavaScript, delivering clean, user-friendly interfaces across devices."
    },
]