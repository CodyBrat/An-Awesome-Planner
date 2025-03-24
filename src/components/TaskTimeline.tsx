'use client';

import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  duration: string;
  category: 'workout' | 'shower' | 'meal' | 'work' | 'email' | 'meeting' | 'personal';
  completed: boolean;
  description?: string;
}

export default function TaskTimeline() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Morning Workout',
      startTime: '07:45',
      endTime: '08:15',
      duration: '30 min',
      category: 'workout',
      completed: true,
      description: 'High-intensity cardio and stretching routine',
    },
    {
      id: '2',
      title: 'Shower',
      startTime: '08:15',
      endTime: '08:30',
      duration: '15 min',
      category: 'shower',
      completed: false,
    },
    {
      id: '3',
      title: 'Breakfast',
      startTime: '08:30',
      endTime: '09:00',
      duration: '30 min',
      category: 'meal',
      completed: false,
      description: 'Protein-rich breakfast and coffee',
    },
    {
      id: '4',
      title: 'Check Email',
      startTime: '09:00',
      endTime: '09:15',
      duration: '15 min',
      category: 'email',
      completed: false,
      description: 'Review and respond to priority messages',
    },
    {
      id: '5',
      title: 'Team Meeting',
      startTime: '09:30',
      endTime: '10:30',
      duration: '60 min',
      category: 'meeting',
      completed: false,
      description: 'Weekly sprint planning with design and development team',
    },
    {
      id: '6',
      title: 'Project Work',
      startTime: '10:45',
      endTime: '12:30',
      duration: '105 min',
      category: 'work',
      completed: false,
      description: 'Focus session on new feature implementation',
    },
    {
      id: '7',
      title: 'Lunch Break',
      startTime: '12:30',
      endTime: '13:15',
      duration: '45 min',
      category: 'meal',
      completed: true,
      description: 'Lunch and short walk outside',
    },
    {
      id: '8',
      title: 'Afternoon Tasks',
      startTime: '13:30',
      endTime: '16:30',
      duration: '180 min',
      category: 'work',
      completed: true,
      description: 'Code review, documentation, and team catch-up',
    },
  ]);

  const [expandedTask, setExpandedTask] = useState<string | null>(null);

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  const toggleTaskExpand = (taskId: string) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  // Group tasks by hour for the timeline display
  const groupTasksByHour = () => {
    const hours: Record<string, Task[]> = {};
    
    tasks.forEach(task => {
      const hour = task.startTime.split(':')[0];
      if (!hours[hour]) {
        hours[hour] = [];
      }
      hours[hour].push(task);
    });
    
    return Object.entries(hours)
      .sort(([hourA], [hourB]) => parseInt(hourA) - parseInt(hourB))
      .map(([hour, hourTasks]) => ({
        hour,
        tasks: hourTasks.sort((a, b) => 
          a.startTime.localeCompare(b.startTime)
        )
      }));
  };

  const timelineData = groupTasksByHour();

  return (
    <div className="relative">
      {/* Timeline decoration elements */}
      <div className="blur-circle -top-20 -left-20 w-64 h-64 from-primary/20"></div>
      <div className="blur-circle -bottom-20 -right-20 w-64 h-64 from-secondary/20"></div>
      
      {/* Vertical timeline line */}
      <div className="timeline-bar before:absolute before:top-0 before:h-8 before:w-0.5 before:-translate-y-full before:bg-gradient-to-b before:from-transparent before:to-background-lighter"></div>
      
      {timelineData.map(({ hour, tasks }) => (
        <div key={hour} className="relative mb-14">
          {/* Hour marker */}
          <div className="timeline-dot z-10 shadow-glow"></div>
          <div className="absolute left-0 text-gray-400 text-sm font-medium bg-background/40 backdrop-blur-sm px-2 py-0.5 rounded-full">{hour.padStart(2, '0')}</div>
          
          {/* Tasks for this hour */}
          <div className="pl-16 space-y-4">
            {tasks.map(task => (
              <div 
                key={task.id} 
                className={`group transition-all duration-300 ease-in-out ${expandedTask === task.id ? 'scale-102' : ''}`}
              >
                <div 
                  className="flex items-center"
                  onClick={() => toggleTaskExpand(task.id)}
                >
                  <div className="relative">
                    <div 
                      className={`h-14 w-1.5 rounded-l-lg bg-task-${task.category}`}
                      style={{
                        boxShadow: `0 0 10px rgba(var(--task-${task.category}-rgb), 0.4)`,
                      }}
                    ></div>
                    <div 
                      className={`absolute top-0 left-0 h-14 w-1.5 rounded-l-lg bg-task-${task.category} opacity-50 blur-sm`}
                    ></div>
                  </div>
                  <div 
                    className={`timeline-card flex-1 cursor-pointer group-hover:shadow-lg ${
                      expandedTask === task.id ? 'border-task-' + task.category + '/40' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-white font-medium ${task.completed ? 'line-through text-white/70' : ''}`}>
                          {task.title}
                        </div>
                        <div className="text-sm text-gray-400 mt-0.5 flex items-center">
                          <svg className="w-3.5 h-3.5 mr-1.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {task.startTime} - {task.endTime} <span className="px-1.5 py-0.5 ml-1.5 text-xs rounded-full bg-background-lighter/40 backdrop-blur-sm">{task.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTaskCompletion(task.id);
                          }}
                          className={`h-5 w-5 rounded transition-all duration-200 flex items-center justify-center 
                            ${task.completed 
                              ? `bg-task-${task.category} text-white shadow-sm` 
                              : `border border-task-${task.category} text-transparent hover:bg-task-${task.category}/10`
                            }`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTaskExpand(task.id);
                          }}
                          className="h-5 w-5 text-gray-400 hover:text-white transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${expandedTask === task.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Expanded task details */}
                    {expandedTask === task.id && task.description && (
                      <div className="mt-3 pt-3 border-t border-white/5 text-sm text-gray-300 animate-fadeIn">
                        <p>{task.description}</p>
                        <div className="mt-3 flex space-x-2">
                          <button className="glassmorphism-light px-2 py-1 text-xs rounded hover:bg-task-work/20 text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 inline" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                            Edit
                          </button>
                          <button className="glassmorphism-light px-2 py-1 text-xs rounded hover:bg-accent/20 text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 inline" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Show end of timeline */}
      <div className="relative">
        <div className="timeline-dot z-10 bg-task-work shadow-sm"></div>
        <div className="pl-16 text-gray-400 text-sm glassmorphism-dark inline-block px-3 py-1 rounded-full">End of day</div>
      </div>
    </div>
  );
} 