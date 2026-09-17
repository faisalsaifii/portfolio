import { About } from "@/components/about";
import { Ambient } from "@/components/ambient";
import { Contact } from "@/components/contact";
import { Cursor } from "@/components/cursor";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
import { ScrollScene } from "@/components/scroll-scene";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Ambient />
      <Intro />
      <Cursor />
      <Nav />
      <main className="relative z-10">
        <ScrollScene seam={false}>
          <Hero />
        </ScrollScene>
        <ScrollScene>
          <About />
        </ScrollScene>
        <ScrollScene seam={false}>
          <Marquee />
        </ScrollScene>
        <ScrollScene>
          <Work />
        </ScrollScene>
        <ScrollScene>
          <Experience />
        </ScrollScene>
        <ScrollScene>
          <Skills />
        </ScrollScene>
        <ScrollScene>
          <Education />
        </ScrollScene>
        <ScrollScene>
          <Contact />
        </ScrollScene>
      </main>
      <Footer />
    </>
  );
}
