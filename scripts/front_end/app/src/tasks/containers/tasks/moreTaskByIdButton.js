import React, { Component } from 'react';
import MoreTaskByIdComponent from '../../components/tasks/moreTaskByIdButton'
import { connect } from 'react-redux';
import { getListTaskById } from '../../actions/getTasks';

class MoreTaskByIdButton extends Component {
  state = {
    isOpenDialogMore: false
  }
  handleOpenDialogMoreTask = () => {
    const { dispatch, idTask } = this.props;
    this.setState({
      isOpenDialogMore: true
    })
    dispatch(getListTaskById(idTask))
  }
  handleCloseDialogMoreTask = () => {
    this.setState({
      isOpenDialogMore: false
    })
  }
  render() {
    const { isOpenDialogMore } = this.state;
    const { dataTaskById } = this.props;
    return (
      <div>
        <MoreTaskByIdComponent
          isOpenDialogMore={isOpenDialogMore}
          onOpenDialogMore={this.handleOpenDialogMoreTask}
          onCloseDialogMore={this.handleCloseDialogMoreTask}
          dataTask={dataTaskById}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    dataTaskById: state.getDataTaskByIdReducer.data
  }
)
export default connect(mapStateToProps)(MoreTaskByIdButton);
