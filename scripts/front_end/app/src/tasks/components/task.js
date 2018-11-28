import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../styles/body.css';

import ListTaskContainer from '../containers/tasks/listTasks'
import ButtonAddTask from '../containers/tasks/addTaskButton';

const Task = ({ tasksData }) => {
  return (
    <div>
      <Typography align="center" color="textSecondary" variant="h2" id='titleTodoList'>To-Do List</Typography>
      <Grid container={true} justify="center">
        <Grid item={true} xs={10} sm={8} md={8} lg={8} xl={9}>
          <ButtonAddTask/>
        </Grid>
      </Grid>
      <ListTaskContainer tasksData={tasksData}/>
    </div>
  );
};

export default Task;

