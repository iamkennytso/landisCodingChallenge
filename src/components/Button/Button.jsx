import React from "react";
import * as styles from './Button.module.scss'

const Button = ({onClick, children, disabled}) => <button onClick={onClick} disabled={disabled} className={styles.Button}>
  {children}
</button>

export default Button