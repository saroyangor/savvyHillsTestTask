import React from 'react'
import styles from "./Button.module.css"

export interface IButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const Button = (props: IButtonProps) => {

  return (
    <button className={styles.btn} {...props}>
      {props.children}
    </button>
  );
};

export default Button;