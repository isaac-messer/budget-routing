import { useEffect, useState, useRef } from 'react';
import React from 'react';
import Balance from './Components/BalanceInfo'
import Income from './Components/IncomeInfo'
import Expenses from './Components/ExpensesInfo';
import TransactionList from './Components/TransactionList';
import AddTransactionForm from './Components/AddTransactionForm';
import { BudgetProvider } from './Context';

export const Home = () => {
    return(
    <BudgetProvider>
      <div id='box'>
        <div id="container">
          <div id="header">
            <h1>Current Balance</h1>
          </div>
          <div id="balanceContainer">
            <div id="balance">
              <Balance/>
            </div>
            <div id="balanceBreakDownContainer">
              <div id="incomeContainer">
                <div id="income">
                  <Income/>
                </div>
              </div>
              <div id="expensesContainer">
                <div id="expenses">
                  <Expenses/>
                </div>
              </div>
            </div>
          </div>
          <div id="transactionHistoryContainer">
            <div id="historyHeaderConatiner">
              <p>-Transactions-</p>
            </div>
            <div id='historyListContainer'>
              <TransactionList/>
            </div>
          </div>
          <div id="addTransactionFormContainer">
            <div>
              <AddTransactionForm/>
            </div>
          </div>
        </div>
      </div>
      
    </BudgetProvider>
    )
}