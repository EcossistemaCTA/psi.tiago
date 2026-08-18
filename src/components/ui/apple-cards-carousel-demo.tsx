"use client";

import { Card, Carousel, type CarouselItem } from "@/components/ui/apple-cards-carousel";

const serviceContent = (
  title: string,
  subtitle: string,
  description: string,
  items: string[],
) => (
  <div className="space-y-8 font-sans">
    <div className="rounded-[1.75rem] bg-cream p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-deep">{subtitle}</p>
      <h4 className="mt-3 font-display text-3xl text-deep md:text-4xl">{title}</h4>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-deep-soft">{description}</p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-2xl border border-deep/10 bg-sand p-5 text-sm leading-relaxed text-deep-soft shadow-xs">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const data: CarouselItem[] = [
  {
    category: "Saúde Mental",
    title: "Ansiedade & Depressão",
    src: "/tiago-sobre.png",
    content: serviceContent(
      "Ansiedade & Depressão",
      "Acompanhamento Especializado",
      "Intervenções fundamentadas na Terapia Cognitivo-Comportamental (TCC) para identificação de padrões de pensamento disfuncionais e manejo eficaz de sintomas.",
      [
        "Identificação e reestruturação de pensamentos automáticos.",
        "Desenvolvimento de estratégias práticas de enfrentamento.",
        "Redução do sofrimento emocional e resgate do bem-estar.",
      ],
    ),
  },
  {
    category: "Autoconhecimento",
    title: "Inteligência Emocional",
    src: "/tiago-hero.jpg",
    content: serviceContent(
      "Inteligência Emocional & Desenvolvimento",
      "Crescimento Pessoal",
      "Fortalecimento da autoestima, autoconfiança e compreensão das próprias emoções para viver com mais autonomia e segurança.",
      [
        "Compreensão aprofundada dos estados emocionais.",
        "Fortalecimento da autoestima e autoaceitação.",
        "Construção de uma vida com mais significado e propósito.",
      ],
    ),
  },
  {
    category: "Avaliações Técnicas",
    title: "Avaliações Psicológicas",
    src: "/tiago-sobre.png",
    content: serviceContent(
      "Avaliações Psicológicas Especializadas",
      "Responsabilidade & Ética",
      "Elaboração de pareceres e laudos psicológicos com rigor técnico para procedimentos cirúrgicos e processos seletivos.",
      [
        "Avaliação psicológica para concursos públicos.",
        "Laudos para cirurgia bariátrica.",
        "Avaliação e orientação para laqueadura e vasectomia.",
      ],
    ),
  },
  {
    category: "Relacionamentos",
    title: "Vínculos & Estresse",
    src: "/tiago-hero.jpg",
    content: serviceContent(
      "Relacionamentos Interpessoais & Estresse",
      "Equilíbrio & Conflitos",
      "Desenvolvimento de comunicação assertiva, inteligência relacional e estratégias para lidar com esgotamento emocional e estresse do cotidiano.",
      [
        "Melhoria na comunicação e resolução de conflitos.",
        "Manejo do estresse ocupacional e burnout.",
        "Equilíbrio entre a vida pessoal e profissional.",
      ],
    ),
  },
  {
    category: "Carreira",
    title: "Orientação Vocacional",
    src: "/tiago-sobre.png",
    content: serviceContent(
      "Orientação Profissional & Vocacional",
      "Decisões Conscientes",
      "Auxílio na escolha profissional, transição de carreira e desenvolvimento de metas alinhadas ao seu perfil e objetivos de vida.",
      [
        "Mapeamento de habilidades, interesses e valores.",
        "Planejamento estruturado de transição profissional.",
        "Tomada de decisão consciente e direcionada.",
      ],
    ),
  },
  {
    category: "Público-Alvo",
    title: "Adolescentes, Adultos & Idosos",
    src: "/tiago-hero.jpg",
    content: serviceContent(
      "Atendimento por Ciclos de Vida",
      "Acolhimento Individualizado",
      "Cada fase da vida apresenta desafios únicos. O processo terapêutico é construído respeitando as especificidades de cada momento.",
      [
        "Atendimento adaptado para adolescentes em fase de desenvolvimento.",
        "Suporte a adultos frente a desafios pessoais e profissionais.",
        "Acolhimento a idosos promovendo qualidade de vida e autonomia.",
      ],
    ),
  },
];

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.title} card={card} index={index} />);

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">Demandas Atendidas</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-deep md:text-5xl">
            Acompanhamento psicológico e avaliações especializadas.
          </h2>
          <p className="mt-4 text-base text-deep-soft">
            Atendimento conduzido com ética, responsabilidade técnica e respeito à individualidade de cada paciente.
          </p>
        </div>

        <div className="mt-10">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}
