import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/Navbar/Navbar";
import {ThemeProvider as NextThemesProvider} from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portopholio Rama Dita | Software Developer",
  description: "Discover the innovative projects and technical expertise of Rama Dita, a proficient software developer specializing in cutting-edge web and mobile application development. Explore my portfolio to see how I transform ideas into impactful digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
