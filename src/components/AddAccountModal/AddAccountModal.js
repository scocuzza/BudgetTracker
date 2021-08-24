import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, TextField } from '@material-ui/core';
import { GlobalContext } from '../../context/GlobalState';
import { assetTypes } from '../../constants/constants';
import './AddAccountModal.scss'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export const AddAccountModal = (props) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [account, setAccount] = useState({ accountName: '', accountType: '', accountValue: '' });
    const {addAccount} = useContext(GlobalContext)
    const onSubmit = e => {
        e.preventDefault();
        console.log(account)
        addAccount(account);
    }
      

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Add an Asset</h2>
            <p id="simple-modal-description">
                Select your asset type.
            </p>
            <div className="react-budget__add-account-form">
                <TextField type="search" variant="outlined" label="Account Name" required onChange={(e) => setAccount({ ...account, accountName: e.target.value })} />
                <TextField type="search" variant="outlined" label="Amount" required onChange={(e) => setAccount({ ...account, accountValue: e.target.value })} />
                <TextField
                    select
                    label="Select an Account Type"
                    id="demo-simple-select"
                    onChange={(e) => setAccount({ ...account, accountType: e.target.value })}
                    value={account.accountType}
                >
                    {assetTypes.map((assetType)=> {return <MenuItem value={assetType.type}>{assetType.type}</MenuItem>})}
                </TextField>
            </div>
            <Button onClick={onSubmit} variant="contained" color="primary">Add</Button>
        </div>
    );

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
