import React, { useContext } from "react";

import { TaskContext } from "../../Context/TaskProvider";
import { WeekContext } from "./Schedule";
import Task from "../../Components/Task/Task";
export default () => {
  const { tasks } = useContext(TaskContext);

  const { weekDay } = useContext(WeekContext);

  const taskList = tasks[weekDay] ? tasks[weekDay].taskList : [];

  return (
    <>
      <div> TaskList </div>
      <div>
        {taskList.map((task) => (
          <Task task={task.task} key={task.id} dateString={weekDay} />
        ))}
      </div>
    </>
  );
};
