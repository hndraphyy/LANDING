import Hero from "./sections/Hero";
import Achievements from "./sections/Achievements";
import WhyChooseUs from "./sections/Whyus";
import FeatureCards from "./sections/Featur";
import Brand from "./sections/Brand";
import Pricing from "./sections/Pricing";
import Testimoni from "./sections/Testimoni";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <WhyChooseUs />
      <FeatureCards />
      <Brand />
      <Pricing />
      <Testimoni />
      <Contact />
    </>
  );
}
