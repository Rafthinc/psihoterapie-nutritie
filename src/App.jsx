// src/App.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const sections = {
  applications: [
    {
      title: "Jurnalul emoțiilor",
      desc: "Notezi emoțiile și situațiile declanșatoare, într-un format structurat, inspirat din Psihoterapia Cognitiv Comportamentală.",
      tag: "Psihoterapie CBT",
      link: "https://emotion-app-landing.vercel.app/",
    },
    {
      title: "Monitorizarea gândurilor automate",
      desc: "Identifici și etichetezi distorsiunile cognitive și exersezi alternative mai realiste și mai raționale.",
      tag: "Restructurare cognitivă",
      link: "https://intro-section-2-nine.vercel.app/",
    },
    {
      title: "Jurnal de nutriție & stare",
      desc: "Înregistrezi mesele împreună cu emoțiile, pentru a înțelege legătura dintre alimentație și starea ta psihică.",
      tag: "Psihonutriție",
    },
    {
      title: "Mini-jocuri și exerciții",
      desc: "Jocuri educative pentru copii și adulți, pentru învățarea emoțiilor, obiceiurilor sănătoase și autocunoașterii.",
      tag: "Învață jucându-te",
    },
  ],
  tutorials: [
    {
      level: "Începători",
      title: "Înțelege-ți mintea și emoțiile",
      desc: "Lecții interactive despre gânduri, emoții și comportamente, cu exerciții simple pe care le poți aplica imediat.",
      link: "https://emotion-app-landing.vercel.app/",
    },
    {
      level: "Intermediar",
      title: "Relația cu mâncarea și corpul",
      desc: "Module psihonutriționale pas cu pas, pentru a reduce mâncatul emoțional și a construi obiceiuri mai sănătoase.",
    },
    {
      level: "Avansat",
      title: "Programe integrate minte–corp",
      desc: "Trasee structurate care combină lucrul emoțional, schimbarea stilului de viață și auto-monitorizarea.",
    },
  ],
  professionals: [
    {
      title: "Platforme personalizate pentru psihologi",
      desc: "Concep și dezvolt website-uri interactive cu jurnale CBT, teste, quiz-uri și resurse educative pentru clienții tăi.",
    },
    {
      title: "Instrumente digitale pentru nutriționiști",
      desc: "Jurnale de nutriție, dashboard-uri de progres și conținut psiho-educațional, adaptate stilului tău de lucru.",
    },
    {
      title: "Soluții white-label",
      desc: "Aplicații și platforme web sub brandul tău, bazate pe psihologie și nutriție validate științific.",
    },
  ],
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <main className="relative z-10">
        <Header />
        <Hero />
        <ApplicationsSection />
        <TutorialsSection />
        <ProfessionalsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-sm font-semibold shadow-lg shadow-cyan-500/30">
            A4M
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-slate-100">
              App4Mind
            </div>
            <div className="text-xs text-slate-400">
              Psihoterapie · Nutriție · Aplicații pentru minte
            </div>
          </div>
        </motion.div>

        {/* Nav */}
        <motion.nav
          className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <HeaderLink href="#home" label="Acasă" />
          <HeaderLink href="#applications" label="Instrumente & aplicații" />
          <HeaderLink href="#tutorials" label="Programe ghidate" />
          <HeaderLink href="#professionals" label="Pentru profesioniști" />
          <HeaderLink href="#about" label="Despre mine" />
          <HeaderLink href="#contact" label="Programări" />
        </motion.nav>

        {/* Profile + CTA */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* imagine rotundă */}
          <div className="h-10 w-10 overflow-hidden rounded-full border border-cyan-400/70 bg-gradient-to-br from-slate-700 to-slate-900 shadow-md shadow-cyan-500/40">
            <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-slate-50">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl shadow-xl"
                style={{ backgroundImage: "url('/me2025.png')" }}
              ></div>
            </div>
          </div>
          <div className="hidden text-right text-xs leading-tight sm:block">
            <div className="font-semibold text-slate-100">
              Roșu Adrian-Francois
            </div>
            <div className="text-[11px] text-slate-400">
              Psihoterapeut CBT · Nutriționist · Dezvoltator IT
            </div>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110 md:inline-block"
          >
            Programează o ședință
          </a>
        </motion.div>
      </div>
    </header>
  );
}

function HeaderLink({ href, label }) {
  return (
    <a href={href} className="relative transition hover:text-cyan-300">
      {label}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-row md:items-center md:py-16"
    >
      {/* Text */}
      <motion.div
        className="basis-1/2 space-y-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300 shadow-sm shadow-slate-900/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Psihoterapie · CBT · Nutriție · Instrumente digitale
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl"
        >
          Psihoterapie și nutriție{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
            integrate cu aplicații interactive
          </span>{" "}
          create de același specialist.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base"
        >
          Lucrez cu anxietate, depresie, atacuri de panică, tulburări alimentare
          și mâncat emoțional, îmbinând psihoterapia cognitiv-comportamentală
          (CBT) cu consilierea nutrițională și cu instrumente online: jurnale,
          exerciții, mini-jocuri și tutoriale structurate.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3"
        >
          <Link
            to="/psihoterapie"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110"
          >
            Programează o consultație
          </Link>
          <Link
            to="/nutritie"
            className="rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
          >
            Vezi programele de nutriție
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-2 text-[11px] text-slate-300"
        >
          <Tag>Anxietate & atacuri de panică</Tag>
          <Tag>Depresie & stres cronic</Tag>
          <Tag>Mâncat emoțional & tulburări alimentare</Tag>
          <Tag>Jurnale CBT și mini-jocuri</Tag>
          <Tag>Ședințe online & față în față</Tag>
        </motion.div>
      </motion.div>

      {/* Card grid / vizualizare „app previews” */}
      <motion.div
        className="basis-1/2"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="relative mx-auto max-w-md">
          {/* Card mare */}
          <motion.div
            className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-slate-900/80"
            whileHover={{ y: -6 }}
          >
            <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
              <span className="font-semibold">Panoul App4Mind</span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-cyan-300">
                Prototip live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <PreviewCard
                title="Jurnalul emoțiilor"
                pill="CBT"
                gradient="from-rose-500/80 to-orange-400/80"
              />
              <PreviewCard
                title="Gânduri automate"
                pill="Cognitiv"
                gradient="from-cyan-500/80 to-emerald-400/80"
              />
              <PreviewCard
                title="Jurnal de nutriție"
                pill="Food & Mood"
                gradient="from-amber-400/80 to-lime-400/80"
              />
              <PreviewCard
                title="Mini-jocuri CBT"
                pill="Play & Learn"
                gradient="from-indigo-400/80 to-fuchsia-500/80"
              />
            </div>

            <div className="mt-4 rounded-2xl bg-slate-900/80 p-3 text-[11px] text-slate-300">
              Create pentru:
              <span className="ml-1 text-cyan-300">
                persoane care vor să-și lucreze emoțiile, clienți aflați în
                terapie și profesioniști care doresc instrumente moderne pentru
                practică.
              </span>
            </div>
          </motion.div>

          {/* card flotant 1 */}
          <motion.div
            className="absolute -left-6 -bottom-6 hidden w-40 rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-[11px] text-slate-200 shadow-xl shadow-slate-900/80 md:block"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-1 text-[10px] uppercase tracking-wide text-slate-400">
              Pentru terapie
            </div>
            <div className="font-semibold text-cyan-200">
              Jurnale CBT & psihonutriție
            </div>
            <div className="mt-1 text-[10px] text-slate-400">
              Exerciții clare între ședințe, pentru progres real.
            </div>
          </motion.div>

          {/* card flotant 2 */}
          <motion.div
            className="absolute -right-4 -top-6 hidden w-36 rounded-2xl border border-slate-800 bg-slate-900/80 p-2.5 text-[11px] text-slate-200 shadow-xl shadow-slate-900/80 md:block"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-[10px] uppercase tracking-wide text-slate-400">
              Nou
            </div>
            <div className="font-semibold text-emerald-300">
              Tutoriale web ghidate
            </div>
            <div className="mt-1 text-[10px] text-slate-400">
              Ca un curs online, dar pentru anxietate, depresie și relația cu
              mâncarea.
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1">
      {children}
    </span>
  );
}

function PreviewCard({ title, pill, gradient }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-slate-950/70 p-3">
      <div
        className={`mb-2 h-1 w-10 rounded-full bg-gradient-to-r ${gradient}`}
      />
      <div className="text-[11px] font-semibold text-slate-100">{title}</div>
      <div className="mt-1 inline-flex items-center rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-cyan-200">
        {pill}
      </div>
    </div>
  );
}

function SectionWrapper({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <motion.div
        className="mb-8 space-y-3 text-center md:mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300"
        >
          {eyebrow}
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-sm text-slate-300 md:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      {children}
    </section>
  );
}

function ApplicationsSection() {
  return (
    <SectionWrapper
      id="applications"
      eyebrow="Instrumente & Aplicații"
      title="Instrumente online care combină psihoterapia și nutriția"
      subtitle="Poți folosi jurnale, trackere, quiz-uri și mini-jocuri pentru a lucra structurat cu gândurile, emoțiile și obiceiurile tale."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {sections.applications.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/70 p-4 text-sm shadow-lg shadow-slate-950/70 transition hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-cyan-500/30"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-xs font-semibold text-cyan-300">
                  {item.tag}
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/80 text-[10px] text-slate-400 group-hover:text-cyan-200">
                  ▶
                </div>
              </div>
              <div className="mb-2 text-sm font-semibold text-slate-50">
                {item.title}
              </div>
              <div className="text-xs text-slate-300">{item.desc}</div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function TutorialsSection() {
  return (
    <SectionWrapper
      id="tutorials"
      eyebrow="Programe ghidate"
      title="Programe pe care le parcurgi pas cu pas, ca un curs online"
      subtitle="Explicații, exemple și exerciții pe pagini web structurate – la fel cum vezi în cursurile de React, dar aplicate pe anxietate, depresie și relația cu mâncarea."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {sections.tutorials.map((tut, index) => (
          <motion.div
            key={tut.title}
            variants={fadeUp}
            className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-900/80 p-4 text-sm shadow-lg shadow-slate-950/70"
          >
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {tut.level}
              </div>
              <div className="mb-2 text-sm font-semibold text-slate-50">
                {tut.title}
              </div>
              <div className="text-xs text-slate-300">{tut.desc}</div>
            </div>

            <button className="mt-4 inline-flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-[11px] font-semibold text-cyan-200 hover:border-cyan-400 hover:text-cyan-100">
              <a href={tut.link} target="_blank" rel="noopener noreferrer">
                Vezi structura programului
              </a>
              <span className="text-xs">
                {index === 0 ? "Disponibil" : "În curând"}
              </span>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function ProfessionalsSection() {
  return (
    <SectionWrapper
      id="professionals"
      eyebrow="Pentru profesioniști"
      title="Platforme pentru psihologi și nutriționiști"
      subtitle="Dacă ești psiholog sau nutriționist, îți pot crea platforme interactive pentru clienți – cu jurnale CBT, quiz-uri, teste, minijocuri și conținut educativ."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {sections.professionals.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-lg shadow-slate-950/80"
          >
            <div>
              <div className="mb-2 text-sm font-semibold text-slate-50">
                {item.title}
              </div>
              <p className="text-xs text-slate-300">{item.desc}</p>
            </div>
            <div className="mt-4 text-[11px] text-cyan-300">
              • Design personalizat • Conținut CBT • Structură flexibilă
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="Despre mine"
      title="Cine este în spatele App4Mind"
      subtitle="Îmbin psihologia, psihoterapia cognitiv-comportamentală, nutriția și dezvoltarea de aplicații pentru a crea intervenții cât mai practice."
    >
      <motion.div
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-sm shadow-xl shadow-slate-950/80 md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* imagine mare rotundă */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-3 md:items-start"
        >
          <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400/80 bg-gradient-to-br from-slate-800 to-slate-950 shadow-lg shadow-cyan-500/40">
            <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-slate-50">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl shadow-xl"
                style={{ backgroundImage: "url('/me2025.png')" }}
              ></div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-sm font-semibold text-slate-50">
              Roșu Adrian-Francois
            </div>
            <div className="text-xs text-slate-400">
              Psihoterapeut CBT · Psiholog · Nutriționist · Dezvoltator IT
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="space-y-3 text-xs text-slate-300 md:text-sm"
        >
          <p>
            Am peste 10 ani de experiență în psihologie, psihoterapie
            cognitiv-comportamentală, nutriție și peste 15 ani în dezvoltare de
            aplicații. Integrez principiile CBT, schimbarea comportamentală și
            tehnologia modernă pentru a crea intervenții clare și structurate.
          </p>
          <p>
            Prin App4Mind, ofer atât ședințe clasice de psihoterapie și
            consiliere nutrițională, cât și instrumente interactive – jurnale,
            exerciții, quiz-uri și mini-jocuri – pe care clienții le pot folosi
            între ședințe sau independent.
          </p>
          <p>
            Scopul meu este să fac psihologia și nutriția ușor de înțeles, dar
            mai ales aplicabile în viața de zi cu zi: cu pași concreți, exemple,
            analogii și experiențe web dinamice.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      eyebrow="Programări & colaborări"
      title="Vrei să începem sau să colaborăm?"
      subtitle="Poți apela la mine atât pentru psihoterapie și consiliere nutrițională, cât și pentru crearea de instrumente digitale și platforme pentru practică."
    >
      <motion.div
        className="mx-auto max-w-xl rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-sm shadow-xl shadow-slate-950/80"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="space-y-3 text-xs md:text-sm">
          <p className="text-slate-300">
            Secțiunea aceasta poate fi transformată ulterior într-un formular de
            contact sau într-un link direct către calendarul tău. Pentru moment,
            poți folosi date de contact simple:
          </p>
          <ul className="space-y-1 text-cyan-300">
            <li>• Email: psihoterapiieficiente@gmail.com</li>
            <li>• Telefon / WhatsApp: 0723 179 552</li>
            <li>• Ședințe: online și față în față, în București</li>
            <li>
              • Colaborări: platforme și aplicații pentru psihologi și
              nutriționiști
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-5 flex flex-wrap gap-3 text-xs"
        >
          <a
            href="mailto:adresa-ta@exemplu.ro"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2 font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110"
          >
            Programează o ședință de psihoterapie
          </a>
          <a
            href="#professionals"
            className="rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2 font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
          >
            Solicită o platformă personalizată
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-[11px] text-slate-400 md:flex-row">
        <div>
          © {new Date().getFullYear()} App4Mind – Roșu Adrian-Francois.
          Psihoterapie · CBT · Nutriție · IT.
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span>Bazat pe știință. Construit în React.</span>
        </div>
      </div>
    </footer>
  );
}

export default App;
