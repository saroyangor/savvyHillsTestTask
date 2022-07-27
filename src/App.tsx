import React, {Suspense} from 'react'
import {Routes, Route} from "react-router-dom"

import Main from "./pages/Main"

import Loader from "./components/Loader/Loader"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"

const Boxes = React.lazy(() => import("./pages/Boxes"))
const Clothes = React.lazy(() => import("./pages/Clothes"))
const Hats = React.lazy(() => import("./pages/Hats"))
const Sinks = React.lazy(() => import("./pages/Sinks"))
const Space = React.lazy(() => import("./pages/Space"))
const Sunglasses = React.lazy(() => import("./pages/Sunglasses"))
const Ties = React.lazy(() => import("./pages/Ties"))


function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/boxes" element={<Boxes />}/>
            <Route path="/clothes" element={<Clothes />}/>
            <Route path="/hats" element={<Hats />}/>
            <Route path="/sinks" element={<Sinks />}/>
            <Route path="/space" element={<Space />}/>
            <Route path="/sunglasses" element={<Sunglasses />}/>
            <Route path="/ties" element={<Ties />}/>
            <Route path="*" element={<Main/>} />
          </Routes>
        </div>
      </Suspense>
      <Menu />
    </>
  )
}

export default App;
