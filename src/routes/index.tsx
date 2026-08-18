import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroRetrato from "@/assets/tiago-hero.jpg.asset.json";
import sobreRetrato from "@/assets/tiago-sobre.png.asset.json";
import AppleCardsCarouselDemo from "@/components/ui/apple-cards-carousel-demo";
import FAQSections from "@/components/ui/faq-sections";
import {
  Sparkles,
  ArrowUpRight,
  Calendar,
  Heart,
  Brain,
  GraduationCap,
  Users,
  ShieldCheck,
  CheckCircle2,
  Smile,
  Target,
  Activity,
  Award,
  BookOpen,
  Check,
} from "lucide-react";

const SITE_URL = "https://psicologotiagotavares.com.br";
const WHATSAPP_URL = "https://wa.me/5569900000000"; // Link do WhatsApp

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#tiago`,
  name: "Tiago Oliveira Tavares",
  jobTitle: "Psicólogo · Terapia Cognitivo-Comportamental",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto Velho",
    addressRegion: "RO",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Psicologia Clínica",
    "Terapia Cognitivo-Comportamental (TCC)",
    "Neuropsicologia",
    "Psicologia do Trânsito",
    "Psicologia Organizacional",
    "Avaliações Psicológicas",
  ],
};

const faq = [
  {
    q: "Como funciona a Terapia Cognitivo-Comportamental (TCC)?",
    a: "A TCC é uma abordagem reconhecida cientificamente que investiga como nossos pensamentos influenciam nossas emoções e comportamentos. Na terapia, identificamos padrões de pensamento disfuncionais e desenvolvemos estratégias práticas para promover mudanças e bem-estar.",
  },
  {
    q: "Para quem é indicado o atendimento psicológico?",
    a: "O atendimento é direcionado a adolescentes, adultos e idosos. Não é voltado apenas a quem vivencia sofrimento intenso, mas também para quem busca autoconhecimento, inteligência emocional e desenvolvimento pessoal.",
  },
  {
    q: "Como funcionam as avaliações psicológicas?",
    a: "Realizo avaliações técnicas e laudos psicológicos para concursos públicos, cirurgia bariátrica, laqueadura e vasectomia, sempre com rigor técnico, ético e responsabilidade profissional.",
  },
  {
    q: "Qual a duração das sessões e do processo terapêutico?",
    a: "Cada sessão dura em média 50 minutos. A duração total do acompanhamento varia conforme as necessidades, objetivos e ritmo individual de cada paciente.",
  },
  {
    q: "Os atendimentos são presenciais ou online?",
    a: "Ofereço modalidade de atendimento adaptada às necessidades do paciente, proporcionando um espaço seguro, acolhedor e com total sigilo profissional.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiago Oliveira Tavares — Psicólogo | Terapia Cognitivo-Comportamental" },
      {
        name: "description",
        content:
          "Psicólogo há mais de 10 anos em Porto Velho, RO. Atendimento psicológico individualizado em Terapia Cognitivo-Comportamental (TCC) e avaliações psicológicas especializadas.",
      },
      { property: "og:title", content: "Tiago Oliveira Tavares — Psicólogo | Terapia Cognitivo-Comportamental" },
      {
        property: "og:description",
        content:
          "Cuidado da saúde mental, autoconhecimento e equilíbrio emocional com prática fundamentada em evidências científicas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${SITE_URL}${heroRetrato.url}` },
      { name: "twitter:image", content: `${SITE_URL}${heroRetrato.url}` },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(personLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..800;1,400..800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "preload", as: "image", href: heroRetrato.url },
    ],
  }),
  component: Home,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const titleRevealVariants = {
  hidden: { y: "100%", rotate: 2 },
  visible: {
    y: "0%",
    rotate: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-40px"]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-[100svh] overflow-hidden bg-deep font-sans text-cream"
    >
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0"
      >
        <img
          src={heroRetrato.url}
          alt="Tiago Oliveira Tavares, Psicólogo"
          className="h-full w-full object-cover object-[65%_center] md:object-[75%_center]"
        />
        {/* Dark subtle overlay gradient for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/75 to-transparent md:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent opacity-80" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-6 py-24 md:px-10"
      >
        <div className="max-w-2xl">
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 backdrop-blur-md"
          >
            <Brain className="h-4 w-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-gold">
              Psicólogo · +10 Anos de Experiência
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              variants={titleRevealVariants}
              className="font-display text-4xl leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl"
            >
              Tiago Oliveira
              <span className="block text-gold">Tavares</span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base font-light leading-relaxed text-cream/90 md:text-lg"
          >
            Dedicado ao cuidado da saúde mental, auxiliando você a compreender suas emoções,
            enfrentar desafios psicológicos e desenvolver uma vida com mais equilíbrio e bem-estar.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-deep shadow-lg shadow-gold/20 transition duration-500 hover:bg-cream hover:text-deep hover:shadow-xl hover:shadow-gold/30"
            >
              <Calendar className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
              <span className="font-display text-lg font-medium">Agendar consulta</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <a
              href="#sobre"
              className="inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/80 transition hover:border-gold hover:text-gold"
            >
              Conheça minha trajetória
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-cream/50">Deslize</span>
        <motion.span
          animate={{ height: [12, 32, 12], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gold"
        />
      </div>
    </section>
  );
}

function SectionHeader({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">{index}</p>
      <h2 className="max-w-3xl font-display text-3xl leading-tight text-deep sm:text-4xl md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

const beneficiosTerapia = [
  { b: "Desenvolver inteligência emocional", t: "e compreender com clareza a origem das suas emoções." },
  { b: "Reduzir sintomas", t: "de ansiedade, estresse e depressão de forma prática e contínua." },
  { b: "Melhorar relacionamentos", t: "interpessoais, familiares e profissionais através da comunicação assertiva." },
  { b: "Fortalecer a autoestima", t: "e a autoconfiança para tomar decisões mais seguras." },
  { b: "Estratégias práticas", t: "para lidar com conflitos e os desafios do dia a dia." },
  { b: "Equilíbrio vida-trabalho", t: "promovendo qualidade de vida e prevenção do esgotamento emocional." },
  { b: "Construção de significado", t: "para viver com mais propósito, clareza e bem-estar." },
];

function PorQueFazerTerapiaSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01 — Cuidado & Transformação">
          Por que fazer terapia?
        </SectionHeader>

        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-deep-soft">
          A terapia é um espaço de acolhimento, escuta qualificada e desenvolvimento pessoal. Ela não é destinada
          apenas a quem está vivendo um momento de sofrimento intenso, mas também àqueles que desejam compreender
          melhor a si mesmos e investir em sua qualidade de vida.
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          {beneficiosTerapia.map((i) => (
            <motion.div
              key={i.b}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-deep/10 bg-white/80 p-6 shadow-xs transition hover:-translate-y-1 hover:border-gold/50"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
              <p className="text-sm leading-relaxed text-deep-soft">
                <strong className="font-semibold text-deep block mb-1">{i.b}</strong>
                {i.t}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-gold/30 bg-sand/60 p-8 text-center md:p-10"
        >
          <p className="font-display text-xl leading-relaxed text-deep md:text-2xl">
            "Buscar ajuda psicológica é um ato de cuidado consigo mesmo e um importante passo para o crescimento pessoal."
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep px-8 py-3.5 text-sm font-medium text-cream transition hover:bg-deep-soft"
          >
            Dar o primeiro passo
            <ArrowUpRight className="h-4 w-4 text-gold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function SobreSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);

  const credenciais = [
    "Psicólogo (10+ anos)",
    "Porto Velho - Rondônia",
    "ILES/ULBRA",
    "Terapia Cognitivo-Comportamental",
    "Neuropsicologia & Reabilitação",
  ];

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative min-h-[110svh] overflow-hidden bg-deep font-sans"
    >
      <motion.img
        style={{ y: imageY, scale: imageScale }}
        src={sobreRetrato.url}
        alt="Tiago Oliveira Tavares em seu consultório"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/85 to-transparent md:w-3/4" />
      <div className="absolute inset-0 bg-deep/40" />

      <div className="relative z-10 mx-auto flex min-h-[110svh] max-w-6xl items-center px-6 py-28 md:px-10 md:py-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold"
          >
            02 — Quem sou
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl leading-tight text-cream md:text-5xl"
          >
            Prazer, sou Tiago Oliveira Tavares.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-cream/90 md:text-lg"
          >
            Tenho 33 anos e sou psicólogo há mais de 10 anos, natural de Porto Velho, Rondônia. Ao longo
            da minha trajetória profissional, tenho dedicado minha carreira ao cuidado da saúde mental,
            auxiliando pessoas a compreenderem suas emoções, enfrentarem desafios psicológicos e desenvolverem
            uma vida com mais equilíbrio e bem-estar.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-cream/85">
            Acredito que cada pessoa possui uma história única e, por isso, cada processo terapêutico deve ser
            construído de forma individualizada, respeitando as necessidades, os objetivos e o momento de vida
            de cada paciente.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-cream/85">
            Meu compromisso é oferecer um atendimento ético, acolhedor e fundamentado em evidências científicas,
            proporcionando um ambiente seguro para que você possa falar sobre suas dificuldades e encontrar
            estratégias para lidar com elas.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2.5">
            {credenciais.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-medium text-cream backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {c}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FormacaoSection() {
  const formacoes = [
    {
      titulo: "Graduação em Psicologia",
      instituicao: "ILES / ULBRA",
      detalhes: "Formação completa em Psicologia com foco no atendimento clínico e saúde mental.",
    },
    {
      titulo: "Pós-graduação em Psicologia do Trânsito",
      instituicao: "FASA (2016)",
      detalhes: "Especialização focada em comportamento humano, percepção e processos de avaliação.",
    },
    {
      titulo: "Pós-graduação em Psicologia Organizacional e Gestão de Pessoas",
      instituicao: "PUC-RS (2027)",
      detalhes: "Aprofundamento na dinâmica de trabalho, relações interpessoais e desenvolvimento humano.",
    },
    {
      titulo: "Pós-graduação em Neuropsicologia com ênfase em Reabilitação Cognitiva",
      instituicao: "Facuminas (2027)",
      detalhes: "Estudo das funções cognitivas, avaliação neuropsicológica e estratégias de reabilitação.",
    },
  ];

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-14">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">
            03 — Qualificação Profissional
          </p>
          <h2 className="font-display text-3xl leading-tight text-deep md:text-5xl">
            Formação & Atualização Constante
          </h2>
          <p className="mt-4 text-base leading-relaxed text-deep-soft">
            Minha formação e atualização constante refletem o compromisso com uma prática psicológica de qualidade,
            oferecendo intervenções eficazes e baseadas na ciência.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {formacoes.map((f, idx) => (
            <motion.div
              key={f.titulo}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl border border-deep/10 bg-cream p-8 shadow-xs transition hover:shadow-md hover:border-gold/40"
            >
              <div className="flex items-center gap-3 text-gold-deep mb-3">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xs uppercase tracking-widest font-semibold">{f.instituicao}</span>
              </div>
              <h3 className="font-display text-xl text-deep font-medium mb-2">{f.titulo}</h3>
              <p className="text-sm text-deep-soft leading-relaxed">{f.detalhes}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AbordagemSection() {
  const pilares = [
    {
      num: "01",
      titulo: "Pensamentos & Emoções",
      desc: "A TCC parte do princípio de que nossos pensamentos influenciam diretamente nossas emoções e comportamentos no cotidiano.",
    },
    {
      num: "02",
      titulo: "Reestruturação Prática",
      desc: "Identificamos padrões de pensamento que causam sofrimento e desenvolvemos estratégias práticas para promover mudanças funcionais.",
    },
    {
      num: "03",
      titulo: "Autonomia Emocional",
      desc: "O objetivo final é fortalecer seus recursos pessoais para que você enfrente os desafios da vida com consciência e autonomia.",
    },
  ];

  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl mb-14">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">
            04 — Minha Abordagem
          </p>
          <h2 className="font-display text-3xl leading-tight text-deep md:text-5xl">
            Terapia Cognitivo-Comportamental (TCC)
          </h2>
          <p className="mt-6 text-base leading-relaxed text-deep-soft">
            Meu trabalho é fundamentado na Terapia Cognitivo-Comportamental (TCC), uma abordagem reconhecida
            cientificamente por sua eficácia no tratamento de diversos transtornos psicológicos e no desenvolvimento
            de habilidades emocionais.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pilares.map((p) => (
            <motion.div
              key={p.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-deep/10 bg-white p-8 shadow-xs"
            >
              <span className="font-display text-3xl text-gold-deep block mb-4">{p.num}</span>
              <h3 className="font-display text-xl text-deep mb-3">{p.titulo}</h3>
              <p className="text-sm leading-relaxed text-deep-soft">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PublicoAlvoSection() {
  const publicos = [
    {
      titulo: "Adolescentes",
      sub: "Fase de transições & identidade",
      desc: "Espaço seguro para compreender as transformações da juventude, questões de ansiedade, escolhas e desenvolvimento de inteligência emocional.",
      icon: Users,
    },
    {
      titulo: "Adultos",
      sub: "Desafios pessoais & profissionais",
      desc: "Suporte para gerenciamento de estresse, autoconhecimento, conflitos de relacionamento, momentos de transição e fortalecimento da saúde mental.",
      icon: Brain,
    },
    {
      titulo: "Idosos",
      sub: "Qualidade de vida & autonomia",
      desc: "Acompanhamento dedicado à maturidade, promovendo o bem-estar emocional, adaptação às mudanças e preservação da qualidade de vida.",
      icon: Heart,
    },
  ];

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-14">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">
            05 — Atendimento Adaptado
          </p>
          <h2 className="font-display text-3xl leading-tight text-deep md:text-5xl">
            Público-alvo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-deep-soft">
            Cada fase da vida apresenta desafios específicos, e a terapia oferece um espaço seguro para compreender
            essas experiências e desenvolver recursos para enfrentá-las.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {publicos.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.titulo}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl border border-deep/10 bg-cream p-8 shadow-xs transition hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="mb-6 inline-flex rounded-xl bg-gold/15 p-3 text-gold-deep">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-deep mb-1">{item.titulo}</h3>
                <p className="text-xs uppercase tracking-wider text-gold-deep font-semibold mb-4">{item.sub}</p>
                <p className="text-sm leading-relaxed text-deep-soft">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicosSection() {
  return <AppleCardsCarouselDemo />;
}

function FAQSection() {
  return <FAQSections items={faq.map((f) => ({ question: f.q, answer: f.a }))} />;
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-deep px-6 py-24 font-sans md:px-10 md:py-32">
      <img
        src={sobreRetrato.url}
        alt="Tiago Oliveira Tavares"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/90 to-deep/75" />

      <div className="relative z-10 mx-auto flex min-h-[400px] max-w-3xl items-center justify-center py-12 text-center md:py-20">
        <div className="max-w-2xl space-y-6">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">Meu compromisso com você</p>
          <h2 className="font-display text-3xl leading-tight text-cream md:text-4xl">
            A psicoterapia é um processo de transformação.
          </h2>
          <p className="text-base leading-relaxed text-cream/90">
            Meu objetivo é caminhar ao seu lado para que você compreenda melhor suas emoções, desenvolva novas
            formas de enfrentar os desafios da vida e alcance uma melhor qualidade de vida.
          </p>
          <p className="text-sm leading-relaxed text-cream/75 italic">
            Se você deseja iniciar esse processo, será um prazer acolhê-lo e ajudá-lo nessa jornada de autoconhecimento,
            equilíbrio emocional e desenvolvimento pessoal.
          </p>
          <div className="pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gold px-9 py-4 font-medium text-deep transition hover:bg-cream hover:shadow-xl"
            >
              <Calendar className="h-5 w-5" />
              <span className="font-display text-lg">Agendar consulta pelo WhatsApp</span>
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <PorQueFazerTerapiaSection />
      <SobreSection />
      <FormacaoSection />
      <AbordagemSection />
      <PublicoAlvoSection />
      <ServicosSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
