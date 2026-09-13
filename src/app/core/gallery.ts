export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  title: string;
  description: string;
  thumbnail: string;
  source: string;
  duration?: string;
}
export const featuredCare: GalleryItem = {
  id: "cuidado-individualizado",
  type: "video",
  title: "Cuidado individualizado, em cada etapa",
  description:
    "Um registro do acompanhamento próximo, com movimentos orientados e atenção às necessidades de cada pessoa.",
  thumbnail: "media/gallery/cuidado-individualizado.webp",
  source: "media/videos/cuidado-individualizado.mp4",
  duration: "0:21",
};
export const galleryItems: GalleryItem[] = [
  {
    id: "atendimento",
    type: "photo",
    title: "Atenção em cada atendimento",
    description: "Um registro meu durante uma sessão de fisioterapia.",
    thumbnail: "media/gallery/atendimento.webp",
    source: "media/gallery/atendimento.webp",
  },
  {
    id: "futebol",
    type: "video",
    title: "Movimento no esporte",
    description:
      "Exercícios com elásticos, apoio e movimentos realizados no campo.",
    thumbnail: "media/gallery/futebol.webp",
    source: "media/videos/futebol.mp4",
    duration: "0:28",
  },
  {
    id: "domiciliar",
    type: "video",
    title: "Cuidado no ambiente de casa",
    description:
      "Acompanho uma paciente ao levantar e se equilibrar, oferecendo apoio próximo.",
    thumbnail: "media/gallery/domiciliar.webp",
    source: "media/videos/domiciliar.mp4",
    duration: "0:17",
  },
  {
    id: "figueirense",
    type: "photo",
    title: "Vivência no Figueirense",
    description:
      "Ao lado de profissionais no campo do Figueirense Futebol Clube, durante minha vivência no clube.",
    thumbnail: "media/gallery/figueirense.webp",
    source: "media/gallery/figueirense.webp",
  },
  {
    id: "grupo",
    type: "video",
    title: "Movimento em grupo",
    description: "Atividade em grupo com movimentos dos braços e uso de bolas.",
    thumbnail: "media/gallery/grupo.webp",
    source: "media/videos/grupo.mp4",
    duration: "0:10",
  },
  {
    id: "esporte",
    type: "photo",
    title: "Fisioterapia dentro do esporte",
    description: "Um registro do meu trabalho em uma quadra esportiva.",
    thumbnail: "media/gallery/esporte.webp",
    source: "media/gallery/esporte.webp",
  },
  {
    id: "campo",
    type: "video",
    title: "Exercícios no campo",
    description:
      "Sequências de exercícios com cones, elásticos e deslocamentos no campo.",
    thumbnail: "media/gallery/campo.webp",
    source: "media/videos/campo.mp4",
    duration: "0:20",
  },
  {
    id: "acompanhamento",
    type: "video",
    title: "Acompanhamento próximo",
    description:
      "Acompanho uma paciente durante a caminhada com andador dentro de casa.",
    thumbnail: "media/gallery/acompanhamento.webp",
    source: "media/videos/acompanhamento.mp4",
    duration: "2:20",
  },
];
