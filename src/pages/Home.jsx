import { Link } from 'react-router-dom';
import siteConfig from '../data/siteConfig.json';
import events from '../data/events.json';
import EventCard from '../components/EventCard';

export default function Home() {
  const today = new Date().toISOString().split('T')[0];
  const nextEvent = events.find(e => e.date >= today);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-gold-400 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gold-600 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
          <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
            {siteConfig.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {siteConfig.clubName}
          </h1>
          <p className="text-xl md:text-2xl text-gold-300 mb-2">
            {siteConfig.tagline}
          </p>
          <p className="text-gray-400 mb-8">
            Events on the {siteConfig.eventDay} &bull; {siteConfig.seasonDates}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/events"
              className="inline-block bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold px-8 py-3 rounded-lg transition-colors no-underline"
            >
              View Events
            </Link>
            <Link
              to="/membership"
              className="inline-block border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-dark-900 font-bold px-8 py-3 rounded-lg transition-colors no-underline"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-6">About the Club</h2>
        <p className="text-gray-300 text-center text-lg leading-relaxed">
          Boomers &amp; Friends is an SCPD Chartered Club whose main mission is "FUN!" Each month
          we organize social events which include music, dinner and dancing where you can meet up
          with your friends or make new friends. Boomers is open to all residents of Sun City Palm
          Desert and membership is required.
        </p>
      </section>

      {/* Next Event */}
      {nextEvent && (
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Next Event</h2>
          <div className="max-w-lg mx-auto">
            <EventCard event={nextEvent} isPast={false} />
          </div>
          <div className="text-center mt-6">
            <Link
              to="/events"
              className="text-gold-400 hover:text-gold-300 text-sm font-medium no-underline"
            >
              View all events &rarr;
            </Link>
          </div>
        </section>
      )}

      {/* Quick Info Cards */}
      <section className="bg-dark-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-dark-700 rounded-lg p-6 text-center border border-dark-600">
              <span className="text-3xl mb-3 block">🗓️</span>
              <h3 className="text-white font-semibold mb-2">Monthly Events</h3>
              <p className="text-gray-400 text-sm">
                Every 2nd Tuesday from November through May. Music, dinner, and dancing!
              </p>
            </div>
            <div className="bg-dark-700 rounded-lg p-6 text-center border border-dark-600">
              <span className="text-3xl mb-3 block">🎫</span>
              <h3 className="text-white font-semibold mb-2">Members Only</h3>
              <p className="text-gray-400 text-sm">
                Open to all SCPD residents. Membership is required to attend events.
              </p>
            </div>
            <div className="bg-dark-700 rounded-lg p-6 text-center border border-dark-600">
              <span className="text-3xl mb-3 block">📋</span>
              <h3 className="text-white font-semibold mb-2">Reserve Early</h3>
              <p className="text-gray-400 text-sm">
                Our events fill up fast! Flyers come out the day after the previous event.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
