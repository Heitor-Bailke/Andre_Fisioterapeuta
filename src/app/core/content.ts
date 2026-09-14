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
      "Levo a fisioterapia até você, com sessões planejadas para o espaço e os recursos disponíveis na sua casa.",
    icon: "home",
    subject: "physiotherapy",
  },
  {
    title: "Pilates",
    description:
      "Oriento exercícios para desenvolver força, flexibilidade e consciência corporal.",
    icon: "spark",
    subject: "pilates",
  },
  {
    title: "Ortopedia e reabilitação funcional",
    description:
      "Ajudo você a recuperar a mobilidade e a retomar as atividades do dia a dia.",
    icon: "movement",
    subject: "physiotherapy",
  },
  {
    title: "Fisioterapia esportiva",
    description:
      "Trabalho a recuperação de lesões e a preparação para o retorno ao esporte com exercícios da sua modalidade.",
    icon: "person",
    subject: "physiotherapy",
  },
];
export const audiences = [
  {
    number: "01",
    title: "Crianças",
    description:
      "Adapto as sessões às necessidades de cada etapa do desenvolvimento.",
  },
  {
    number: "02",
    title: "Adultos",
    description:
      "Trabalho as dificuldades que afetam sua rotina, do trabalho à atividade física.",
  },
  {
    number: "03",
    title: "Idosos",
    description:
      "Busco favorecer o equilíbrio, a segurança e a independência nas tarefas diárias.",
  },
];
export const steps = [
  {
    title: "Entre em contato",
    description: "Me envie uma mensagem pelo WhatsApp.",
  },
  {
    title: "Conte sua necessidade",
    description: "Compartilhe o que você está buscando e tire suas dúvidas.",
  },
  {
    title: "Combine o atendimento",
    description: "Vamos definir juntos o local, o dia e o horário.",
  },
  {
    title: "Comece seu acompanhamento",
    description:
      "Na primeira sessão, avalio suas necessidades para planejar os próximos passos.",
  },
];
export const benefits: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "person",
    title: "Escuta desde o início",
    description:
      "Quero entender suas dificuldades e o que você deseja alcançar.",
  },
  {
    icon: "home",
    title: "O conforto da sua casa",
    description:
      "Adapto a sessão ao seu ambiente para facilitar a continuidade em casa.",
  },
  {
    icon: "clock",
    title: "Mais praticidade",
    description:
      "Combino com você horários que se encaixem na sua rotina, conforme a disponibilidade.",
  },
  {
    icon: "heart",
    title: "Acompanhamento próximo",
    description:
      "Acompanho sua evolução e ajusto o plano ao longo das sessões.",
  },
];
export const faqs = [
  {
    question: "Como faço para agendar?",
    answer:
      "Clique em um dos botões de WhatsApp e me conte o que você precisa. Vamos conversar sobre o local e os horários disponíveis.",
  },
  {
    question: "O atendimento é domiciliar?",
    answer:
      "Sim. Além de atuar em clínicas, vou até o endereço combinado com você. Planejo a sessão considerando suas necessidades e o espaço disponível.",
  },
  {
    question: "Quem você atende?",
    answer:
      "Atendo crianças, adultos, idosos e atletas. Podemos conversar para avaliar se minha atuação é adequada ao que você precisa.",
  },
  {
    question: "Você trabalha com Pilates?",
    answer:
      "Sim. Tenho formação em Pilates e ministro aulas com exercícios adaptados aos objetivos e às possibilidades de cada aluno.",
  },
  {
    question: "Como saber os horários disponíveis?",
    answer:
      "Me chame pelo WhatsApp para consultar minha agenda e combinarmos um horário.",
  },
  {
    question: "Você atende em quais regiões?",
    answer:
      "Atendo em Colatina e região, em clínicas e em domicílio, além de ministrar aulas de Pilates. Entre em contato pelo WhatsApp para confirmar a disponibilidade no seu bairro ou município e consultar os locais de atendimento.",
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
