import React, { PureComponent } from 'react';
import ListTasksComponent from '../../components/tasks/listTasks';

class ListTasks extends PureComponent {
  render() {

    return (
      <div>
        <ListTasksComponent />
      </div>
    );
  }
}

export default ListTasks;
