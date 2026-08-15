import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";


const TITLE = "Dhyanruddh Sujil — Java Full Stack Developer";
const DESCRIPTION =
  "Portfolio of Dhyanruddh Sujil, a Java full stack developer in Bengaluru building Spring Boot, Angular and MySQL applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "TypeScript", "SQL", "Python"] },
  { group: "Frontend", items: ["Angular", "HTML5", "CSS3", "Bootstrap"] },
  { group: "Backend", items: ["Spring Boot", "Spring MVC", "REST APIs", "Hibernate", "JPA"] },
  { group: "Databases", items: ["MySQL", "MongoDB"] },
  { group: "Tools", items: ["Git", "GitHub", "Maven", "Postman"] },
  { group: "Core", items: ["OOP", "DSA", "DBMS", "SDLC", "Unit Testing", "Agile"] },
];

const projects = [
  {
    name: "Gym Management System",
    year: "2026",
    stack: ["Angular", "Spring Boot", "Hibernate", "MySQL"],
    points: [
      "Full-stack gym platform for member registration, workout plans and attendance tracking.",
      "REST APIs with Spring Boot, Hibernate and MySQL for member and workout data.",
      "Integrated an AI chatbot for fitness guidance and user queries.",
    ],
  },
  {
    name: "Personal Finance Management System",
    year: "2025",
    stack: ["Angular", "Spring Boot", "Hibernate", "MySQL"],
    points: [
      "Tracks expenses, budgets and financial records end to end.",
      "Secure RESTful APIs designed with Spring Boot and Hibernate.",
      "Responsive Angular interface for budgeting and financial insights.",
    ],
  },
  {
    name: "Inventory Management System",
    year: "2025",
    stack: ["Angular", "TypeScript", "Spring Boot", "MySQL"],
    points: [
      "Inventory modules built with Angular and responsive UI components.",
      "Full CRUD through Spring Boot REST APIs and MySQL integration.",
      "Validation, debugging and testing to improve reliability.",
    ],
  },
];

const timeline = [
  {
    period: "Apr 2025 — Mar 2026",
    role: "Java Full Stack Developer Intern",
    org: "Quest Innovative Solutions Pvt Ltd · Kochi, Kerala",
    points: [
      "Built full-stack web applications with Java, Spring Boot, Angular and SQL databases.",
      "Designed and integrated RESTful APIs for secure frontend-backend communication.",
      "Debugged and resolved application defects through structured testing.",
      "Shipped software with developers using Agile practices and Git.",
    ],
  },
  {
    period: "Oct 2024 — Apr 2025",
    role: "Java Full Stack Development (Professional Training)",
    org: "QIS Academy · Kochi, Kerala",
    points: [
      "Developed enterprise-style applications with Java, Spring Boot, Hibernate and MySQL.",
      "Applied version control, debugging, testing and Agile practices across the lifecycle.",
    ],
  },
  {
    period: "Jun 2024",
    role: "B.Tech, Electronics and Communication Engineering",
    org: "Srinivas University Institute of Engineering and Technology · Mangalore",
    points: [],
  },
];

const certifications = [
  { name: "Azure AI", issuer: "Microsoft" },
  { name: "Python", issuer: "Infosys" },
  { name: "AWS Architecture", issuer: "Forage" },
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm font-medium tracking-tight">
            <span className="text-primary">dhyan</span>.dev
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full border border-primary/40 px-4 py-1.5 font-mono text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>


      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <p className="mono-label">Bengaluru, Karnataka · India</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Dhyanruddh <span className="glow-text">Sujil</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-primary md:text-base">
            Java Full Stack Developer — Spring Boot · Angular · MySQL
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Software developer with internship experience building full-stack web applications using
            Java, Spring Boot, Angular, Hibernate, RESTful APIs and MySQL. Strong foundation in OOP,
            database design, debugging, testing and Agile development, with a passion for scalable
            enterprise applications.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View projects
            </a>
            <a
              href="https://linkedin.com/in/dhyanruddh-sujil"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              LinkedIn
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
            {[
              ["1 yr", "Full-stack internship"],
              ["3", "End-to-end projects"],
              ["3", "Certifications"],
              ["B.Tech", "ECE, 2024"],
            ].map(([v, l]) => (
              <div key={l} className="bg-card px-5 py-6">
                <dt className="text-2xl font-semibold text-primary">{v}</dt>
                <dd className="mt-1 font-mono text-xs text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <Section id="about" label="01 / About">
          <div className="panel p-7 md:p-9">
            <p className="text-base leading-relaxed text-muted-foreground">
              I build enterprise-style web applications from database schema to responsive UI. Most
              of my work pairs a Spring Boot + Hibernate backend with an Angular frontend, connected
              through secure REST APIs. I care about clean object-oriented design, well-tested
              endpoints and interfaces that stay fast and readable under real data.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Currently based in Bengaluru and open to full-time software engineering roles.
            </p>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" label="02 / Skills">
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="panel panel-hover p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {s.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="chip">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" label="03 / Projects">
          <div className="space-y-4">
            {projects.map((p) => (
              <article key={p.name} className="panel panel-hover p-7 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{p.name}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" label="04 / Experience & Education">
          <ol className="relative space-y-8 border-l border-border pl-7">
            {timeline.map((t) => (
              <li key={t.role} className="relative">
                <span className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <p className="font-mono text-xs tracking-wider text-accent">{t.period}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{t.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
                {t.points.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {t.points.map((pt) => (
                      <li key={pt} className="text-sm leading-relaxed text-muted-foreground">
                        — {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {certifications.map((c) => (
              <div key={c.name} className="panel panel-hover p-5">
                <p className="font-medium">{c.name}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" label="05 / Contact">
          <div className="panel p-8 md:p-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Let&apos;s build something solid.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Open to full-stack and backend engineering roles. The fastest way to reach me is
              email.
            </p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              <ContactItem
                label="Email"
                value="dhyansujil53@gmail.com"
                href="mailto:dhyansujil53@gmail.com"
              />
              <ContactItem label="Phone" value="+91 85901 68148" href="tel:+918590168148" />
              <ContactItem
                label="LinkedIn"
                value="dhyanruddh-sujil"
                href="https://linkedin.com/in/dhyanruddh-sujil"
              />
            </div>
          </div>
        </Section>
      </main>

      <footer className="mx-auto max-w-5xl px-6 py-10">
        <p className="border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dhyanruddh Sujil · Bengaluru, India
        </p>
      </footer>
    </div>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20">
      <p className="mono-label mb-6">{label}</p>
      {children}
    </section>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group bg-card px-5 py-6 transition-colors hover:bg-secondary"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-2 break-all text-sm text-foreground transition-colors group-hover:text-primary">
        {value}
      </p>
    </a>
  );
}
