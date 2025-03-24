import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'TaskFlow - Modern Task Management',
  description: 'Visualize your day with beautiful timelines and boost your productivity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-white antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Global Navigation */}
          <header className="border-b border-background-lighter/20 bg-background-darker/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <a href="/" className="text-xl font-bold text-white">TaskFlow</a>
                </div>
                
                <nav className="hidden md:flex space-x-6">
                  <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
                  <a href="/demo" className="text-sm font-medium hover:text-primary transition-colors">Demo</a>
                  <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
                  <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
                </nav>
                
                <div className="flex items-center space-x-4">
                  <a href="#" className="hidden md:block text-sm font-medium hover:text-primary transition-colors">Login</a>
                  <a href="#" className="btn-primary btn-sm">
                    Sign Up Free
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-background-darker border-t border-background-lighter/20 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Features</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Pricing</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Demo</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Roadmap</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Docs</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Support</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Community</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Press</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Licenses</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-background-lighter/20">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <span className="text-white font-medium">TaskFlow</span>
                </div>
                
                <div className="flex space-x-4">
                  {/* Social Media Icons */}
                  {['twitter', 'facebook', 'instagram', 'github'].map((platform) => (
                    <a 
                      key={platform}
                      href={`https://${platform}.com`} 
                      className="w-8 h-8 rounded-full bg-background-light flex items-center justify-center hover:bg-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{platform}</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  ))}
                </div>
                
                <div className="mt-4 md:mt-0 text-gray-400 text-sm">
                  © {new Date().getFullYear()} TaskFlow. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 