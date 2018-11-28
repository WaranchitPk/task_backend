import React, { Component } from 'react';
import TaskComponent from '../components/task';
import { connect } from 'react-redux';
import { getListTask } from '../actions/getTasks';

class Task extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getListTask())
  }

  render() {
    const { tasksData } = this.props;
    return (
      <div>
        <TaskComponent tasksData={tasksData}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    tasksData: state.getAllDataTaskReducer.data
  }
)

export default connect(mapStateToProps)(Task);
