export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          
          <div className="bg-green-800/30 p-4 rounded-lg border border-gold-400/30 mb-8 mt-6">
            <p className="text-sm text-gold-400 font-medium">
              <strong>Last Updated:</strong> September 16, 2025
            </p>
          </div>

          <div className="bg-green-400/10 p-4 rounded-lg border border-green-400/30 mb-8">
            <p className="text-green-400 font-medium">
              <strong>Your Privacy Matters:</strong> This Privacy Policy explains how Investoria collects, uses, and protects your personal information when you use our city-building investment platform.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gold-300 mb-3">Personal Information</h3>
              <p className="text-investoria-muted leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gold-400/30 rounded-lg">
                  <thead>
                    <tr className="bg-green-800/30">
                      <th className="border border-gold-400/30 p-3 text-left text-gold-400 font-semibold">Information Type</th>
                      <th className="border border-gold-400/30 p-3 text-left text-gold-400 font-semibold">Examples</th>
                      <th className="border border-gold-400/30 p-3 text-left text-gold-400 font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gold-400/30 p-3 text-investoria-muted">Account Information</td>
                      <td className="border border-gold-400/30 p-3 text-investoria-muted">Name, email, phone number, date of birth</td>
                      <td className="border border-gold-400/30 p-3 text-investoria-muted">Account creation and identity verification</td>
                    </tr>
                    <tr className="bg-green-900/20">
                      <td className="border border-gold-400/30 p-3 text-investoria-muted">Financial Information</td>
                      <td className="border border-gold-400/30 p-3 text-investoria-muted">Investment preferences, risk tolerance, financial goals</td>
                      <td className="border border-gold-400/30 p-3 text-investoria-muted">Personalized investment experience</td>
                    </tr>
                    <tr>
                      <td className="border border-gold-400/30 p-3 text-investoria-muted">Investment Data</td>
                      <td className="border border-gold-400/30 p-3 text-investoria-muted">Portfolio holdings, transaction history, performance</td>
                      <td className="border border-gold-400/30 p-3 text-investoria-muted">Platform functionality and visualization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">2. How We Use Your Information</h2>
              <p className="text-investoria-muted leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-investoria-muted space-y-2 ml-4">
                <li><strong className="text-gold-300">Provide Services:</strong> Enable account access, investment visualization, and platform features</li>
                <li><strong className="text-gold-300">Process Investments:</strong> Facilitate investment transactions through our broker-dealer partners</li>
                <li><strong className="text-gold-300">Personalize Experience:</strong> Customize your city-building investment journey</li>
                <li><strong className="text-gold-300">Communicate:</strong> Send account updates, educational content, and service notifications</li>
                <li><strong className="text-gold-300">Ensure Security:</strong> Protect against fraud and unauthorized access</li>
                <li><strong className="text-gold-300">Comply with Regulations:</strong> Meet legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">3. Data Security and Protection</h2>
              <div className="bg-green-400/10 p-4 rounded-lg border border-green-400/30">
                <p className="text-green-400 font-medium mb-2">
                  <strong>Security Measures:</strong>
                </p>
                <ul className="list-disc list-inside text-investoria-muted space-y-2 ml-4">
                  <li>End-to-end encryption for sensitive financial data</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>SOC 2 Type II compliance for data handling</li>
                  <li>Employee background checks and security training</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">4. Your Privacy Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold text-gold-300 mb-3">Account Management</h3>
              <ul className="list-disc list-inside text-investoria-muted space-y-2 ml-4 mb-6">
                <li><strong className="text-gold-300">Access:</strong> View and download your personal information</li>
                <li><strong className="text-gold-300">Update:</strong> Correct or update your account information</li>
                <li><strong className="text-gold-300">Delete:</strong> Request deletion of your account and associated data</li>
                <li><strong className="text-gold-300">Export:</strong> Receive a copy of your data in a portable format</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold-300 mb-3">State-Specific Rights</h3>
              <p className="text-investoria-muted leading-relaxed mb-4">
                If you are a resident of California, Virginia, Colorado, or other states with privacy laws, you may have additional rights including:
              </p>
              <ul className="list-disc list-inside text-investoria-muted space-y-2 ml-4">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">5. Data Retention</h2>
              <p className="text-investoria-muted leading-relaxed mb-4">
                We retain your information for as long as:
              </p>
              <ul className="list-disc list-inside text-investoria-muted space-y-2 ml-4">
                <li>Your account remains active</li>
                <li>Required by law or regulation (typically 7 years for financial records)</li>
                <li>Necessary for legitimate business purposes</li>
                <li>Needed to resolve disputes or enforce agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">6. Children's Privacy</h2>
              <p className="text-investoria-muted leading-relaxed">
                Investoria is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-investoria-muted leading-relaxed mb-4">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We will notify you of material changes through:
              </p>
              <ul className="list-disc list-inside text-investoria-muted space-y-2 ml-4">
                <li>Email notification to your registered address</li>
                <li>Prominent notice on our platform</li>
                <li>Push notification (if enabled)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">8. Contact Us</h2>
              <p className="text-investoria-muted leading-relaxed mb-4">
                For questions about this Privacy Policy or to exercise your privacy rights, contact us:
              </p>
              <div className="p-4 bg-green-800/30 rounded-lg">
                <p className="text-investoria-muted">
                  <strong className="text-gold-400">Investoria Privacy Team</strong><br />
                  Email: privacy@investoria.com<br />
                  Phone: 1-800-INVEST-1<br />
                  Address: [Company Address]
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gold-400/30 text-center">
            <div className="bg-green-400/10 p-4 rounded-lg border border-green-400/30">
              <p className="text-green-400 font-medium">
                <strong>Financial Privacy Notice:</strong> This Privacy Policy serves as our financial privacy notice under applicable banking and securities laws. We do not sell your personal financial information to third parties for their marketing purposes.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-investoria-muted/70 leading-relaxed">
              <strong>Regulatory Compliance:</strong> Investoria complies with applicable privacy laws including CCPA, GDPR, and financial privacy regulations. Investment services provided through FINRA-registered broker-dealers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
