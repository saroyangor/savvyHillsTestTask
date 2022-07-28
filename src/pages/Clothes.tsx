import React, {useEffect, useState} from 'react'
import styles from "./Pages.module.css"
import {useAppDispatch, useAppSelector} from "../redux/hooks"
import axios from "axios"

import Button from "../components/UI/Button/Button"
import {nextPage} from "../redux/pageSlice"

const ItemsGrid = React.lazy(() => import("../components/ItemsGrid/ItemsGrid"))

type ImageItem = {
  id: string
  url: string
  width: number
  height: number
}

const Clothes: React.FC = () => {
  const [data, setData] = useState<ImageItem[]>([])
  const page = useAppSelector(state => state.page.activePage)
  const dispatch = useAppDispatch()


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=15`)
      setData([...data, ...response.data])
    }

    fetchData()
  }, [page])

  return (
    <main className={styles.main}>
      <ItemsGrid data={data}/>
      <Button onClick={() => dispatch(nextPage())}>Load More...</Button>
    </main>
  )
}

export default Clothes