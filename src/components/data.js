import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/launch.svg";
import benefitTwoImg from "../../public/img/space.svg";

const benefitOne = {
  title: "Lançamos",
  desc: "Arquitetamos, desenvolvemos e lançamos o seu projeto com o máximo de acertividade. Procuramos sempre criar soluções que façam sentido e que trazem resultados reais para o seu negócio.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Identificação e Refinamento de Dores",
      desc: "Traçamos objetivos croncretos de soluçoes para as principais dores e prioridades.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Desenvolvimento de Soluções",
      desc: "Criamos meios de transformar pontos fracos em pontos fortes, levando o seu negócio ao próximo nível.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Lançamento",
      desc: "Disponibilizamos as soluções em larga escala através de tecnologia.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Escalamos",
  desc: "Assim como um foguete precisa de mão de obra especializada, o seu projeto também precisa! Nós ajudamos o seu projeto a ter mais estabilidade, poder de escala e longevidade. ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Levantamento de Dados",
      desc: "Isso permite a tomar decisões mais acertivas com base em dados baseados em comportamentos no App.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Ajustes de Coordenadas",
      desc: "Evoluímos o seu projeto rumo a acertividade, adequando os detalhes para melhores resultados.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Ver o Sol Nascer Mais Uma Vez",
      desc: "Tecnologia muda todo dia e o comportamento do usuário também, por isso dedicamos times para um evolução contínua do seu projeto, levantando constantemente soluções que fazem sentido para o seu negócio.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
