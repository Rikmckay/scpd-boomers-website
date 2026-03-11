import siteConfig from '../data/siteConfig.json';

export default function Membership() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Become a Member</h1>
      <p className="text-gray-400 mb-8">
        Membership is open to ALL Sun City Palm Desert residents!
      </p>

      <div className="bg-dark-700 rounded-lg p-6 md:p-8 border border-dark-600 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">How to Join</h2>
        <ol className="space-y-4 text-gray-300">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 text-dark-900 flex items-center justify-center font-bold text-sm">1</span>
            <span>Pick up a Membership Form at any of the kiosks located in each of the three clubhouses.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 text-dark-900 flex items-center justify-center font-bold text-sm">2</span>
            <span>Complete the membership form.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 text-dark-900 flex items-center justify-center font-bold text-sm">3</span>
            <span>Place the completed form and your check together in an envelope.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 text-dark-900 flex items-center justify-center font-bold text-sm">4</span>
            <span>Drop your envelope in {siteConfig.mailbox}.</span>
          </li>
        </ol>
      </div>

      {/* Download section */}
      <div className="bg-dark-700 rounded-lg p-6 md:p-8 border border-gold-500/30 mb-8">
        <h2 className="text-xl font-semibold text-white mb-2">Download Membership Form</h2>
        <p className="text-gray-400 text-sm mb-4">
          Print the form at home and mail it in with your check.
        </p>
        <a
          href="/docs/membership-form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold px-6 py-3 rounded-lg transition-colors no-underline"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Membership Form (PDF)
        </a>
      </div>

      {/* Important note */}
      <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-6">
        <p className="text-gold-300 font-semibold mb-2">Important</p>
        <p className="text-gray-300 text-sm">
          You must be a member to attend our events. Events fill up fast, so please reserve early!
          Flyers come out the day after the previous event and are emailed directly to members.
        </p>
      </div>

      {/* Future online form placeholder */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Questions? Contact {siteConfig.membershipContact.name} at{' '}
          <a href={`mailto:${siteConfig.membershipContact.email}`} className="text-gold-400 hover:text-gold-300 no-underline">
            {siteConfig.membershipContact.email}
          </a>
        </p>
      </div>
    </div>
  );
}
