import Intro from "@/components/sections/Intro";
import CaseList from "@/components/sections/CaseList";
import Stack from "@/components/sections/Stack";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { projectItems, workItems } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <Intro />
      <CaseList id="work" eyebrow="Experiência profissional" title="Trabalho" items={workItems} basePath="/trabalho" />
      <CaseList id="projects" eyebrow="Projetos em destaque" title="Projetos" items={projectItems} basePath="/projeto" />
      <Stack />
      <Education />
      <Contact />
    </>
  );
}
