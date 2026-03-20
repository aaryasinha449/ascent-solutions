import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import CertificatesSection from "@/components/CertificatesSection";
import GallerySection from "@/components/GallerySection";
import ServiceCoverageSection from "@/components/ServiceCoverageSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Fixed Nav */}
      <Navbar />

      {/* Hero */}
      <HeroSlider />

      {/* About Company */}
      <AboutSection />

      {/* Stats */}
      <StatsSection />

      {/* Services */}
      <ServicesSection />

      {/* Products */}
      <ProductsSection />

      {/* Certificates & Awards */}
      <CertificatesSection />

      {/* Gallery */}
      <GallerySection />

      {/* Coverage */}
      <ServiceCoverageSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
