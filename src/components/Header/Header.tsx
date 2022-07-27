import React from 'react'
import styles from "./Header.module.css"
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks"
import {toggleActive} from "../../redux/menuSlice"

const Header: React.FC = () => {
  const active = useAppSelector(state => state.menu.active)
  const dispatch = useAppDispatch()

  return (
    <nav className={styles.nav}>
      <div className={styles.burgerBtn} onClick={() => dispatch(toggleActive(!active))}>
        <span/>
      </div>
      <Link onClick={() => dispatch(toggleActive(false))} to="/" className={styles.title}>KittyStore</Link>
    </nav>
  )
}

export default Header