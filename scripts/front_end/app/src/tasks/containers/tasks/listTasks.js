import React, { PureComponent } from 'react';
import ListTasksComponent from '../../components/tasks/listTasks';

class ListTasks extends PureComponent {
  render() {
    const { tasksData } = this.props;

    return (
      <div>
        <ListTasksComponent tasksData={tasksData}/>
      </div>
    );
  }
}

export default ListTasks;
