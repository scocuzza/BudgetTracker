import { Card, CardContent, CardHeader } from '@material-ui/core'

import React from 'react'
import './AccountContainer.scss'
import '../AccountAccordion/AccountAccordion'
import { AccountAccordion } from '../AccountAccordion/AccountAccordion'
import { AddAccount } from '../AddAccount/AddAccount'

export const AccountContainer = () => {
    return (
        <div>
            <AddAccount />
            <div className="react-budget__account-container">
                <Card className="react-budget__account-container__assets">
                    <CardHeader title="Assets"></CardHeader>
                    <CardContent>
                        <AccountAccordion title={'Savings'} description={'Cash or Cash equivalent Accounts'} />
                        <AccountAccordion title={'Investments'} description={'Investment Accounts like Individual Brokerage or Retirement Accounts'} />
                        <AccountAccordion title={'Real Estate'} description={'Asset value of properties'} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader title="Liabilities"></CardHeader>
                    <CardContent>
                        <AccountAccordion title={'Credit Card'} description={'Credit Card Balances'} />
                        <AccountAccordion title={'Loans'} description={'Withstanding Loans (Personal, Mortgage, or Student etc.)'} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
