import { Url } from "next/dist/shared/lib/router/router";

export type ProjectsDataType = {
    header: string;
    text: string;
    githubLink: Url;
    liveLink: Url
    imageSrc: string;
    videoSrc: string;
    stack: string[]
}

export const projects: ProjectsDataType[] = [
  {
    header: "Focus AI",
    text: "An AI-powered, dashboard-style productivity web application that combines task management and smart scheduling. Built with Firebase for secure authentication and real-time data, the app enables users to sign up, manage todos, and schedule events seamlessly. It leverages AI to analyze tasks, priorities, and time patterns, delivering intelligent recommendations on what to work on and when. Designed with a strong focus on performance, scalability, and a clean, intuitive user interface.",
    githubLink: "https://github.com/OyeyipoEmmanuel/focus-ai",
    liveLink: "https://focuss-ai.netlify.app",
    imageSrc: "/assets/images/focus-ai-image-preview.webp",
    videoSrc: "/assets/videos/Focus-Ai-Vid-Preview.mp4",
    stack: ['Typescript', 'React', 'TailwindCSS', 'Firebase', "Gemini-2.0", "antd"]
},
{
    header: "Deleo Shop",
    text: "Developed and deployed a modern, responsive fashion e-commerce website focused on a seamless shopping experience. The platform features a clean, intuitive UI and dynamic product listings powered by a third-party API, ensuring real-time updates without manual data management. Optimized for performance, SEO, and full responsiveness across devices, enabling fast, reliable browsing and shopping.",
    githubLink: "https://github.com/OyeyipoEmmanuel/deleo-shop",
    liveLink: "https://deleoshop.netlify.app",
    imageSrc: "/assets/images/deleoshop-img-preview.webp",
    videoSrc: "/assets/videos/Deleoshop-Vid-Preview.mp4",
    stack: ['Javascript', 'React', 'TailwindCSS', 'Redux']
},
{
    header: "ProjHelper AI",
    text: "Built a lightweight AI tool to help teams quickly turn high-level project ideas into clear, actionable execution plans. The app breaks vague concepts into structured tasks, timelines, and responsibilities, reducing planning friction for university group projects. Initially created to solve my team’s planning bottleneck, it’s now being used by multiple groups in the course.",
    githubLink: "https://github.com/OyeyipoEmmanuel/projhelp-ai",
    liveLink: "https://projhelper-ai.netlify.app",
    imageSrc: "/assets/images/projhelper-img-preview.webp",
    videoSrc: "/assets/videos/Projhelper-Vid-Preview.mp4",
    stack: ['Typescript', 'React', 'TailwindCSS', 'Firebase', "Gemini-2.0"]
},
{
    header: "BankDash",
    text: "Developed a responsive admin-style banking dashboard that displays cards, accounts, services, and analytics. Users can view recent and all transactions, track spending patterns through interactive charts, and get a clear overview of their financial activity. Designed for a clean, intuitive interface with dynamic components for seamless data visualization.",
    githubLink: "https://github.com/OyeyipoEmmanuel/admin-dashboard-webapp",
    liveLink: "https://adminbankdash.netlify.app",
    imageSrc: "/assets/images/bankdash-img-preview.webp",
    videoSrc: "/assets/videos/Bankdash-Vid-Preview.mp4",
    stack: ['Typescript', 'React', 'TailwindCSS', "react-charts"]
},
{
    header: "SpaceX - GraphQL",
    text: "Built a dark-mode web app using the public SpaceX GraphQL API to explore rocket launches and related data. The project was an opportunity to refresh my GraphQL and Apollo Client skills while designing a clean, intuitive interface for browsing launch information. Focused on seamless data fetching, interactive UI, and an engaging dark-mode experience.",
    githubLink: "https://github.com/OyeyipoEmmanuel/spacex-graphql",
    liveLink: "https://space-xmissions.netlify.app",
    imageSrc: "/assets/images/spacex-img-preview.webp",
    videoSrc: "/assets/videos/Spacex-Vid-Preview.mp4",
    stack: ['Typescript', 'React', 'TailwindCSS', 'Apollo-Client', "Space-X"]
},
{
    header: "Deleo Homes",
    text: "Developed a modern, responsive real estate platform showcasing property listings, detailed property information, and services offered. The site features a clean layout that highlights homes effectively and provides an easy way for users to contact agents or explore investment opportunities. Focused on usability, visual appeal, and seamless navigation to enhance the client experience.",
    githubLink: "https://github.com/OyeyipoEmmanuel/real-estate-app",
    liveLink: "https://deleohomes.netlify.app",
    imageSrc: "/assets/images/deleoHomes-img-preview.webp",
    videoSrc: "/assets/videos/Deleohomes-Img-Preview.mp4",
    stack: ['Javascript', 'React', 'TailwindCSS']
},
{
    header: "Mr Movie Recommender",
    text: "Built a smart movie recommendation website that delivers personalized, top-rated film suggestions based on users’ mood or preferred genre. The intuitive interface allows users to instantly discover relevant movies without endless scrolling. Designed, developed, and deployed the platform with a focus on performance, mobile responsiveness, and SEO, ensuring fast loading and a smooth experience across devices.",
    githubLink: "https://github.com/OyeyipoEmmanuel/movie-recommender",
    liveLink: "https://movie-recommender.com.ng",
    imageSrc: "/assets/images/movie-recommender-img-preview.webp",
    videoSrc: "/assets/videos/Movie-Recommender-Vid-Preview.mp4",
    stack: ['Javascript', 'React', 'TailwindCSS', 'Cloudflare', "Hostiing"]
},
{
    header: "Domain Lookup",
    text: "Contributed to an open-source CLI tool designed to check the availability of 1–3 letter domain names by generating all possible combinations and verifying them through the GoDaddy Domain Checker API. Building on this foundation, I developed a full web version, exposing the functionality through a user-friendly web interface. This allowed users to perform real-time domain availability checks without using the command line, making the tool more accessible and practical for broader use.",
    githubLink: "https://github.com/OyeyipoEmmanuel/domains-lookup-frontend",
    liveLink: "https://domains-lookup.onrender.com/",
    imageSrc: "/assets/images/domain-lookup-img-preview.webp",
    videoSrc: "/assets/videos/Domain-Lookup-Vid-Preview.mp4",
    stack: ['Typescript', 'React', 'Express', 'TailwindCSS', "Open-Source"]
},
{
    header: "Tab Counter Chrome Extension v0.1.0",
    text: "Built a Chrome extension that tracks and displays the total number of open browser tabs in real time, helping users stay aware of tab overload. The extension listens to tab creation, removal, and activation events using the Chrome Tabs API for accurate, instant updates. Designed as a focused MVP, with planned enhancements aimed at improving browser resource management and productivity.",
    githubLink: "https://github.com/OyeyipoEmmanuel/chrome-tab-extension",
    liveLink: "https://github.com/OyeyipoEmmanuel/chrome-tab-extension",
    imageSrc: "/assets/images/tabCounter-img-preview.webp",
    videoSrc: "/assets/videos/Tab-Counter-Vid-Preview.mp4",
    stack: ['Typescript', 'HTML', 'CSS']
}

]
