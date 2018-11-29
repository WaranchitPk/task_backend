import React, { Component } from 'react';
import ListTaskPendingComponent from '../../../components/tasks/listTasks/listTaskPending';
import { connect } from 'react-redux';
import { getListTask } from '../../../actions/getTasks';

class ListTaskPending extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getListTask())
  }

  render() {
    const { tasksData } = this.props;
    return (
      <div>
        <ListTaskPendingComponent tasksData={tasksData}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    tasksData: state.getAllDataTaskReducer.data
  }
)
export default connect(mapStateToProps)(ListTaskPending);
