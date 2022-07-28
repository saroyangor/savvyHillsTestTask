import React, {useEffect} from 'react'
import styles from "./Menu.module.css"
import {NavLink} from "react-router-dom"
import {useAppDispatch, useAppSelector} from "../../redux/hooks"
import {toggleActive} from "../../redux/menuSlice"
import {getCategories} from "../../redux/categoriesSlice"
import cn from "classnames"

import {toCapitilize} from "../../utils/toCapitilize"

import boxes from "../../assets/images/boxes.svg"
import clothes from "../../assets/images/clothes.svg"
import hats from "../../assets/images/hats.svg"
import sinks from "../../assets/images/sinks.svg"
import space from "../../assets/images/space.svg"
import sunglasses from "../../assets/images/sunglasses.svg"
import ties from "../../assets/images/ties.svg"

const Menu: React.FC = () => {
  const active = useAppSelector(state => state.menu.active)
  const items = useAppSelector(state => state.categories.categories)
  const dispatch = useAppDispatch()

  const images = [boxes, clothes, hats, sinks, space, sunglasses, ties]

  useEffect(() => {
    dispatch(getCategories())
  }, [])


  return (
    <div className={cn(styles.menu, {
      [styles.active]: active
    })}
    onClick={() => dispatch(toggleActive(false))}
    >
      <div className={styles.blur}/>
      <div className={styles.menuContent} onClick={e => e.stopPropagation()}>
        <div className={styles.menuHeader}></div>
        <ul className={styles.linksList}>
          {
            items.map(item =>
              <li key={item.id}>
                <NavLink to={`/${item.name}`} className={({ isActive }) =>
                  isActive ? [styles.link, styles.active].join(" ") : styles.link
                }
                onClick={() => dispatch(toggleActive(false))}
                >
                  <img src={images[items.indexOf(item)]} alt={item.name}/>
                  <span>{toCapitilize(item.name)}</span>
                </NavLink>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default Menu;