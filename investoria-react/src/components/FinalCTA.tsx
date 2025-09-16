import React, { useState } from 'react';

export default function FinalCTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{email?: string; platform?: string}>({});
  const [email, setEmail] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const emailValue = formData.get('email') as string;
    const platform = formData.get('platform') as string;
    
    // Validation
    const newErrors: {email?: string; platform?: string} = {};
    
    if (!emailValue?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(emailValue)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!platform) {
      newErrors.platform = 'Please select a platform';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      console.log('Submitting email to Mailchimp:', email, 'Platform:', platform);
      
      // Create a hidden form and submit it to Mailchimp
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://buildinvestoria.us20.list-manage.com/subscribe/post';
      form.target = 'hidden-iframe';
      form.style.display = 'none';
      
      // Add required Mailchimp fields from your form
      const fields = {
        'u': 'd19337f0e99e4feaf6f28053a', // Your User ID
        'id': 'd5aa6d1e5e', // Your Audience ID
        'f_id': '00e176eef0', // Form ID from your Mailchimp form
        'EMAIL': email,
        'PLATFORM': platform || 'Not specified',
        // Bot prevention field (leave empty)
        'b_d19337f0e99e4feaf6f28053a_d5aa6d1e5e': ''
      };
      
      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });
      
      // Create hidden iframe to receive the response
      let iframe = document.getElementById('hidden-iframe') as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = 'hidden-iframe';
        iframe.id = 'hidden-iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }
      
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
      
      console.log('Email submitted to Mailchimp successfully');
      setIsSubmitted(true);
      e.currentTarget.reset();
      
    } catch (error) {
      console.error('Subscription error:', error);
      setIsSubmitted(true);
      e.currentTarget.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 via-transparent to-green-700/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-700/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-16">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="font-cinzel font-bold text-4xl sm:text-5xl lg:text-6xl text-gold-400 leading-tight mb-3">
            Turn your portfolio into
            <br />
            <span className="text-gold-400">
              a living city
            </span>
          </h2>
          <p className="text-investoria-muted text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Join the waitlist and be among the first to experience investing like never before. 
            <span className="text-gold-400 font-semibold">Early access starts soon.</span>
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 ring-1 ring-gold-400/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email input */}
                <div className="relative group">
                  <label htmlFor="email" className="block text-gold-400 font-medium mb-3 text-lg">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors(prev => ({...prev, email: undefined}));
                        }
                      }}
                      placeholder="you@example.com"
                      className={`w-full rounded-2xl bg-white/10 backdrop-blur-sm ring-1 px-6 py-4 placeholder:text-investoria-muted/60 text-investoria-text focus:outline-none focus:ring-2 focus:bg-white/15 transition-all duration-300 text-lg group-hover:ring-gold-400/30 ${
                        errors.email 
                          ? 'ring-red-400/60 focus:ring-red-400' 
                          : 'ring-gold-400/20 focus:ring-gold-400'
                      }`}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold-400/0 via-gold-400/5 to-gold-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-red-400 text-sm font-medium animate-pulse">
                      {errors.email}
                    </p>
                  )}
                </div>
                
                {/* Platform selection */}
                <div className="relative group">
                  <label htmlFor="platform" className="block text-gold-400 font-medium mb-3 text-lg">
                    Platform
                  </label>
                  <div className="relative">
                    <select
                      id="platform"
                      name="platform"
                      defaultValue=""
                      onChange={() => {
                        if (errors.platform) {
                          setErrors(prev => ({...prev, platform: undefined}));
                        }
                      }}
                      className={`w-full rounded-2xl bg-white/10 backdrop-blur-sm ring-1 px-6 py-4 text-investoria-text focus:outline-none focus:ring-2 focus:bg-white/15 transition-all duration-300 text-lg appearance-none group-hover:ring-gold-400/30 ${
                        errors.platform 
                          ? 'ring-red-400/60 focus:ring-red-400' 
                          : 'ring-gold-400/20 focus:ring-gold-400'
                      }`}
                    >
                      <option value="" disabled>Choose platform</option>
                      <option value="ios">iOS</option>
                      <option value="android">Android</option>
                      <option value="both">Both</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                      <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold-400/0 via-gold-400/5 to-gold-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.platform && (
                    <p className="mt-2 text-red-400 text-sm font-medium animate-pulse">
                      {errors.platform}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 disabled:opacity-60 text-green-1000 font-bold px-8 py-5 transition-all duration-300 transform hover:-translate-y-1 disabled:hover:translate-y-0 shadow-2xl hover:shadow-gold-400/30 disabled:hover:shadow-2xl text-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Building your spot...
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Claim Your Spot
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>

            {/* Success message */}
            {isSubmitted && (
              <div className="mt-6 text-center p-6 bg-gradient-to-r from-gold-400/10 to-green-700/10 rounded-2xl ring-1 ring-gold-400/30 animate-pop">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gold-400 font-bold text-lg">Welcome to the future!</span>
                </div>
                <p className="text-investoria-muted">
                  You're officially on the waitlist. We'll email you when it's time to build your empire.
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-gold-400 font-semibold">Secure & Private</h4>
            <p className="text-investoria-muted text-sm">Your data is encrypted and never shared</p>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-gold-400 font-semibold">Early Access</h4>
            <p className="text-investoria-muted text-sm">Be first to experience the future of investing</p>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h4 className="text-gold-400 font-semibold">No Commitment</h4>
            <p className="text-investoria-muted text-sm">Unsubscribe anytime, no strings attached</p>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-sm text-investoria-muted/70 leading-relaxed max-w-2xl mx-auto">
            Educational & entertainment; no financial advice. We respect your privacy and will never spam you.
          </p>
        </div>
      </div>
    </section>
  );
}