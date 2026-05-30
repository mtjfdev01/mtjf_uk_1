export default function PageHero({ label, title, subtitle }) {
  return (
    <section className="bg-navy pt-32 pb-20">
      <div className="container-custom text-center">
        {label && (
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-white/15 text-white/90">
            {label}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">{title}</h1>
        {subtitle && (
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
