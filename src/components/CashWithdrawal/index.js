// Write your code here

import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  OnDecrementBalance = value => {
    this.setState(prev => ({balance: prev.balance - value}))
  }

  render() {
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="Main-Container">
        <div className="CashWithdrawal-Container">
          <div className="Name-Container">
            <p className="initial-name">{initial}</p>
            <p className="Name">{name}</p>
          </div>
          <div className="Name-Container balance-container">
            <p className="balance">Your balance</p>
            <p className="amount">{balance}</p>
          </div>
          <span className="currency">Rupees</span>
          <div>
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="Denomination-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationValues={eachDenomination}
                OnDecrementBalance={this.OnDecrementBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
