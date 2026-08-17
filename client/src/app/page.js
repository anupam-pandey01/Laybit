
import Hero from "@/components/Laybit/Hero/Hero";
import FeaturedProduct from "@/components/Laybit/FeaturedProduct/FeaturedProduct";
import Products from "@/components/Laybit/Products/Products";
import WhyLaybit from "@/components/Laybit/WhyLaybit/WhyLaybit";
import Roadmap from "@/components/Laybit/Roadmap/Roadmap";
import Pricing from "@/components/Laybit/Pricing/Pricing";
import FAQ from "@/components/Laybit/FAQ/FAQ";
import CTA from "@/components/Laybit/CTA/CTA";



export default function Home() {
  return (
      <main>
        <Hero />
        <FeaturedProduct />
        <Products />
        <WhyLaybit />
        <Roadmap />
        <Pricing />
        <FAQ />
        <CTA /> 
      </main>
  );
}
