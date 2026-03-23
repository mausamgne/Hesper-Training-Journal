import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import AnnouncementBar from "../components/common/AnnouncementBar";
import Footer from "../components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  <AnnouncementBar />
  <Navbar />
  {children}
  <Footer />
</body>
    </html>
  );
}