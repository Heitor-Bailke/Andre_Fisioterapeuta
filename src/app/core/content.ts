import { IconName } from "../shared/icon";
export interface Service {
  title: string;
  description: string;
  icon: IconName;
  subject: "physiotherapy" | "pilates";
}
export const services: Service[] = [
  {
    title: "Fisioterapia domiciliar",
    description:
      "O cuidado que você precisa, no conforto da sua casa. Atendimento de acordo com suas necessidades.",
    icon: "home",
    subject: "physiotherapy",
  },
  {
    title: "Pilates",
    description:
      "Movimento com propósito. Exercícios orientados para mobilidade, fortalecimento e controle corporal.",
    icon: "spark",
    subject: "pilates",
  },
  {
    title: "Mobilidade e movimento",
    description:
      "Atenção à sua mobilidade e capacidade funcional para os movimentos que fazem parte da sua vida.",
    icon: "movement",
    subject: "physiotherapy",
  },
  {
    title: "Acompanhamento individualizado",
    description:
      "Um plano que respeita sua história, suas condições e seus objetivos. Porque cada pessoa é única.",
    icon: "person",
    subject: "physiotherapy",
  },
];
export const audiences = [
  {
    number: "01",
    title: "Crianças",
    description:
      "Cuidado individualizado, respeitando as necessidades de cada fase do desenvolvimento.",
  },
  {
    number: "02",
    title: "Adultos",
    description:
      "Atenção à mobilidade, ao movimento e à qualidade de vida em meio à rotina.",
  },
  {
    number: "03",
    title: "Idosos",
    description:
      "Um olhar cuidadoso para a segurança, o equilíbrio, a mobilidade e a independência.",
  },
];
export const steps = [
  {
    title: "Entre em contato",
    description: "Clique no botão de WhatsApp e fale diretamente com André.",
  },
  {
    title: "Conte sua necessidade",
    description: "Compartilhe o que você está buscando e tire suas dúvidas.",
  },
  {
    title: "Combine o atendimento",
    description: "Consulte a região atendida e defina o melhor dia e horário.",
  },
  {
    title: "Receba o cuidado em casa",
    description: "André vai até o endereço combinado para o seu atendimento.",
  },
];
export const benefits: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "person",
    title: "Você no centro do cuidado",
    description: "Atendimento individualizado, pensado para suas necessidades.",
  },
  {
    icon: "home",
    title: "O conforto da sua casa",
    description: "Um ambiente familiar para receber seu acompanhamento.",
  },
  {
    icon: "clock",
    title: "Mais praticidade",
    description: "Sem deslocamentos, com horários combinados para sua rotina.",
  },
  {
    icon: "heart",
    title: "Acompanhamento próximo",
    description:
      "Contato direto com quem cuida de você, do início ao acompanhamento.",
  },
];
export const faqs = [
  {
    question: "Como faço para agendar?",
    answer:
      "Basta clicar em um dos botões de WhatsApp disponíveis no site e falar diretamente com André. Vocês poderão conversar sobre sua necessidade, a região de atendimento e os horários disponíveis.",
  },
  {
    question: "O atendimento é domiciliar?",
    answer:
      "Sim. André realiza atendimentos diretamente no endereço combinado com o paciente, com atenção às necessidades individuais e ao espaço disponível.",
  },
  {
    question: "Quem pode realizar o atendimento?",
    answer:
      "O atendimento pode ser realizado em diferentes faixas etárias, incluindo crianças, adultos e idosos. Entre em contato para verificar a indicação de acordo com cada necessidade.",
  },
  {
    question: "André trabalha com Pilates?",
    answer:
      "Sim. André possui formação em Pilates e trabalha movimento, consciência corporal, mobilidade e fortalecimento de forma individualizada. Converse com ele para conhecer o atendimento.",
  },
  {
    question: "Como saber os horários disponíveis?",
    answer:
      "Os horários são combinados diretamente pelo WhatsApp. Entre em contato para consultar a disponibilidade e encontrar um horário adequado à sua rotina.",
  },
  {
    question: "Onde os atendimentos são realizados?",
    answer:
      "Os atendimentos são realizados em domicílio. Entre em contato pelo WhatsApp para consultar as regiões atendidas antes de agendar.",
  },
];
export interface Testimonial {
  text: string;
  firstName: string;
  photo?: string;
  rating?: number;
}
// Adicionar somente depoimentos reais, com autorização para publicação.
export const testimonials: Testimonial[] = [];
