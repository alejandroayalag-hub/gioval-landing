const CELLS = [
  { span: 'col-span-2 row-span-2', gradient: 'from-[#887482] to-[#4D4846]', label: 'Tratamientos faciales' },
  { span: 'col-span-1 row-span-1', gradient: 'from-[#CCCAD8] to-[#ABA3BA]', label: 'Medicina inyectable' },
  { span: 'col-span-1 row-span-1', gradient: 'from-[#CED1CA] to-[#DED7CE]', label: 'Tratamientos corporales' },
  { span: 'col-span-1 row-span-2', gradient: 'from-[#ABA3BA] to-[#887482]', label: 'Capilares' },
  { span: 'col-span-2 row-span-1', gradient: 'from-[#DED7CE] to-[#BFB9B3]', label: 'Ambiente clínica' },
]

export default function Gallery() {
  return (
    <section id="galeria" className="bg-gioval-carbon py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gioval-lila mb-4">Galería</p>
          <h2 className="font-display text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            Puedes verlo
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#CCCAD8' }}>y sentirlo</em>
          </h2>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[480px] md:h-[600px]">
          {CELLS.map(c => (
            <div key={c.label}
              className={`${c.span} relative overflow-hidden group cursor-pointer bg-gradient-to-br ${c.gradient}`}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                <p className="font-body text-xs tracking-widest uppercase text-white/0 group-hover:text-white/80 transition-all duration-300">
                  {c.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-body text-gioval-greige text-xs text-center mt-6 tracking-wide">
          Fotos reales de tratamientos y clínica próximamente
        </p>
      </div>
    </section>
  )
}
