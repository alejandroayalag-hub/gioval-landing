const CELLS = [
  { span: 'col-span-2 row-span-2', src: '/images/gallery-1.jpg', pos: 'center', label: 'Tratamientos corporales' },
  { span: 'col-span-1 row-span-1', src: '/images/gallery-2.jpg', pos: 'center', label: 'Productos especializados' },
  { span: 'col-span-1 row-span-1', src: '/images/gallery-3.jpg', pos: 'center', label: 'Equipo de precisión' },
  { span: 'col-span-1 row-span-2', src: '/images/gallery-4.jpg', pos: 'center top', label: 'Medicina inyectable' },
  { span: 'col-span-2 row-span-1', src: '/images/gallery-5.jpg', pos: 'center 30%', label: 'Nuestro equipo' },
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
              className={`${c.span} relative overflow-hidden group cursor-pointer`}>
              <img
                src={c.src}
                alt={c.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: c.pos }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                <p className="font-body text-xs tracking-widest uppercase text-white/0 group-hover:text-white/80 transition-all duration-300">
                  {c.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
