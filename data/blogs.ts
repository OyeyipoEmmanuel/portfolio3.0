import { Url } from "next/dist/shared/lib/router/router";

interface BlogDatas {
  image: string;
  name: string;
  body: string
  link: string | undefined;
  minsRead: string;
  datePosted: string;
}

export const blogs: BlogDatas[] = [
    {
        image: "/assets/images/web-accessibility-blog-img.png",
        name: "Web Accessibility? What is that? What do we even need it for?",
        body: "You spend 3 weeks building a slick website. It looks beautiful. Then someone tells you they can’t use it at all. Why? Because they’re blind. Tell me, are we building for humans, or are we building for enabled humans? On your CV, you said you create visually appealing, user-centric websites — but some users can’t use your website because they are disabled. Bro, you need this article.",
        link: "https://medium.com/@devemmanuel/web-accessibility-what-is-that-what-do-we-even-need-it-for-fdf8bf621fa0",
        minsRead: "4 mins",
        datePosted: "Apr 5, 2026"
    },
];
