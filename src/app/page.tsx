import {
  Header,
  Hero,
  About,
  Projects,
  Timeline,
  Achievements,
  Testimonials,
  Contact,
  Footer,
  BackToTop,
  CustomCursor,
} from "@/components";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
