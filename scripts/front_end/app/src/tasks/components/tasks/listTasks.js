import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';


import EditTaskContainer from '../../containers/tasks/editTaskButton';
import DeleteTaskContainer from '../../containers/tasks/deleteTaskButton';
import MoreTaskContainer from '../../containers/tasks/moreTaskByIdButton';
import SetStatusTaskContainer from '../../containers/tasks/setStatusButton';

const ListTasks = ({ tasksData }) => {
  return (
    <div>
      {
        tasksData && tasksData.data.map(result => (
          <Grid container={true} justify="center" key={result.id} id='spacingBetweenBox'>
            <Grid item={true} xs={10} sm={8} md={8} lg={8} xl={9}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {result.title}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {result.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <MoreTaskContainer idTask={result.id}/>
                  <EditTaskContainer idTask={result.id}/>
                  <DeleteTaskContainer idTask={result.id} titleTask={result.title}/>
                  <SetStatusTaskContainer idTask={result.id} titleTask={result.title}/>
                  <Typography variant="h5" component="h2" align={'right'} color={'textSecondary'}>Status
                    : {result.status}</Typography>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))
      }
      {/*<Typography color={'textSecondary'} variant={'h5'}>Task : Complete (done)</Typography>*/}
      {/*<Divider/>*/}
      {/*<Card>*/}
        {/*<CardContent>*/}
          {/*asfasf*/}
          {/*asdf*/}
        {/*</CardContent>*/}
      {/*</Card>*/}
    </div>
  );
};

export default ListTasks;
