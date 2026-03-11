export default function BoardCard({ member }) {
  return (
    <div className="bg-dark-700 rounded-lg p-5 border border-dark-600 hover:border-gold-500/30 transition-colors">
      <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-dark-900 font-bold text-lg mb-3">
        {member.name.charAt(0)}
      </div>
      <h3 className="text-white font-semibold">{member.name}</h3>
      <p className="text-gold-400 text-sm">{member.role}</p>
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="text-gray-400 text-sm hover:text-gold-300 no-underline mt-1 block"
        >
          {member.email}
        </a>
      )}
    </div>
  );
}
