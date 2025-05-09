import "../styles/globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "UserCards App",
  description: "UserCards App by Next.js",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="grow">
          <Header />
          <main className="px-4">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

