import { Logo, SectionContainer } from "./primitives";

const LINKS = [
  { label: "O Summit", href: "#summit" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Pilares", href: "#pilares" },
];

export function Footer() {
  return (
    <SectionContainer as="footer" id="contato" className="border-t border-border py-14">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="min-w-0">
          <Logo variant="compact" className="w-36" />
          <p className="mt-5 font-sans text-[0.62rem] uppercase tracking-[0.38em] text-bronze">
            Mentalidade • Estrutura • Prosperidade
          </p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="nav-link font-sans text-[0.7rem] uppercase tracking-[0.2em]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div aria-hidden className="rule-ember my-10 opacity-60" />
      <p className="text-center font-sans text-xs tracking-wide text-muted-foreground/70 md:text-left">
        © {new Date().getFullYear()} Cáliber Summit. Todos os direitos reservados.
      </p>
    </SectionContainer>
  );
}
