import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

class DialogExampleSimple extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = (event) => {
        if(event.target.value === 'Create'){
            this.props.OnBoardNameCreation(true);
        }
        else{
            this.props.OnBoardNameCreation(false);
        }
        this.setState({open: false});
    };

    render() {
        const actions = [
            <button type="button" className="btn btn-warning btn-lg"
                value="Cancel"
                primary={true}
                onClick={this.handleClose}
            >Cancel</button>,
            <button type="button" className="btn btn-success btn-lg"
                value="Create"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            >Create</button>
        ];

        return (
            <MuiThemeProvider>
            <div style={{position:"relative"}}>
                <RaisedButton label="+" onClick={this.handleOpen} style={{position:"absolute",right:0, radius:50}}/>
                <Dialog
                    title="Create Board"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField floatingLabelText="Board Name" value={this.props.TextFieldValue} onChange={this.props.OnTextFieldValueChange}/>
                </Dialog>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default DialogExampleSimple;