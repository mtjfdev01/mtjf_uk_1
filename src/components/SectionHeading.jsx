export default function SectionHeading({ label, title, subtitle, center = false, light = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {label && (
        <span className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
          light ? 'bg-white/20 text-white' : 'bg-blue-50 text-navy'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${
          light ? 'text-white/80' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
