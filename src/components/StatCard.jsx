export default function StatCard({ value, label, icon, light = false }) {
  return (
    <div className={`text-center p-6 rounded-2xl ${light ? 'bg-white/10 backdrop-blur-sm' : 'bg-white shadow-md'}`}>
      {icon && (
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
          light ? 'bg-white/20' : 'bg-blue-50'
        }`}>
          <span className={`text-2xl ${light ? 'text-white' : 'text-navy'}`}>{icon}</span>
        </div>
      )}
      <div className={`text-4xl font-bold mb-1 ${light ? 'text-white' : 'text-navy'}`}>{value}</div>
      <div className={`text-sm font-medium ${light ? 'text-white/75' : 'text-gray-500'}`}>{label}</div>
    </div>
  )
}
