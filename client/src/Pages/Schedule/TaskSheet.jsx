import React from "react";

import Task from "../../Components/Task/Task";
import { connect } from "react-redux";

const TaskSheet = ({ weekDay, taskList }) => {
  console.log("TaskSheet Component");

  return (
    <>
      <h4 style={{textAlign:'right'}} > {weekDay} </h4>
      <div>
        {taskList.map((task) => (
          <Task task={task} key={task.id} dateString={weekDay} />
        ))}
      </div>
    </>
  );
};

export default connect(({ weekDay, tasks }) => ({
  weekDay,
  taskList: tasks[weekDay] ? tasks[weekDay].taskList : [],
}))(TaskSheet);
