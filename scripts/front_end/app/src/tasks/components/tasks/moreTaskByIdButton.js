import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Detail from '@material-ui/icons/Details';
import '../../styles/body.css';

const Transition = (props) => (
  <Slide direction="up" {...props}/>
)
const MoreTaskByIdButton = ({
                              isOpenDialogMore,
                              onOpenDialogMore,
                              onCloseDialogMore,
                              dataTask
                            }) => {
  return (
    <div>
      <Button size="small" color="secondary" onClick={onOpenDialogMore} variant={'contained'} id="moreBt">
        <Detail />
        More...
      </Button>
      <Dialog
        open={isOpenDialogMore}
        TransitionComponent={Transition}
        onClose={onCloseDialogMore}>
        <DialogTitle>Task : More Details Tasks</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {
              dataTask && dataTask.data.map(result => (
                <List subheader="List Task">
                  <ListItem>
                    <ListItemText primary="Title" secondary={result.title}/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Content" secondary={result.desc}/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Status" secondary={result.status}/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Create Date" secondary={result.created_date}/>
                  </ListItem>
                </List>
              ))
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MoreTaskByIdButton;
