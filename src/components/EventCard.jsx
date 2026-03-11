export default function EventCard({ event, isPast }) {
  const date = new Date(event.date + 'T12:00:00');
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.getDate();
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div
      className={`bg-dark-700 rounded-lg overflow-hidden border transition-all ${
        isPast
          ? 'border-dark-600 opacity-60'
          : 'border-gold-500/30 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-500/10'
      }`}
    >
      <div className="flex">
        {/* Date block */}
        <div className={`flex flex-col items-center justify-center px-5 py-4 min-w-[80px] ${
          isPast ? 'bg-dark-600' : 'bg-gold-500'
        }`}>
          <span className={`text-xs font-bold uppercase ${isPast ? 'text-gray-400' : 'text-dark-900'}`}>
            {month}
          </span>
          <span className={`text-2xl font-bold ${isPast ? 'text-gray-300' : 'text-dark-900'}`}>
            {day}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 flex-1">
          <div className="flex items-start gap-2">
            <span className="text-xl">{event.icon}</span>
            <div>
              <h3 className={`font-bold text-lg ${isPast ? 'text-gray-400 line-through' : 'text-white'}`}>
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm mt-0.5">{weekday}</p>
              <p className={`text-sm mt-1 ${isPast ? 'text-gray-500' : 'text-gray-300'}`}>
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
