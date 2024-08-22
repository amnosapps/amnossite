import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import { OpenClose } from "@/components/PopupWidget";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Estilo Amnos"
        title=" Nosso modelo de parceria"
      >
        Veja como o seu negócio pode ser beneficiado<br /> através dos nossos times de tecnologia
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <div className="justify-center flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
        <a
          // onClick={OpenClose}
          href="https://api.whatsapp.com/send/?phone=5583981487172&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener"
          className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
          Fale Conosco
        </a>
      </div>
      

      {/* <SectionTitle
        preTitle="Conheça um pouco sobre nós"
        title="Como a Amnos pode lhe ajudar"
      >
        Enten.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

      <SectionTitle
        preTitle="FEADBACKS"
        title="Veja o que nossos clientes falaram sobre nós"
      >
        {/* Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers. */}
      </SectionTitle>

      <Testimonials />
      <div className="justify-center flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
        <a
          href="https://api.whatsapp.com/send/?phone=5583981487172&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener"
          className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
          Fale Conosco
        </a>
        
      </div>

      <SectionTitle preTitle="FAQ" title="Dúvidas frequentes">
        Encontre possíveis dúvidas.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
