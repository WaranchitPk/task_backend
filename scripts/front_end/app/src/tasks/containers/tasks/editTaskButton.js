import React, { Component } from 'react';
import EditTaskComponent from '../../components/tasks/editTaskButton';
import { connect } from 'react-redux';
import { path_api } from '../../../config';
import axios from 'axios';

import { getListTask } from '../../actions/getTasks';
import {updateTask} from '../../actions/updateTasks';

class EditTaskButton extends Component {
  state = {
    isOpenDialogEditTask: false,
    subject: '',
    desc: ''
  }

  handleOpenDialogEditTask = () => {
    const { idTask } = this.props;
    this.setState({
      isOpenDialogEditTask: true
    })
    axios.get(`${path_api}/${idTask}`)
      .then(result => {
        this.setState({
          isOpenDialogEditTask: true,
          subject: result.data[0].title,
          desc: result.data[0].desc
        })
      })
  }
  handleCloseDialogEditTask = () => {
    this.setState({
      isOpenDialogEditTask: false
    })
  }
  handleChangeFormEditTask = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }
  handleSubmitFormEditTask = (event) => {
    event.preventDefault()
    const { subject, desc } = this.state;
    const { dispatch, idTask } = this.props;
    const body = {
      subject: subject,
      desc: desc
    }
    updateTask(idTask, body).then(_ => {
      dispatch(getListTask())
      this.setState({
        isOpenDialogEditTask: false
      })
    })
  }

  render() {
    const { isOpenDialogEditTask, subject, desc } = this.state;


    return (
      <div>
        <EditTaskComponent
          isOpenDialogEdit={isOpenDialogEditTask}
          onOpenDialogEdit={this.handleOpenDialogEditTask}
          onCloseDialogEdit={this.handleCloseDialogEditTask}
          onChangeFormEdit={this.handleChangeFormEditTask}
          onSubmitFormEdit={this.handleSubmitFormEditTask}
          formSubject={subject}
          formDesc={desc}/>
      </div>
    );
  }
}

export default connect()( EditTaskButton);
