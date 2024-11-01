import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Provider from "@/components/providers";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aman Behavioral Agency",
  description: "Aman Behavioral Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Provider>
        <html lang="en">
          <body className={roboto.className}>
            {children}
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  fontSize: "16px",
                },
              }}
            />
          </body>
        </html>
      </Provider>
    </>
  );
}
