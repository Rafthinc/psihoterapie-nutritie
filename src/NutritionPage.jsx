// src/NutritionPage.jsx
import { Link } from "react-router-dom";

function NutritionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <main className="relative z-10">
        <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link to="/" className="text-sm font-semibold text-slate-100">
              App4Mind
            </Link>
            <nav className="flex gap-4 text-xs text-slate-300">
              <Link to="/" className="hover:text-cyan-300">
                Acasă
              </Link>
              <Link to="/psihoterapie" className="hover:text-cyan-300">
                Psihoterapie
              </Link>
              <Link to="/nutritie" className="text-cyan-300 font-semibold">
                Nutriție
              </Link>
            </nav>
          </div>
        </header>

        <section className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          {/* Hero */}
          <div className="mb-10 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-300">
              Nutriție & psihonutriție
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Consiliere nutrițională și psihonutriție pentru{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
                mâncat compulsiv, slăbire și relația cu mâncarea
              </span>
            </h1>
            <p className="max-w-2xl text-sm text-slate-300 md:text-base">
              Îmbin nutriția clinică cu psihoterapia pentru a te ajuta să
              înțelegi de ce mănânci atunci când nu îți este foame, cum să
              reduci mâncatul compulsiv și cum să construiești o relație mai
              sănătoasă cu mâncarea și cu propriul corp – fără diete extreme și
              vinovăție.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <Tag>Mâncat compulsiv</Tag>
              <Tag>Mâncat emoțional</Tag>
              <Tag>Slăbire sustenabilă</Tag>
              <Tag>Obezitate de tip I</Tag>
              <Tag>Dependență de dulciuri</Tag>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:adresa-ta@exemplu.ro"
                className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2 font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:brightness-110"
              >
                Programează o consultație de nutriție
              </a>
              <Link
                to="/psihoterapie"
                className="rounded-full border border-slate-600 bg-slate-900/70 px-5 py-2 font-semibold text-slate-100 hover:border-emerald-400 hover:text-emerald-200"
              >
                Vezi și abordarea psihoterapeutică
              </Link>
            </div>
          </div>

          {/* Probleme tratate */}
          <Section title="Cu ce probleme te pot ajuta">
            <ul className="grid gap-3 text-sm text-slate-200 md:grid-cols-2">
              <li>• Mâncat compulsiv și pierderea controlului alimentar</li>
              <li>• Mâncat emoțional (stres, tristețe, plictiseală)</li>
              <li>• Pofta excesivă de dulce și carbohidrați</li>
              <li>• Creștere în greutate și dificultăți de slăbire</li>
              <li>• Diete repetate, efect yo-yo, frustrare</li>
              <li>
                • Relație tensionată cu propriul corp și cu imaginea corporală
              </li>
              <li>
                • Disconfort digestiv, reflux, balonare (în limite non-medicale)
              </li>
              <li>• Obezitate de tip I, asociată cu stres și sedentarism</li>
            </ul>
          </Section>

          {/* Psihonutriție */}
          <Section title="Ce înseamnă psihonutriția">
            <p className="text-sm text-slate-300 md:text-base">
              Psihonutriția combină principii din nutriție cu psihoterapia
              cognitiv-comportamentală. Nu lucrăm doar cu ce și cât mănânci, ci
              și cu <strong>de ce</strong> mănânci: emoțiile, gândurile și
              obiceiurile care te duc automat către mâncare. Analizăm momentele
              cheie ale zilei, tiparele de recompensă și mecanismele de evitare,
              apoi construim alternative mai sănătoase, realiste și accesibile.
            </p>
          </Section>

          {/* Instrumente interactive */}
          <Section title="Instrumente digitale pentru alimentație conștientă">
            <p className="mb-3 text-sm text-slate-300">
              Pentru a-ți fi mai ușor să ții aproape programul, folosim și
              instrumente digitale create de mine:
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Jurnal alimentar + emoții (Food & Mood Journal)</li>
              <li>• Grafic de progres și feedback săptămânal</li>
              <li>• Exerciții CBT pentru momentele de poftă intensă</li>
              <li>
                • Mini-jocuri pentru întârzierea plăcerii și controlul
                impulsului
              </li>
              <li>
                • Resurse educaționale despre obiceiuri, insulină și energie
              </li>
            </ul>
          </Section>

          {/* Pachetul */}
          <Section title="Ce include programul de nutriție + psihoterapie">
            <ol className="space-y-2 text-sm text-slate-200">
              <li>
                1. Evaluare detaliată a stilului de viață și a istoricului
                alimentar.
              </li>
              <li>
                2. Identificarea factorilor emoționali și a situațiilor
                declanșatoare.
              </li>
              <li>
                3. Recomandări nutriționale personalizate, fără diete extreme.
              </li>
              <li>
                4. Tehnici CBT pentru gestionarea poftelor și a mâncatului
                emoțional.
              </li>
              <li>5. Monitorizare prin jurnal și instrumente digitale.</li>
              <li>6. Ajustări progresive, în ritmul tău.</li>
            </ol>
          </Section>

          {/* Info practică */}
          <Section title="Cum începem">
            <p className="text-sm text-slate-300">
              Fie că vrei să slăbești, să reduci mâncatul compulsiv sau doar să
              îți clarifici relația cu mâncarea, putem începe cu o primă
              întâlnire de evaluare. În funcție de nevoile tale, putem combina
              ședințele de nutriție cu psihoterapia CBT sau ne putem concentra
              doar pe partea alimentară.
            </p>
          </Section>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-400">
            Nutriționist & psihoterapeut CBT în București – programe integrate
            pentru mâncat compulsiv, slăbire, tulburări alimentare și relația cu
            mâncarea. Abordare blândă, structurată și sustenabilă.
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

export default NutritionPage;
