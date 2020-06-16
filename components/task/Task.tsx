import React from 'react';
import { Hero } from './hero/Hero';
import TaskDetails from './details/Details';
import Header from '../header/Header';
import { Task } from 'lib/models/task/Task';

interface TaskProps {
  task: Task;
}

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  const { title, _user, createdAt, tags, images, content, _id, _solutions } = task;
  return (
    <>
      <Header />
      <Hero title={title} author={_user} creationTime={createdAt} tags={tags} />
      <TaskDetails images={images} content={content} taskId={_id} solutions={_solutions} />
    </>
  );
};

export default TaskComponent;
