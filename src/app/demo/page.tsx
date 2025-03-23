import Link from 'next/link';
import TaskTimeline from '../../components/TaskTimeline';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-primary">TaskFlow</Link>
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

      {/* Demo Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Interactive Demo</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of TaskFlow's visual timeline. This demo shows how you can manage your day with our intuitive interface.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="card sticky top-6">
              <h2 className="text-2xl font-bold text-white mb-4">Demo Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-medium">Visual Timeline</span>
                    <p className="text-gray-400 text-sm mt-1">
                      See your day laid out chronologically with color-coded tasks
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-medium">Task Completion</span>
                    <p className="text-gray-400 text-sm mt-1">
                      Mark tasks as complete and see them visually crossed out
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-medium">Duration Tracking</span>
                    <p className="text-gray-400 text-sm mt-1">
                      See how much time each task takes and track your productivity
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-medium">Categorization</span>
                    <p className="text-gray-400 text-sm mt-1">
                      Organize tasks by category with color-coding for quick visual reference
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <Link href="/signup" className="btn btn-primary w-full text-center">
                  Try It Yourself
                </Link>
                <p className="text-gray-400 text-sm text-center mt-4">
                  No credit card required to start
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-background-light p-6">
              <div className="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
                <h2 className="text-2xl font-bold text-white">Your Day at a Glance</h2>
                <div className="text-gray-400">Monday, May 22</div>
              </div>
              
              <TaskTimeline />
              
              <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between items-center">
                <div className="text-gray-400">
                  <div className="text-sm">Total tasks: 8</div>
                  <div className="text-sm">Completed: 3</div>
                </div>
                <button className="btn btn-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Task
                </button>
              </div>
            </div>
            
            <div className="mt-8 rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-background-light p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Other Views</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card hover:bg-background-lighter transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-white">Weekly Calendar</h3>
                  <p className="mt-2 text-gray-300">
                    Get a broader view of your upcoming tasks and schedule
                  </p>
                </div>
                <div className="card hover:bg-background-lighter transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-white">Focus Mode</h3>
                  <p className="mt-2 text-gray-300">
                    Eliminate distractions and focus on your current task
                  </p>
                </div>
                <div className="card hover:bg-background-lighter transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-white">Analytics</h3>
                  <p className="mt-2 text-gray-300">
                    Track your productivity and time usage patterns
                  </p>
                </div>
                <div className="card hover:bg-background-lighter transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-white">Team View</h3>
                  <p className="mt-2 text-gray-300">
                    Coordinate schedules with your team members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-primary py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to take control of your time?</h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
              Sign up now and get 14 days of premium features absolutely free.
            </p>
            <div className="mt-8">
              <Link href="/signup" className="btn bg-white text-primary hover:bg-gray-100 text-center px-8 py-3">
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background-light border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-xl font-bold text-primary">TaskFlow</Link>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2023 TaskFlow. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <span className="mx-2 text-gray-600">|</span>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 