"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Como será o processo de desenvolvimento?",
    answer: "O processo de desenvolvimento geralmente segue etapas como a coleta de requisitos, planejamento, design, desenvolvimento, testes, e implantação. Mantemos o cliente informado em cada etapa através de reuniões e relatórios de progresso.",
  },
  {
    question: "Como serão definidos os requisitos do software?",
    answer: "rabalhamos em conjunto com você para entender suas necessidades e objetivos. Realizamos reuniões iniciais para discutir suas ideias e, com base nisso, criamos um documento de requisitos detalhado que será usado como base para o desenvolvimento.",
  },
  {
    question: "O que acontece se eu quiser adicionar novas funcionalidades durante o desenvolvimento?",
    answer:
      "Novas funcionalidades podem ser adicionadas durante o desenvolvimento, mas isso pode impactar o prazo e o custo final. Vamos avaliar as mudanças solicitadas e fornecer uma nova estimativa de tempo e custo.",
  },
  {
    question: "Como é feito o acompanhamento do progresso do projeto?",
    answer:
      "Mantemos uma comunicação regular com você durante todo o projeto. Podemos usar ferramentas de gerenciamento de projetos para compartilhar atualizações em tempo real, relatórios de progresso semanais e realizar reuniões periódicas para discutir o andamento.",
  },
  {
    question: "Quanto tempo leva para desenvolver o software?",
    answer:
      "O tempo necessário para desenvolver um software varia de acordo com a complexidade do projeto, o número de funcionalidades, o tamanho da equipe envolvida e outros fatores. Em geral, projetos pequenos como um MVP podem levar de 1 a 3 meses, enquanto projetos mais complexos podem levar de 3 a 6 meses.",
  },
];
