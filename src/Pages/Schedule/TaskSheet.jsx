import React, { useContext } from "react";

import { TaskContext } from "../../Context/TaskProvider";
import { WeekContext } from "./Schedule";
import Task from "../../Components/Task/Task";
export default () => {
  const { tasks } = useContext(TaskContext);

  const { weekDay } = useContext(WeekContext);

  const taskList = tasks[weekDay] ? tasks[weekDay].taskList : [];

  console.log("TaskSheet Component");
  
  return (
    <>
      <h4> {weekDay} </h4>
      <div>
        {taskList.map((task) => (
          <Task task={task.task} key={task.id} dateString={weekDay} />
        ))}
      </div>
    </>
  );
};