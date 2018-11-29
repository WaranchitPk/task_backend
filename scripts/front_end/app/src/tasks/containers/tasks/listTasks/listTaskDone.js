import React, { Component } from 'react';
import ListTaskDoneComponent from '../../../components/tasks/listTasks/listTaskDone';
import { connect } from 'react-redux';
import { getListTaskStatusDone } from '../../../actions/getTasks';

class ListTaskDone extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getListTaskStatusDone())
  }

  render() {
    const { tasksData } = this.props;
    return (
      <div>
        <ListTaskDoneComponent tasksData={tasksData}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    tasksData: state.getAllDataTaskStatusDoneReducer.data
  }
)
export default connect(mapStateToProps)(ListTaskDone);
