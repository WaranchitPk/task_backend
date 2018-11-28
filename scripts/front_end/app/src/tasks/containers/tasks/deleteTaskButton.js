import React, { Component } from 'react';
import DeleteTaskComponent from '../../components/tasks/deleteTaskButton';
import deleteTaskAction from '../../actions/deleteTask';
import { getListTask } from '../../actions/getTasks';
import { connect } from 'react-redux';

class DeleteTaskButton extends Component {
  state = {
    isOpenDialogDelete: false
  }
  handleOpenDialogDeleteTask = () => {
    this.setState({
      isOpenDialogDelete: true
    })
  }
  handleCloseDialogDeleteTask = () => {
    this.setState({
      isOpenDialogDelete: false
    })
  }
  handleSubmitInformDelete = (event) => {
    event.preventDefault()
    const { idTask, dispatch } = this.props;
    deleteTaskAction(idTask).then(_ => {
      this.setState({
        isOpenDialogDelete: false
      })
      dispatch(getListTask())
    })
  }

  render() {
    const { isOpenDialogDelete } = this.state
    const { titleTask } = this.props;
    return (
      <div>
        <DeleteTaskComponent
          isOpenDialogDelete={isOpenDialogDelete}
          onOpenDialogDelete={this.handleOpenDialogDeleteTask}
          onCloseDialogDelete={this.handleCloseDialogDeleteTask}
          onSubmitFormDelete={this.handleSubmitInformDelete}
          titleTask={titleTask}/>
      </div>
    );
  }
}

export default connect()(DeleteTaskButton);
