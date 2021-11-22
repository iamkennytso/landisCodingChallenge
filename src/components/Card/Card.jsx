import React from "react";
import * as styles from './Card.module.scss'

const formatPhoneNumber = number => {
  const numberString = String(number)
  return `(${numberString.substring(0, 3)}) ${numberString.substring(3, 6)}-${numberString.substring(6)}`
}

const formatAddress = address => {
  const [addressLine1, ...addressLine2] = address.split(',')
  return <>
    {addressLine1} <br/>
    {addressLine2}
  </>
  
}

const calculateBalance = balance => {
  let integer;
  if (typeof balance === 'string') {
    integer = balance.split('.')
    integer = Number(integer)
  } else {
    integer = balance
  }
  
  switch (true) {
    case (integer > 20000):
      return '💲💲💲💲💲'
    case (integer > 15000):
      return '💲💲💲💲'
    case (integer > 10000):
      return '💲💲💲'
    case (integer > 5000): 
      return '💲💲'
    default:
      return '💲'
  }
}

const calculateCredit = credit => {
  switch (true) {
    case (credit > 800):
      return '👍👍👍👍👍'
    case (credit > 740):
      return '👍👍👍👍'
    case (credit > 670):
      return '👍👍👍'
    case (credit > 580): 
      return '👍👍'
    default:
      return '👍'
  }
}

const Card = ({address, balance, credit, email, employer, name_first, name_last, phone, picture, onClick}) => {
  return <div className={styles.CardContainer} onClick={onClick}>
    <div className={styles.firstRow}>
      <img src={picture} className={styles.avatar} />
      <p className={styles.text}>
        {name_last}, <br/>
        {name_first} <br/>
        @ {employer} <br/>
      </p>
    </div>
    <p className={styles.secondRow}>
      {formatPhoneNumber(phone)} <br/>
      {email} <br/>
      {formatAddress(address)} <br/>
      Balance: {calculateBalance(balance)}<br/>
      Credit: {calculateCredit(credit)}
    </p>
  </div>
}
export default Card