import { Raleway } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import SmoothScroll from "../components/SmoothScroll";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600"], // add more if needed
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
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}