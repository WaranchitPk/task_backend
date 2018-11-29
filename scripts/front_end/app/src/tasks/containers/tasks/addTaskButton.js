import React, { Component } from 'react';
import AddTaskComponent from '../../components/tasks/addTaskButton';
import insertTask from '../../actions/insertTasks';
import { getListTask } from '../../actions/getTasks';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class AddTaskButton extends Component {
  state = {
    isOpenDialogAddTask: false,
    subject: '',
    desc: ''
  }

  handleOpenDialogAddTask = () => {
    this.setState({
      isOpenDialogAddTask: true
    })
  }
  handleCloseDialogAddTask = () => {
    this.setState({
      isOpenDialogAddTask: false
    })
  }

  handleChangeFormAddTask = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmitFormAddTask = (event) => {
    event.preventDefault()
    const { subject, desc } = this.state;
    const { dispatch } = this.props;
    if (subject === '' || desc === ''){
      swal('Warning', 'Please Input value in Subject Field And Content Field', 'warning', {
        button: 'Ok',
      });
    } else {
      const body = {
        subject: subject,
        desc: desc
      }
      insertTask(body).then(_ => {
        dispatch(getListTask())
        this.setState({
          isOpenDialogAddTask: false,
          subject: '',
          desc: ''
        })
      })
    }
  }


  render() {
    const { isOpenDialogAddTask, status } = this.state;
    return (
      <div>
        <AddTaskComponent
          isOpenDialogAdd={isOpenDialogAddTask}
          onOpenDialogAdd={this.handleOpenDialogAddTask}
          onCloseDialogAdd={this.handleCloseDialogAddTask}
          onSubmitFormAdd={this.handleSubmitFormAddTask}
          onChangeFormAdd={this.handleChangeFormAddTask}
          formStatus={status}/>
      </div>
    );
  }
}

export default connect()(AddTaskButton);
