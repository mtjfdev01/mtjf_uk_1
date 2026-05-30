export default function ImagePlaceholder({ gradient = 'from-navy to-navy-light', text, className = '' }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
      {text && (
        <span className="text-white/50 text-sm font-medium text-center px-4">{text}</span>
      )}
    </div>
  )
}
