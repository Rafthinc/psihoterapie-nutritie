// src/PsychotherapyPage.jsx
import { Link } from "react-router-dom";

function PsychotherapyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <main className="relative z-10">
        {/* Header simplu */}
        <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link to="/" className="text-sm font-semibold text-slate-100">
              App4Mind
            </Link>
            <nav className="flex gap-4 text-xs text-slate-300">
              <Link to="/" className="hover:text-cyan-300">
                Acasă
              </Link>
              <Link to="/psihoterapie" className="text-cyan-300 font-semibold">
                Psihoterapie
              </Link>
              <Link to="/nutritie" className="hover:text-cyan-300">
                Nutriție
              </Link>
            </nav>
          </div>
        </header>

        <section className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          {/* Hero */}
          <div className="mb-10 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              Psihoterapie cognitiv-comportamentală (CBT)
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Psihoterapie CBT pentru{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                anxietate, depresie și atacuri de panică
              </span>
            </h1>
            <p className="max-w-2xl text-sm text-slate-300 md:text-base">
              Lucrez cu adulți și adolescenți care se confruntă cu anxietate,
              depresie, atacuri de panică, stres cronic, probleme de somn,
              autocritică puternică și blocaje emoționale. Abordarea mea este
              cognitiv-comportamentală (CBT), structurată, clară și orientată
              spre rezultate – combinată cu instrumente online precum jurnale,
              exerciții și mini-aplicații psihologice.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <Tag>Anxietate generalizată</Tag>
              <Tag>Atacuri de panică</Tag>
              <Tag>Depresie</Tag>
              <Tag>Stres & burnout</Tag>
              <Tag>Fobie socială</Tag>
              <Tag>Stimă de sine scăzută</Tag>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:adresa-ta@exemplu.ro"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2 font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110"
              >
                Programează o ședință
              </a>
              <a
                href="https://wa.me/4xxxxxxxxxx"
                className="rounded-full border border-slate-600 bg-slate-900/70 px-5 py-2 font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
              >
                Scrie-mi pe WhatsApp
              </a>
            </div>
          </div>

          {/* Probleme tratate */}
          <Section title="Cu ce te pot ajuta">
            <ul className="grid gap-3 text-sm text-slate-200 md:grid-cols-2">
              <li>• Anxietate generalizată și îngrijorare excesivă</li>
              <li>• Atacuri de panică și frică de simptomele fizice</li>
              <li>• Depresie, oboseală emoțională, lipsă de motivație</li>
              <li>• Stres cronic, burnout, perfecționism</li>
              <li>• Fobie socială, rușine, frica de judecata celorlalți</li>
              <li>• Gelozie, invidie, furie și dificultăți în relații</li>
              <li>• Stimă de sine scăzută și autocritică dură</li>
              <li>
                • Mâncat compulsiv și probleme emoționale legate de mâncare
              </li>
            </ul>
          </Section>

          {/* Ce este CBT */}
          <Section title="Ce este terapia cognitiv-comportamentală (CBT)">
            <p className="text-sm text-slate-300 md:text-base">
              CBT pornește de la ideea că nu situațiile în sine ne fac să
              suferim, ci modul în care le interpretăm. Împreună identificăm
              gândurile automate, credințele de bază și tiparele de comportament
              care întrețin anxietatea, depresia sau rușinea, iar apoi lucrăm
              pas cu pas pentru a le modifica. Terapia este activă: vei primi
              explicații clare, fișe de lucru, exerciții și recomandări concrete
              între ședințe.
            </p>
          </Section>

          {/* Instrumente digitale */}
          <Section title="Instrumente moderne în terapie">
            <p className="mb-3 text-sm text-slate-300">
              Pe lângă discuțiile din ședință, folosim și instrumente digitale
              create de mine:
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Jurnalul gândurilor automate și al emoțiilor</li>
              <li>
                • Exerciții interactive pentru identificarea distorsiunilor
                cognitive
              </li>
              <li>• Jurnal de progres și monitorizare a simptomelor</li>
              <li>• Mini-jocuri psihologice pentru antrenarea atenției</li>
              <li>• Tutoriale web ghidate pe teme de anxietate și depresie</li>
            </ul>
          </Section>

          {/* Cum decurge terapia */}
          <Section title="Cum decurge procesul terapeutic">
            <ol className="space-y-2 text-sm text-slate-200">
              <li>
                <strong>1. Evaluare inițială</strong> – discutăm contextul,
                simptomele, istoricul și obiectivele tale.
              </li>
              <li>
                <strong>2. Formularea planului de lucru</strong> – stabilim
                împreună un plan clar, realist, pe baza principiilor CBT.
              </li>
              <li>
                <strong>3. Sesiuni săptămânale</strong> – combinăm discuția
                terapeutică, exercițiile și instrumentele online.
              </li>
              <li>
                <strong>4. Exerciții între ședințe</strong> – primești
                recomandări concrete pentru a exersa ce lucrăm în terapie.
              </li>
              <li>
                <strong>5. Evaluarea progresului</strong> – urmărim împreună
                schimbările și ajustăm intervenția.
              </li>
            </ol>
          </Section>

          {/* Info practică */}
          <Section title="Programări și detalii practice">
            <p className="text-sm text-slate-300">
              Ședințele durează aproximativ 50 de minute și pot avea loc online
              sau față în față, în București. Pentru a discuta dacă psihoterapia
              CBT este potrivită pentru situația ta, îmi poți scrie un mesaj sau
              poți programa direct o primă întâlnire.
            </p>
          </Section>

          {/* bloc SEO scurt */}
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-400">
            Psihoterapeut cognitiv-comportamental (CBT) în București – Roșu
            Adrian-Francois. Intervenții pentru anxietate, depresie, atacuri de
            panică, stres și tulburări alimentare, cu integrarea consilierii
            nutriționale atunci când este nevoie.
          </div>
        </section>

        <footer className="border-t border-slate-800 bg-slate-950/90">
          <div className="mx-auto max-w-5xl px-4 py-4 text-[11px] text-slate-400">
            © {new Date().getFullYear()} Roșu Adrian-Francois – Psihoterapie CBT
            & Nutriție.
          </div>
        </footer>
      </main>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8 space-y-3">
      <h2 className="text-lg font-semibold text-slate-50">{title}</h2>
      {children}
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

export default PsychotherapyPage;
