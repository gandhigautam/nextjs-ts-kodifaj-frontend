import React, { useState } from 'react';
import TabButton from './tabButton/TabButton';
import UserTasks from './userTasks/UserTasks';
import { Task } from '../../../models/task/task.types';

interface UserDetailsProps {
  id: string;
  solutions?: string[];
  tasks?: Task[];
}

const UserDetails: React.FC<UserDetailsProps> = ({ id, solutions, tasks }) => {
  const [activeTab, setActiveTab] = useState<'Tasks' | 'Solutions'>('Tasks');

  return (
    <div>
      <div className="bg-white w-full px-4">
        <div className="max-w-8xl mx-auto h-full">
          <div className="flex justify-between">
            <div className="w-full md:w-2/3">
              <TabButton label="Tasks" setActiveTab={setActiveTab} activeTab={activeTab} />
              <TabButton label="Solutions" setActiveTab={setActiveTab} activeTab={activeTab} />
            </div>
            <div className="hidden md:block md:w-1/3">
              <h3 className="font-bold">Dotychczasowa aktywność</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 pt-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            {activeTab === 'Tasks' ? <UserTasks tasks={tasks} /> : <p>Solutions</p>}
          </div>
          <h3 className="font-bold text-center md:hidden">Dotychczasowa aktywność</h3>
          <div className="w-full md:w-1/3">33%</div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
