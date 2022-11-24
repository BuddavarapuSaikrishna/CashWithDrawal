// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationValues, OnDecrementBalance} = props
  const {value} = denominationValues

  const CheckBalance = () => {
    OnDecrementBalance(value)
  }

  return (
    <li className="list-container">
      <button
        className="denomination-button"
        type="button"
        onClick={CheckBalance}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
