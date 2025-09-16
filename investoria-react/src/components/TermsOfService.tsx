export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-900 to-green-1000 text-investoria-text">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="text-gold-400 hover:text-gold-300 transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Investoria
          </a>
          <span className="font-cinzel font-bold text-gold-400 text-lg">INVESTORIA</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gold-400/20">
          <h1 className="font-cinzel font-bold text-3xl md:text-4xl text-gold-400 mb-2 border-b-2 border-gold-400 pb-4">
            Terms of Service
          </h1>
          
          <div className="bg-green-800/30 p-4 rounded-lg border border-gold-400/30 mb-8 mt-6">
            <p className="text-sm text-gold-400 font-medium">
              <strong>Last Updated:</strong> September 16, 2025
            </p>
          </div>

          <div className="bg-yellow-400/10 p-4 rounded-lg border border-yellow-400/30 mb-8">
            <p className="text-yellow-400 font-medium">
              <strong>Important Notice:</strong> These terms govern your use of Investoria, a gamified investment education and portfolio management platform. By using our service, you agree to these terms.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">1. Acceptance of Terms</h2>
              <p className="text-investoria-muted leading-relaxed">
                By accessing or using Investoria ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">2. Description of Service</h2>
              <p className="text-investoria-muted leading-relaxed mb-4">
                Investoria is a city-building investment platform that:
              </p>
              <ul className="list-disc list-inside text-investoria-muted space-y-2 ml-4">
                <li>Provides educational content about investing and financial markets</li>
                <li>Allows users to visualize their investment portfolios as virtual cities</li>
                <li>Facilitates real stock and ETF investments through licensed broker-dealers</li>
                <li>Offers gamified experiences to enhance financial literacy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">3. Investment Disclaimers</h2>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-400/30 mb-4">
                <p className="text-red-400 font-medium mb-2">
                  <strong>Important Investment Disclosures:</strong>
                </p>
                <ul className="list-disc list-inside text-investoria-muted space-y-2 ml-4">
                  <li>Investoria is for educational and entertainment purposes</li>
                  <li>All content is not financial advice and should not be considered as such</li>
                  <li>Past performance does not guarantee future results</li>
                  <li>All investments carry risk of loss, including potential loss of principal</li>
                  <li>You should consult with qualified financial professionals before making investment decisions</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">4. User Accounts and Eligibility</h2>
              <p className="text-investoria-muted leading-relaxed mb-4">
                To use Investoria, you must:
              </p>
              <ul className="list-disc list-inside text-investoria-muted space-y-2 ml-4">
                <li>Be at least 18 years old (or the age of majority in your jurisdiction)</li>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be legally eligible to invest in securities in your jurisdiction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">5. Acceptable Use</h2>
              <p className="text-investoria-muted leading-relaxed mb-4">
                You agree to use Investoria only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-investoria-muted space-y-2 ml-4">
                <li>Use the service for any fraudulent or illegal activities</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Share your account credentials with others</li>
                <li>Use automated systems to access the service without permission</li>
                <li>Interfere with the proper functioning of the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">6. Investment Services and Third-Party Partnerships</h2>
              <p className="text-investoria-muted leading-relaxed">
                Investment services are provided through licensed third-party broker-dealers. Investoria acts as a technology platform and does not provide investment advice or act as a broker-dealer. All investment transactions are subject to the terms and conditions of our partner broker-dealers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">7. Limitation of Liability</h2>
              <p className="text-investoria-muted leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, INVESTORIA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT LIMITED TO INVESTMENT LOSSES, LOST PROFITS, OR DATA LOSS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">8. Regulatory Compliance</h2>
              <p className="text-investoria-muted leading-relaxed">
                Investoria operates in compliance with applicable securities laws and regulations. Investment services are provided through FINRA-registered broker-dealers. We reserve the right to restrict access based on regulatory requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">9. Contact Information</h2>
              <p className="text-investoria-muted leading-relaxed">
                For questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-green-800/30 rounded-lg">
                <p className="text-investoria-muted">
                  <strong className="text-gold-400">Investoria Support</strong><br />
                  Email: legal@investoria.com<br />
                  Address: [Company Address]
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gold-400/30 text-center">
            <p className="text-xs text-investoria-muted/70 leading-relaxed">
              <strong>Securities Disclosure:</strong> Investment services provided through third-party registered broker-dealers, members FINRA/SIPC. Investoria is not a registered broker-dealer or investment advisor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
