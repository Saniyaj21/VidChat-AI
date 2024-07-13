// import { Roboto } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "VidChat AI",
  description: "Chat with any YouTube video and get summary in one page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
