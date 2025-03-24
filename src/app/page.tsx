import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background-dark to-background">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-full h-full bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-secondary/10 via-transparent to-transparent"></div>
        <div className="blur-circle top-40 left-10 w-80 h-80 from-primary/20 animate-glow-pulse"></div>
        <div className="blur-circle bottom-40 right-10 w-80 h-80 from-secondary/20 animate-glow-pulse"></div>
        
        <div className="container px-4 mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full glassmorphism text-primary text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Introducing TaskFlow
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Plan your day with <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent">precision</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                TaskFlow helps you organize your daily routine, track your productivity, and achieve your goals with a beautiful timeline experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/demo" className="btn btn-primary btn-lg">
                  Try Demo
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <button className="btn btn-outline btn-lg">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Video
                </button>
              </div>
              
              <div className="flex items-center space-x-4 mt-8 text-gray-400 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full glassmorphism border border-white/10 flex items-center justify-center text-xs font-medium text-white">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="glassmorphism-dark px-3 py-1 rounded-full">
                  <span className="text-white font-medium">500+</span> happy users
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="glassmorphism relative z-10 shadow-glassmorphism rounded-xl overflow-hidden border border-white/5 floating">
                <div className="flex items-center justify-between bg-background-darker/70 p-2 border-b border-white/5">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-xs text-gray-400">TaskFlow Planner</div>
                  <div className="w-12"></div>
                </div>
                <div className="p-6">
                  <div className="animate-pulse-subtle">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-lg font-medium text-white">Today's Schedule</div>
                      <div className="text-xs glassmorphism-light text-primary px-2 py-1 rounded-full">
                        75% Completed
                      </div>
                    </div>
                    
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center mb-4 gap-3">
                        <div className={`h-10 w-1 rounded-full ${
                          i === 1 ? 'bg-task-workout' : 
                          i === 2 ? 'bg-task-meeting' : 'bg-task-work'
                        }`}></div>
                        <div className="glassmorphism-dark p-3 rounded-md flex-1">
                          <div className="flex justify-between">
                            <div className="text-white">Task #{i}</div>
                            <div className="text-xs text-gray-400">30 min</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-md opacity-5"></div>
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white mb-4">
              Powerful Features
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Everything you need to <span className="text-primary">stay organized</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/70">
              TaskFlow combines powerful planning tools with an intuitive interface to help you manage your time effectively.
            </p>
            
            {/* Feature buttons */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              <button className="btn btn-secondary btn-sm">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                New Task
              </button>
              <button className="btn btn-accent btn-sm">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share
              </button>
              <button className="btn btn-glass btn-sm">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Export
              </button>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature card 1 */}
            <div className="bg-glass-gradient backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-glass hover:shadow-glass-intense transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Time Management</h3>
              <p className="text-white/70 mb-4">
                Visualize your day with our intuitive timeline interface. See at a glance how your day is structured.
              </p>
              <button className="btn btn-ghost btn-sm text-primary">
                Learn more
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Feature card 2 */}
            <div className="bg-glass-gradient backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-glass hover:shadow-glass-intense transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Task Organization</h3>
              <p className="text-white/70 mb-4">
                Create, categorize and prioritize tasks. Color-code by category for a visual overview of your activities.
              </p>
              <button className="btn btn-ghost btn-sm text-secondary">
                Learn more
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Feature card 3 */}
            <div className="bg-glass-gradient backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-glass hover:shadow-glass-intense transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Analytics</h3>
              <p className="text-white/70 mb-4">
                Track your productivity patterns and gain insights into how you spend your time with detailed analytics.
              </p>
              <button className="btn btn-ghost btn-sm text-accent">
                Learn more
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background to-background-dark opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern bg-grid-md opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/20 filter blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm border border-primary/20 mb-4">
              Ready to get started?
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Transform how you <span className="text-primary">manage your time</span> today
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Join thousands of users who are already optimizing their daily routines with TaskFlow.
              Start your journey to better time management now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/demo" className="btn btn-primary btn-lg">
                Try for Free
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <button className="btn btn-glass btn-lg">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background-darker border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-white">TaskFlow</span>
              <p className="text-white/50 text-sm mt-1">© 2023 TaskFlow. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <button className="btn btn-ghost btn-sm text-white/70 hover:text-white">Privacy</button>
              <button className="btn btn-ghost btn-sm text-white/70 hover:text-white">Terms</button>
              <button className="btn btn-ghost btn-sm text-white/70 hover:text-white">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 