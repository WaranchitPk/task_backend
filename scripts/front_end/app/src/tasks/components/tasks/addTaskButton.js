import React from 'react';
import Button from '@material-ui/core/Button/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import AddIcon from '@material-ui/icons/AddToQueue';
import '../../styles/body.css';

const Transition = (props) => (
  <Slide direction="up" {...props}/>
)

const AddTaskButton = ({
                         isOpenDialogAdd,
                         onOpenDialogAdd,
                         onCloseDialogAdd,
                         onSubmitFormAdd,
                         onChangeFormAdd
                       }) => {
  return (
    <div>
      <Button size="small" color="primary" onClick={onOpenDialogAdd} variant={'contained'} id="addBt">
        <AddIcon/>
        Add Task
      </Button>
      <Dialog
        open={isOpenDialogAdd}
        TransitionComponent={Transition}
        onClose={onCloseDialogAdd}>
        <DialogTitle>Task : Add Tasks</DialogTitle>
        <DialogContent>
          <FormGroup>
            <TextField
              name="subject"
              label="Task: Subject"
              placeholder="Placeholder"
              multiline
              rowsMax="2"
              margin="normal"
              variant="outlined"
              helperText="ex.Exercise"
              onChange={onChangeFormAdd}/>
            <TextField
              name="desc"
              label="Task: Content"
              multiline
              rowsMax="4"
              onChange={onChangeFormAdd}
              margin="normal"
              helperText="ex.Today, i will go to gym at 9.00 pm"
              variant="outlined"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialogAdd} color="primary">
            Disagree
          </Button>
          <Button onClick={onSubmitFormAdd} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTaskButton;
