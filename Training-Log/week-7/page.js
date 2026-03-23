import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import FeatureCards from "../components/Features/FeatureCards";
import MoreInfo from "../components/Info/MoreInfo";
import ConnectSection from "../components/Info/ConnectSection";
import FAQSection from "../components/FAQ/FAQSection";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import AppPromoSection from "../components/AppPromo/AppPromoSection";
// PRODUCTS
import ProductsHeading from "../components/Products/ProductsHeading";
import ClassicControl from "../components/Products/ClassicControl";
import ClassicConnect from "../components/Products/ClassicConnect";
import SmartConnect from "../components/Products/SmartConnect";
import DualAlternatingControl from "../components/Products/DualAlternatingControl";
import LiftStationControl from "../components/Products/LiftStationControl";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoSection />
      <FeatureCards />
      <MoreInfo />
      <ConnectSection />

      {/* PRODUCTS SECTION */}
      <ProductsHeading />
      <ClassicControl />
      <ClassicConnect />
      <SmartConnect />
      <DualAlternatingControl />
      <LiftStationControl />
      <FAQSection />
      <TestimonialsSection />
      <AppPromoSection />
    </>
  );
}