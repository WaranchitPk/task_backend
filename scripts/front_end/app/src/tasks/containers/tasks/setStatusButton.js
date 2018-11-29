import React, { Component } from 'react';
import SetStatusComponent from '../../components/tasks/setStatusButton';
import { updateStatusTask } from '../../actions/updateTasks';
import { getListTask, getListTaskStatusDone } from '../../actions/getTasks';
import { connect } from 'react-redux';

class SetStatusButton extends Component {
  state = {
    isOpenDialogConfirmStatus: false
  }
  handleOpenDialogConfirmStatus = () => {
    this.setState({
      isOpenDialogConfirmStatus: true
    })
  }
  handleCloseDialogConfirmStatus = () => {
    this.setState({
      isOpenDialogConfirmStatus: false
    })
  }
  handleSubmitConfirmStatus = (event) => {
    event.preventDefault()
    const { idTask, dispatch } = this.props;
    const statusTask = 'done'

    updateStatusTask(idTask, statusTask).then(_ => {
      this.setState({
        isOpenDialogConfirmStatus: false
      })
      dispatch(getListTask())
    })
  }

  render() {
    const { titleTask } = this.props;
    const { isOpenDialogConfirmStatus } = this.state;
    return (
      <div>
        <SetStatusComponent
          isOpenDialogConfirmStatus={isOpenDialogConfirmStatus}
          onOpenDialogConfirmStatus={this.handleOpenDialogConfirmStatus}
          onCloseDialogConfirmStatus={this.handleCloseDialogConfirmStatus}
          onSubmitFormConfirmStatus={this.handleSubmitConfirmStatus}
          titleTask={titleTask}/>
      </div>
    );
  }
}

export default connect()(SetStatusButton);
