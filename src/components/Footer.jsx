import siteConfig from '../data/siteConfig.json';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-400 border-t border-dark-700">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gold-400 font-semibold text-lg">{siteConfig.clubName}</p>
            <p className="text-sm">{siteConfig.subtitle}</p>
          </div>
          <div className="text-center md:text-right text-sm">
            <p>Events held on the {siteConfig.eventDay}</p>
            <p>{siteConfig.seasonDates}</p>
            <p className="mt-2">
              Membership:{' '}
              <a href={`mailto:${siteConfig.membershipContact.email}`} className="text-gold-400 hover:text-gold-300 no-underline">
                {siteConfig.membershipContact.name}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-dark-700 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.clubName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
