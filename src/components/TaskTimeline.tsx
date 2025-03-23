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
    },
    {
      id: '4',
      title: 'Check Email',
      startTime: '09:00',
      endTime: '09:15',
      duration: '15 min',
      category: 'email',
      completed: false,
    },
    {
      id: '5',
      title: 'Team Meeting',
      startTime: '09:30',
      endTime: '10:30',
      duration: '60 min',
      category: 'meeting',
      completed: false,
    },
    {
      id: '6',
      title: 'Project Work',
      startTime: '10:45',
      endTime: '12:30',
      duration: '105 min',
      category: 'work',
      completed: false,
    },
    {
      id: '7',
      title: 'Lunch Break',
      startTime: '12:30',
      endTime: '13:15',
      duration: '45 min',
      category: 'meal',
      completed: true,
    },
    {
      id: '8',
      title: 'Afternoon Tasks',
      startTime: '13:30',
      endTime: '16:30',
      duration: '180 min',
      category: 'work',
      completed: true,
    },
  ]);

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed } 
        : task
    ));
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
      {/* Vertical timeline line */}
      <div className="absolute top-0 bottom-0 left-10 w-0.5 bg-gray-700"></div>
      
      {timelineData.map(({ hour, tasks }) => (
        <div key={hour} className="relative mb-12">
          {/* Hour marker */}
          <div className="absolute left-8 -translate-x-1/2 w-5 h-5 rounded-full bg-gray-500"></div>
          <div className="absolute left-0 text-gray-400 text-sm font-medium">{hour.padStart(2, '0')}</div>
          
          {/* Tasks for this hour */}
          <div className="pl-16 space-y-6">
            {tasks.map(task => (
              <div key={task.id} className="group">
                <div className="flex items-center">
                  <div 
                    className={`h-16 w-3 rounded-l-md bg-task-${task.category}`}
                  ></div>
                  <div 
                    className="bg-background-lighter rounded-r-md p-3 flex-1 transition-colors group-hover:bg-background-light cursor-pointer"
                    onClick={() => toggleTaskCompletion(task.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-white ${task.completed ? 'line-through' : ''}`}>
                          {task.title}
                        </div>
                        <div className="text-sm text-gray-400">
                          {task.startTime} - {task.endTime} ({task.duration})
                        </div>
                      </div>
                      <div 
                        className={`h-5 w-5 rounded ${
                          task.completed 
                            ? `bg-task-${task.category} flex items-center justify-center` 
                            : `border border-task-${task.category}`
                        }`}
                      >
                        {task.completed && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Task details on hover - could expand to show more info */}
                <div className="hidden group-hover:block mt-2 pl-6 text-sm text-gray-400">
                  Click to mark as {task.completed ? 'incomplete' : 'complete'}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Show end of timeline */}
      <div className="relative">
        <div className="absolute left-8 -translate-x-1/2 w-5 h-5 rounded-full bg-gray-700"></div>
        <div className="pl-16 text-gray-400 text-sm">End of day</div>
      </div>
    </div>
  );
} 