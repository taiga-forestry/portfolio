"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { quattrocentoSans } from "./fonts";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Tiger Ji's Website",
//   description: "Hi there! I'm Tiger.",
// };

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/35850cf6ad.js" async />
      </head>

      <body className={quattrocentoSans.className}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeIn",
            }}
          >
            <div id="background" />
            { children }
          </motion.div>
        </AnimatePresence>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
