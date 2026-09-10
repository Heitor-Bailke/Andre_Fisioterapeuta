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
    title: "Ortopedia e reabilitação funcional",
    description:
      "Acompanhamento individualizado voltado à mobilidade e à recuperação dos movimentos para as atividades do dia a dia.",
    icon: "movement",
    subject: "physiotherapy",
  },
  {
    title: "Fisioterapia esportiva",
    description:
      "Exercícios funcionais e movimentos da modalidade para trabalhar a recuperação de lesões e a preparação para o retorno ao esporte.",
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
    description:
      "Converse sobre o local do atendimento e defina o melhor dia e horário.",
  },
  {
    title: "Comece seu acompanhamento",
    description:
      "Receba atendimento na clínica ou em casa, conforme combinado com André.",
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
    description:
      "Na modalidade domiciliar, receba seu acompanhamento em um ambiente familiar.",
  },
  {
    icon: "clock",
    title: "Mais praticidade",
    description:
      "Combine o atendimento com sua rotina e consulte a opção de receber o cuidado em casa.",
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
      "Sim. Além dos atendimentos em clínicas, André oferece fisioterapia domiciliar no endereço combinado com o paciente, com atenção às necessidades individuais e ao espaço disponível.",
  },
  {
    question: "Quem pode realizar o atendimento?",
    answer:
      "André atende crianças, adultos, idosos e atletas. Entre em contato para conversar sobre sua necessidade e verificar a indicação do acompanhamento.",
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
      "André realiza atendimentos em clínicas e em domicílio, além de ministrar aulas de Pilates. Entre em contato pelo WhatsApp para consultar os locais, as regiões atendidas e a disponibilidade.",
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
