import events from '../data/events.json';
import siteConfig from '../data/siteConfig.json';
import EventCard from '../components/EventCard';

export default function Events() {
  const today = new Date().toISOString().split('T')[0];
  const upcoming = events.filter(e => e.date >= today);
  const past = events.filter(e => e.date < today);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Events {siteConfig.season}</h1>
      <p className="text-gray-400 mb-8">
        All events are held on the {siteConfig.eventDay}.
      </p>

      {upcoming.length > 0 && (
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gold-400 mb-4 uppercase tracking-wider">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {upcoming.map(event => (
              <EventCard key={event.date} event={event} isPast={false} />
            ))}
          </div>
        </div>
      )}

      {past.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-500 mb-4 uppercase tracking-wider">
            Past Events
          </h2>
          <div className="space-y-3">
            {past.map(event => (
              <EventCard key={event.date} event={event} isPast={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
