export default function EventFlyer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Current Event Flyer</h1>
      <p className="text-gray-400 mb-8">
        The latest event flyer with details and reservation info.
      </p>

      <div className="bg-dark-700 rounded-lg p-6 md:p-8 border border-dark-600">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg">Current Flyer</h2>
            <p className="text-gray-400 text-sm mt-1 mb-4">
              Download the flyer for our current event. The reservation form is at the bottom of the flyer.
              Remember, you must be a member to attend!
            </p>
            <a
              href="/flyers/current-flyer.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold px-6 py-3 rounded-lg transition-colors no-underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Flyer (PDF)
            </a>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-6 text-center">
        New flyers come out the day after each event and are emailed directly to members.
      </p>
    </div>
  );
}
