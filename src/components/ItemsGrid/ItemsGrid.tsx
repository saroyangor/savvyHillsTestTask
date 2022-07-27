import React from 'react'
import styles from "./ItemsGrid.module.css"

import LoadableImage from "../LoadableImage/LoadableImage"

type ImageItem = {
  id: string
  url: string
  width: number
  height: number
}

type ItemsGrid = {
  data: ImageItem[]
}

const ItemsGrid = (props: ItemsGrid) => {
  return (
    <div className={styles.container}>
      {props.data.map((item) => {
        return (
          <div key={item.id + Math.random()} className={styles.item}>
            <LoadableImage src={item.url} alt={item.id}/>
          </div>
        )
      })}
    </div>
  );
};

export default ItemsGrid;