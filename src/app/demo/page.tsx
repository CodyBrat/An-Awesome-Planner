import Link from 'next/link';
import TaskTimeline from '../../components/TaskTimeline';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-dark via-background to-background-dark relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="blur-circle top-0 left-1/4 w-96 h-96 from-primary/10"></div>
      <div className="blur-circle bottom-0 right-1/4 w-96 h-96 from-secondary/10"></div>
      
      {/* Header with nav tabs */}
      <header className="border-b border-white/5 bg-background-darker/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h1 className="text-xl font-bold text-white">TaskFlow</h1>
            </div>
            
            {/* Navbar buttons */}
            <div className="flex items-center space-x-1">
              <button className="btn btn-glass btn-sm">Dashboard</button>
              <button className="btn btn-glass btn-sm">Tasks</button>
              <button className="btn btn-glass btn-sm">Calendar</button>
              <button className="btn btn-glass btn-sm">Projects</button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="btn-outline btn-sm hidden md:flex">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                New Task
              </button>
              <div className="w-8 h-8 rounded-full glassmorphism-light flex items-center justify-center text-white">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Page header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 text-gradient bg-gradient-to-r from-primary to-secondary">Your Task Timeline</h1>
              <p className="text-gray-400 glassmorphism-dark inline-block px-3 py-1 rounded-full text-sm">Monday, August 14, 2023</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="glassmorphism-dark p-1 rounded-md">
                <button className="px-3 py-1.5 rounded text-sm font-medium text-white bg-primary bg-glass-shine">Day</button>
                <button className="px-3 py-1.5 rounded text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5">Week</button>
                <button className="px-3 py-1.5 rounded text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5">Month</button>
              </div>
              
              <button className="btn-icon glassmorphism-light hover:bg-white/5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Tasks summary */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Tasks', value: '8', icon: '��', color: 'primary' },
              { label: 'Completed', value: '3', icon: '✅', color: 'secondary' },
              { label: 'In Progress', value: '5', icon: '⏳', color: 'task-work' },
              { label: 'Total Hours', value: '8.75', icon: '⏱️', color: 'accent' },
            ].map((stat, index) => (
              <div key={index} className="glassmorphism hover:shadow-glass-intense transition-all duration-300 p-4 group">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg bg-${stat.color}/10 flex items-center justify-center text-xl group-hover:bg-${stat.color}/20 transition-colors`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Timeline */}
          <div className="glassmorphism p-6 md:p-8 shadow-glassmorphism">
            <TaskTimeline />
          </div>
          
          {/* User profile */}
          <div className="flex items-center gap-2">
            <button className="btn btn-primary btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span>3</span>
            </button>
            <button className="btn btn-glass">
              <span className="text-sm font-medium">John Doe</span>
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-white">JD</div>
            </button>
          </div>
          
          {/* Task summary actions */}
          <div className="flex justify-end mt-4">
            <button className="btn btn-outline btn-secondary btn-sm mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              Filter
            </button>
            <button className="btn btn-outline btn-accent btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>
              Sort
            </button>
          </div>
          
          {/* Floating action button */}
          <button className="fixed bottom-6 right-6 btn btn-primary btn-lg rounded-full w-14 h-14 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
} 