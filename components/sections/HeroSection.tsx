import { Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="hero-bg relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,249,240,0.45) 0%, rgba(255,232,240,0.5) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          {/* Logo */}
          <svg
            className="w-full max-w-[480px] drop-shadow-[0_2px_12px_rgba(50,30,40,0.18)]"
            viewBox="0 0 900 180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="MOTI NOOR"
          >
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A3545" />
                <stop offset="50%" stopColor="#3A2835" />
                <stop offset="100%" stopColor="#2E1F28" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              fontFamily="Cormorant Garamond, serif"
              fontSize="90"
              letterSpacing="8"
              fill="url(#logoGrad)"
            >
              MOTI NOOR
            </text>
          </svg>

          {/* Tagline */}
          <p
            className="text-sm font-medium uppercase tracking-[0.35em]"
            style={{ color: '#C4899A', fontFamily: 'var(--font-nunito)' }}
          >
            Моти и пончики ручной работы
          </p>

          {/* Headline */}
          <h2
            className="leading-tight"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#3A2835',
              lineHeight: '1.25',
            }}
          >
            В каждом кусочке — история
            <br />
            <span style={{ color: '#D4657D' }}>любви и нежности</span>
          </h2>

          {/* Subtext */}
          <p
            className="max-w-xl text-lg leading-relaxed"
            style={{ color: '#5A4A55', opacity: 0.85 }}
          >
            Сделано с душой, подано с любовью. Дарим радость вашим самым сладким моментам.
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #FFECEF 100%)',
        }}
      />
    </section>
  );
}
