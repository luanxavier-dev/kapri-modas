import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-teen.jpg";
import videoBlusa from "@/assets/video-blusa.asset.json";
import videoVestido from "@/assets/video-vestido.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "KaPri Moda Teen — Looks que elas amam | Paulista/PE" },
      {
        name: "description",
        content:
          "Moda Teen e Jovem dos 12 aos 18 anos. Looks lindos, atendimento incrível e envio para todo Brasil. Compre pelo WhatsApp: (81) 99788-8432.",
      },
    ],
  }),
});

const WHATSAPP_URL =
  "https://wa.me/5581997888432?text=Oi%20KaPri!%20Vim%20pelo%20site%20e%20quero%20ver%20os%20looks%20%F0%9F%92%97";
const INSTAGRAM_URL = "https://instagram.com/kaprimodateen";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Kapri+Moda+Teen+Paulista+PE";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-primary shadow-soft flex items-center justify-center text-primary-foreground font-display font-bold">
              K
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-base">KaPri</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Moda Teen</p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Comprar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-gradient-hero">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 pt-12 pb-20 md:py-24 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
              ✨ Moda Teen · 12 a 18 anos
            </span>
            <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Looks que <em className="text-primary">elas amam</em> usar.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Peças exclusivas, tendências que bombam e aquele atendimento que vira amizade. Compre no WhatsApp e receba em todo o Brasil. 💗
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-3.5 font-semibold shadow-soft hover:scale-[1.02] active:scale-[0.98] transition"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Comprar pelo WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/60 backdrop-blur text-foreground px-6 py-3.5 font-semibold hover:bg-white transition"
              >
                <InstaIcon className="w-5 h-5" />
                @kaprimodateen
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <p className="font-display text-2xl text-foreground">5,5k+</p>
                <p>Seguidoras</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display text-2xl text-foreground">290+</p>
                <p>Looks postados</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display text-2xl text-foreground">Brasil</p>
                <p>Enviamos p/ todo</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
            <img
              src={heroImg}
              alt="Jovem vestindo look rosa da KaPri Moda Teen"
              width={1400}
              height={1600}
              className="relative rounded-3xl shadow-soft w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-soft px-4 py-3 animate-float">
              <p className="text-xs text-muted-foreground">⭐️⭐️⭐️⭐️⭐️</p>
              <p className="text-sm font-semibold">"Looks lindos!"</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground rounded-full px-4 py-3 text-center shadow-glow rotate-6">
              <p className="font-display text-lg leading-none">Novidades</p>
              <p className="text-[10px] uppercase tracking-widest">toda semana</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🛍️", t: "Curadoria Teen", d: "Peças pensadas pra idade dos 12 aos 18." },
            { icon: "📦", t: "Envio Brasil", d: "Enviamos para todo o país com segurança." },
            { icon: "💬", t: "Atendimento VIP", d: "Tira dúvidas e monta look no WhatsApp." },
            { icon: "✨", t: "Tendência real", d: "Chegou no Insta? Chegou na KaPri." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl bg-card border border-border p-6 hover:shadow-soft transition">
              <div className="text-3xl">{b.icon}</div>
              <h3 className="mt-3 font-display text-xl">{b.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section id="looks" className="py-16 md:py-24 bg-gradient-hero">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Looks em movimento</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Chegou na KaPri, saiu arrasando 💗</h2>
            <p className="mt-3 text-muted-foreground">
              Dá o play e veja como as peças caem. Do casual ao festão — tem look pra tudo.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { src: videoBlusa.url, title: "Blusa de amarração", tag: "Novidade" },
              { src: videoVestido.url, title: "Vestido de festa", tag: "Em breve" },
            ].map((v) => (
              <div key={v.title} className="relative rounded-3xl overflow-hidden shadow-soft bg-black aspect-[9/16] max-w-sm mx-auto w-full">
                <video
                  src={v.src}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  loop
                  muted
                  preload="metadata"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary">
                  {v.tag}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <p className="font-display text-white text-lg drop-shadow">{v.title}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-whatsapp text-whatsapp-foreground px-3 py-1.5 text-xs font-semibold inline-flex items-center gap-1"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" /> Quero
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-4xl">💬</div>
          <blockquote className="mt-4 font-display text-3xl md:text-4xl leading-tight text-foreground">
            "Looks lindos. <span className="text-primary">Atendimento maravilhoso!</span>"
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            — Tarscila Vilarim · avaliação Google ⭐️⭐️⭐️⭐️⭐️
          </p>
        </div>
      </section>

      {/* HOW / CTA + VISIT */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Como comprar</h2>
            <p className="mt-3 text-muted-foreground">É rapidinho, do jeito que você já ama fazer.</p>
            <ol className="mt-8 space-y-5">
              {[
                { n: "1", t: "Chama no WhatsApp", d: "Manda um oi ou o print do look que curtiu." },
                { n: "2", t: "Escolhe com a gente", d: "Ajudamos com tamanho, cor e combinação." },
                { n: "3", t: "Recebe em casa", d: "Enviamos para todo o Brasil com carinho." },
              ].map((s) => (
                <li key={s.n} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-primary text-primary-foreground font-display text-lg flex items-center justify-center shadow-soft">
                    {s.n}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{s.t}</p>
                    <p className="text-muted-foreground text-sm">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-3.5 font-semibold shadow-soft hover:scale-[1.02] transition"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar agora: (81) 99788-8432
            </a>
          </div>

          <div className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-soft">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Visite a loja</p>
            <h3 className="mt-2 font-display text-3xl">KaPri Moda Teen</h3>
            <p className="mt-3 text-muted-foreground">
              R. Adeilson João Alves da Silva, 102<br />
              Centro · Paulista/PE · 53401-410
            </p>
            <div className="mt-6 rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-2 text-sm">
                {[
                  ["Segunda", "09:00 – 17:00"],
                  ["Terça", "09:00 – 17:00"],
                  ["Quarta", "09:00 – 17:00"],
                  ["Quinta", "09:00 – 17:00"],
                  ["Sexta", "09:00 – 17:00"],
                  ["Sábado", "08:00 – 12:00"],
                  ["Domingo", "Fechado"],
                ].map(([d, h]) => (
                  <div key={d} className="flex justify-between px-4 py-2.5 border-b border-border last:border-b-0 even:bg-secondary/50 col-span-2">
                    <span className="font-medium">{d}</span>
                    <span className="text-muted-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-secondary transition"
              >
                📍 Como chegar
              </a>
              <a
                href="tel:+5581997888432"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-secondary transition"
              >
                📞 Ligar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-gradient-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative">
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Bora montar seu próximo look favorito?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Chama a KaPri no WhatsApp e recebe as novidades da semana em primeira mão. 💗
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-bold text-lg shadow-glow hover:scale-[1.03] transition"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Quero meu look agora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KaPri Moda Teen · Paulista/PE</p>
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary inline-flex items-center gap-1">
              <InstaIcon className="w-4 h-4" /> @kaprimodateen
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary inline-flex items-center gap-1">
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-whatsapp text-whatsapp-foreground w-14 h-14 rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
