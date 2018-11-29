import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'

import ListTaskPendingContainer from '../../containers/tasks/listTasks/listTaskPending';
import ListTaskDoneContainer from '../../containers/tasks/listTasks/listTaskDone';

const ListTasks = () => {
  return (
    <div>
      <ListTaskPendingContainer/>
      <ListTaskDoneContainer/>

    </div>
  );
};

export default ListTasks;
