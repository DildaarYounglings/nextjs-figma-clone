//import { Work_Sans } from "next/font/google";

import "./globals.css";
import Page from "./page";


export const metadata = {
  title: "Figma Clone",
  description:
    "A minimalist Figma clone using fabric.js and Liveblocks for realtime collaboration",
};


const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body>
      <Page/>
    </body>
  </html>
);

export default RootLayout;
