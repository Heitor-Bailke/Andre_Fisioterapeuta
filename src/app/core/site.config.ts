export const siteConfig = {
  name: "André Nunes Ladislau",
  registration: "421269-F",
  whatsappNumber: "5527997854696",
  // Domínio principal usado nos links canônicos e no sitemap.
  siteUrl: "https://drandrenunesfisio.com.br",
  // Acrescentar apenas informações profissionais confirmadas.
  academicBackground: "Pós-graduação em Ortopedia Esportiva",
  university: "",
  courses: ["Pilates", "Fisioterapia no Futebol"] as string[],
  certifications: [] as string[],
  messages: {
    physiotherapy:
      "Olá, André! Encontrei seu site e gostaria de saber mais sobre os atendimentos de fisioterapia.",
    pilates:
      "Olá, André! Encontrei seu site e gostaria de saber mais sobre os atendimentos de Pilates.",
  },
} as const;
export type ContactSubject = keyof typeof siteConfig.messages;
export function whatsappUrl(subject: ContactSubject = "physiotherapy"): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.messages[subject])}`;
}
