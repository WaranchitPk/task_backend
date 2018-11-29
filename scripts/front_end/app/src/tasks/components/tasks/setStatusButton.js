import React from 'react';
import Button from '@material-ui/core/Button/Button';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../../styles/body.css';
import CheckIcon from '@material-ui/icons/Check';

const Transition = (props) => (
    <Slide direction="up" {...props}/>
)

const SetStatusButton = ({
                             isOpenDialogConfirmStatus,
                             onOpenDialogConfirmStatus,
                             onCloseDialogConfirmStatus,
                             onSubmitFormConfirmStatus,
                             titleTask
                         }) => {
    return (
        <div>
            <Button size="small" color="primary" onClick={onOpenDialogConfirmStatus} variant={'contained'}
                    id="setStatusBt">
                <CheckIcon/>
                Set Status
            </Button>
            <Dialog
                open={isOpenDialogConfirmStatus}
                TransitionComponent={Transition}
                onClose={onCloseDialogConfirmStatus}>
                <DialogTitle>Task : Set Status <b>{titleTask}</b> Task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do You Want To Set a Status <b>{titleTask}</b> Task is Complete(done)?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDialogConfirmStatus} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={onSubmitFormConfirmStatus} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SetStatusButton;
