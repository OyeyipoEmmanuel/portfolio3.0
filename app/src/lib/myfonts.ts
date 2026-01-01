import localFont from "next/font/local"

export const switzerFont = localFont({
    src: [
        {
            path: "../fonts/Switzer-Black.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/Switzer-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/Switzer-Semibold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-switzerFont",
    display: "swap",
})
