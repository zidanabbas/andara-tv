import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/fragments/header/Header";
import Layouts from "@/components/layouts";
import Footer from "@/components/fragments/footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Andara TV Entertainment",
  description: "Media Kreatif Warga Andara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Layouts>
          <Header />
          {children}
          <Footer />
        </Layouts>
      </body>
    </html>
  );
}
