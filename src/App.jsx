// src/App.jsx
import { motion } from "framer-motion";

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
      title: "Emotional Journals",
      desc: "Track emotions, triggers and automatic thoughts in structured CBT-inspired journals.",
      tag: "CBT",
    },
    {
      title: "Automatic Thoughts Tracker",
      desc: "Identify, label and reframe cognitive distortions with guided prompts.",
      tag: "Cognitive Restructuring",
    },
    {
      title: "Nutrition Diary",
      desc: "Combine food logs with mood tracking to see the link between nutrition and emotions.",
      tag: "Psycho-nutrition",
    },
    {
      title: "Mini Games",
      desc: "Educational games for kids and adults to learn emotions, habits and self-awareness.",
      tag: "Gamified Learning",
    },
  ],
  tutorials: [
    {
      level: "Beginner",
      title: "Foundations of CBT for Everyday Life",
      desc: "Interactive lessons about thoughts, emotions and behaviors with simple exercises.",
    },
    {
      level: "Intermediate",
      title: "Building Healthy Habits with Food",
      desc: "Step-by-step psycho-nutritional modules to improve your relationship with eating.",
    },
    {
      level: "Advanced",
      title: "Psychology & Nutrition Integrated Programs",
      desc: "Structured paths that combine emotional work, lifestyle changes and self-monitoring.",
    },
  ],
  professionals: [
    {
      title: "Custom Platforms for Psychologists",
      desc: "I design and develop interactive websites with CBT tools, journals and quizzes for your clients.",
    },
    {
      title: "Tools for Nutritionists",
      desc: "Nutrition journals, progress dashboards and psycho-educational content tailored to your clients.",
    },
    {
      title: "White-label Solutions",
      desc: "Apps and web platforms under your own brand, based on evidence-based psychology and nutrition.",
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
              Applications for Mind, Emotions & Nutrition
            </div>
          </div>
        </motion.div>

        {/* Nav */}
        <motion.nav
          className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <HeaderLink href="#home" label="Home" />
          <HeaderLink href="#applications" label="Applications" />
          <HeaderLink href="#tutorials" label="Tutorials" />
          <HeaderLink href="#professionals" label="For Professionals" />
          <HeaderLink href="#about" label="About" />
          <HeaderLink href="#contact" label="Contact" />
        </motion.nav>

        {/* Profile + CTA */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* imagine rotundă – aici pui <img src="..." /> */}
          <div className="h-10 w-10 overflow-hidden rounded-full border border-cyan-400/70 bg-gradient-to-br from-slate-700 to-slate-900 shadow-md shadow-cyan-500/40">
            {/* Placeholder cu inițiale */}
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
              CBT Psychotherapist · Nutritionist · IT Developer
            </div>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110 md:inline-block"
          >
            Book a session
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
          Psychology · CBT · Nutrition · IT
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl"
        >
          Interactive{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
            Applications for Mind
          </span>{" "}
          designed by a CBT psychotherapist, nutritionist & IT developer.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base"
        >
          Follow structured web-based tutorials, emotional and nutrition
          journals, CBT exercises, mini games and interactive articles – just
          like a Udemy course, but focused on your mental health and lifestyle.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#applications"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110"
          >
            Explore applications
          </a>
          <a
            href="#tutorials"
            className="rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
          >
            View tutorials
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-2 text-[11px] text-slate-300"
        >
          <Tag>Emotional journals</Tag>
          <Tag>Automatic thoughts</Tag>
          <Tag>Nutrition tracking</Tag>
          <Tag>CBT mini games</Tag>
          <Tag>Interactive articles</Tag>
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
              <span className="font-semibold">App4Mind Dashboard</span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-cyan-300">
                Live prototype
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <PreviewCard
                title="Emotional Journal"
                pill="CBT"
                gradient="from-rose-500/80 to-orange-400/80"
              />
              <PreviewCard
                title="Automatic Thoughts"
                pill="Cognitive"
                gradient="from-cyan-500/80 to-emerald-400/80"
              />
              <PreviewCard
                title="Nutrition Diary"
                pill="Food & Mood"
                gradient="from-amber-400/80 to-lime-400/80"
              />
              <PreviewCard
                title="Mini Games"
                pill="Play & Learn"
                gradient="from-indigo-400/80 to-fuchsia-500/80"
              />
            </div>

            <div className="mt-4 rounded-2xl bg-slate-900/80 p-3 text-[11px] text-slate-300">
              Designed for:
              <span className="ml-1 text-cyan-300">
                people seeking help, clients in therapy, and professionals who
                want their own platforms.
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
              For therapists
            </div>
            <div className="font-semibold text-cyan-200">
              Custom CBT & nutrition platforms
            </div>
            <div className="mt-1 text-[10px] text-slate-400">
              I build interactive tools for your clients, under your brand.
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
              New
            </div>
            <div className="font-semibold text-emerald-300">
              Web-based tutorials
            </div>
            <div className="mt-1 text-[10px] text-slate-400">
              Step-by-step programs like Udemy, but for your mind & body.
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
      eyebrow="Applications"
      title="Web tools that combine psychology, CBT and nutrition"
      subtitle="Use journals, trackers, quizzes and mini games to work on your thoughts, emotions and lifestyle in a structured way."
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
            <div className="mb-3 flex items-center justify-between">
              <div className="text-xs font-semibold text-cyan-300">
                {item.tag}
              </div>
              <div className="h-6 w-6 rounded-full bg-slate-900/80 text-[10px] text-slate-400 group-hover:text-cyan-200 flex items-center justify-center">
                ▶
              </div>
            </div>
            <div className="mb-2 text-sm font-semibold text-slate-50">
              {item.title}
            </div>
            <div className="text-xs text-slate-300">{item.desc}</div>
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
      eyebrow="Tutorials"
      title="Follow structured programs like an online course"
      subtitle="Tutorials built on web pages, with explanations and exercises you can follow step-by-step, just like Max and Jonas do with React – but focused on CBT and nutrition."
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
              View curriculum
              <span className="text-xs">
                {index === 0 ? "Start here" : "Coming soon"}
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
      eyebrow="For Professionals"
      title="Platforms for psychologists & nutritionists"
      subtitle="If you are a psychologist or nutritionist, I can create custom interactive platforms for your clients – with CBT tools, journals, quizzes and psycho-educational content."
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
              • Custom design • CBT content • Flexible structure
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
      eyebrow="About"
      title="About the creator"
      subtitle="App4Mind is created by a professional who combines psychology, nutrition and IT in one integrated approach."
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
              CBT Psychotherapist · Nutritionist · IT Developer
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="space-y-3 text-xs text-slate-300 md:text-sm"
        >
          <p>
            I have over 10 years of studies and experience across psychology,
            cognitive-behavioral psychotherapy, nutrition and software
            development. My work integrates CBT principles, health behavior and
            modern web technologies.
          </p>
          <p>
            Through App4Mind, I create interactive tools, tutorials and
            platforms that help people understand their thoughts and emotions,
            change unhelpful patterns and build healthier lifestyles. The same
            tools can be adapted for therapists and nutritionists who want to
            bring more technology into their practice.
          </p>
          <p>
            My goal is to make psychology and nutrition not only understandable,
            but also practical and engaging – with clear exercises, structured
            flows and dynamic web experiences.
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
      eyebrow="Contact"
      title="Ready to start or collaborate?"
      subtitle="Whether you need psychotherapy, nutrition counseling, structured tutorials or a custom platform for your clients, you can reach out and we will design something that fits your needs."
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
            You can use this section later for a real contact form, calendar
            link or WhatsApp / email button. For now, you can add simple links:
          </p>
          <ul className="space-y-1 text-cyan-300">
            <li>• Email: your-email@example.com</li>
            <li>• Website: www.app4mind.com</li>
            <li>• Psychology & nutrition sessions – online & in person</li>
            <li>• Custom web platforms for psychologists and nutritionists</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-5 flex flex-wrap gap-3 text-xs"
        >
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2 font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110"
          >
            Request a therapy session
          </a>
          <a
            href="#"
            className="rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2 font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
          >
            Ask for a custom platform
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
          © {new Date().getFullYear()} App4Mind – Created by Roșu
          Adrian-Francois. Psychology · CBT · Nutrition · IT.
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span>Based on science. Built with React.</span>
        </div>
      </div>
    </footer>
  );
}

export default App;
