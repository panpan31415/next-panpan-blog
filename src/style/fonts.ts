import { Roboto } from "next/font/google";
export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    style: ["normal", "italic"],
    variable: "--font-roboto",
});
