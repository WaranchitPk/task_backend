import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider'
import MoreTaskContainer from '../../../containers/tasks/moreTaskByIdButton';
import EditTaskContainer from '../../../containers/tasks/editTaskButton';
import DeleteTaskContainer from '../../../containers/tasks/deleteTaskButton';
import SetStatusTaskContainer from '../../../containers/tasks/setStatusButton';
import '../../../styles/body.css';


const ListTaskPending = ({
                           tasksData
                         }) => {
  return (
    <div>
      <Grid container={true} justify={'center'}>
        <Grid item={true} xs={11} sm={11} md={11} lg={11} xl={11}>
          <Typography color={'textSecondary'} variant={'h5'}>Task : Working (pending)</Typography>
          <Divider id="styleDivider"/>
        </Grid>
      </Grid>
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
    </div>
  );
};

export default ListTaskPending;
