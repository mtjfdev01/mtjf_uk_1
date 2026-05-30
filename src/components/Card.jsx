export default function Card({ icon, title, description, accent = false }) {
  return (
    <div className={`card group ${accent ? 'border-l-4 border-accent' : ''}`}>
      {icon && (
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-white transition-colors duration-200">
          <span className="text-navy group-hover:text-white text-xl transition-colors duration-200">{icon}</span>
        </div>
      )}
      <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
