import { Raleway } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import SmoothScroll from "../components/SmoothScroll";
import ScrollToTop from "../components/ScrollToTop";
import ScrollProgress from "../components/ScrollProgress";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600"], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <CustomCursor />
        <ScrollProgress />
        <ScrollToTop />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}