import { Button, Card, CardContent, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import './AddAccount.scss'
import { AddAccountModal } from '../AddAccountModal/AddAccountModal'

export const AddAccount = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

      
    return (
        <Card className="react-budget__add-account">
            <CardContent className="react-budget__add-account-content">
                <div className="react-budget__add-account-text">
                <Button onClick={handleOpen} variant="contained" color="primary">+</Button>
                <Typography className="react-budget__add-account-text__asset">Add an Asset (Savings, Investment, IRA, Real Estate, Individual Brokerage etc.)</Typography>
                <Button onClick={handleOpen} variant="contained" color="primary">+</Button>
                <Typography className="react-budget__add-account-text__liability">Add a Liability (Credit Card, Loans, etc.)</Typography>
                </div>

            </CardContent>
            <AddAccountModal handleClose={handleClose} open={open}/>
        </Card>
    )
}
