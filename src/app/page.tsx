import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary">TaskFlow</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
              <Link href="/signup" className="btn btn-primary">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Your day at a glance
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Easily view your scheduled time blocks in a clean and efficient timeline format.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="btn btn-primary text-center px-8 py-3">
                Get Started — It&apos;s Free
              </Link>
              <Link href="/demo" className="btn bg-background-lighter hover:bg-background-light text-center px-8 py-3">
                View Demo
              </Link>
            </div>
            <div className="mt-8 text-gray-400">
              <p>✓ No credit card required</p>
              <p>✓ Cancel anytime</p>
              <p>✓ 14-day free trial on premium features</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="relative aspect-[9/16] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-background-light to-background flex flex-col">
                <div className="p-6 flex-1">
                  <h2 className="text-3xl font-bold text-white">Your day at a glance</h2>
                  <p className="mt-2 text-gray-300">
                    Easily view your scheduled time blocks in a clean and efficient timeline format.
                  </p>
                  
                  {/* Timeline visualization */}
                  <div className="mt-12 relative">
                    <div className="absolute top-0 bottom-0 left-10 w-0.5 bg-gray-700"></div>
                    
                    {/* Time markers */}
                    <div className="relative pl-16 mb-16">
                      <div className="absolute left-8 -translate-x-1/2 w-5 h-5 rounded-full bg-gray-200"></div>
                      <div className="absolute left-0 text-gray-400">08</div>
                      
                      {/* Task: Morning workout */}
                      <div className="mb-6">
                        <div className="flex items-center">
                          <div className="h-16 w-3 bg-task-workout rounded-l-md"></div>
                          <div className="bg-background-lighter rounded-r-md p-3 flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-white line-through">Morning Workout</div>
                                <div className="text-sm text-gray-400">07:45 - 08:15 (30 min)</div>
                              </div>
                              <div className="h-5 w-5 rounded bg-task-workout flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Task: Shower */}
                      <div className="mb-6">
                        <div className="flex items-center">
                          <div className="h-16 w-3 bg-task-shower rounded-l-md"></div>
                          <div className="bg-background-lighter rounded-r-md p-3 flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-white">Shower</div>
                                <div className="text-sm text-gray-400">08:15 - 08:30 (15 min)</div>
                              </div>
                              <div className="h-5 w-5 rounded border border-task-shower"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Time markers */}
                    <div className="relative pl-16">
                      <div className="absolute left-0 text-gray-400">09</div>
                      
                      {/* Task: Breakfast */}
                      <div className="mb-6">
                        <div className="flex items-center">
                          <div className="h-16 w-3 bg-task-meal rounded-l-md"></div>
                          <div className="bg-background-lighter rounded-r-md p-3 flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-white">Breakfast</div>
                                <div className="text-sm text-gray-400">08:30 - 09:00 (30 min)</div>
                              </div>
                              <div className="h-5 w-5 rounded border border-task-meal"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Task: Check Email */}
                      <div className="mb-6">
                        <div className="flex items-center">
                          <div className="h-16 w-3 bg-task-email rounded-l-md"></div>
                          <div className="bg-background-lighter rounded-r-md p-3 flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-white">Check Email</div>
                                <div className="text-sm text-gray-400">09:00 - 09:15 (15 min)</div>
                              </div>
                              <div className="h-5 w-5 rounded border border-task-email"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-background-light border-t border-gray-800">
                  <div className="text-sm text-gray-400">End of day: 14 hrs, 44 min, 59 secs</div>
                  <button className="mt-3 w-full btn btn-primary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Create event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background-light py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Features that empower your productivity</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              TaskFlow is designed to help you visualize your time and accomplish more with less stress.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Visual Timeline</h3>
              <p className="mt-2 text-gray-300">
                See your entire day laid out in a beautiful, intuitive timeline that shows you exactly what&apos;s next.
              </p>
            </div>

            <div className="card">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Task Management</h3>
              <p className="mt-2 text-gray-300">
                Create, edit, and organize tasks with ease. Categorize by color and track completion status.
              </p>
            </div>

            <div className="card">
              <div className="h-12 w-12 rounded-full bg-task-work/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-task-work" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Smart Reminders</h3>
              <p className="mt-2 text-gray-300">
                Get notified when it&apos;s time to start your next task, so you never miss an important deadline.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="bg-background-lighter rounded-xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to streamline your day?</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of users who have transformed their productivity with TaskFlow.
            </p>
            <div className="mt-8">
              <Link href="/signup" className="btn btn-primary text-center px-8 py-3">
                Get Started For Free
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background-light border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white">TaskFlow</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="/guides" className="text-gray-400 hover:text-white">Guides</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white">Cookies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</Link></li>
                <li><Link href="https://linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2023 TaskFlow. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 