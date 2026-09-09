import { clients } from "@/lib/site";

export function Clients() {
  const loop = [...clients, ...clients];
  return (
    <section className="clients" id="clientes" aria-label="Clientes atendidos">
      <div className="container">
        <p className="kicker">Empresas que já confiaram na QeeL Tech</p>
        <div className="marquee">
          <div className="marquee-track">
            {loop.map((c, i) => (
              <span className="client-chip" key={i}>
                <span className="dot" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
