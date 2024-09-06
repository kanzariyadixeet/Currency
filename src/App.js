import React from 'react'

import CoinList from './components/CoinList'
import { Route, Routes } from 'react-router-dom';
import CoinDetail from './components/CoinDetail'


export default function App() {

  return (
    <div>


      <Routes>
        <Route path='/' element={<CoinList />} />
        <Route path='/CoinDetail' element={<CoinDetail />} />

      </Routes>
    </div>
  )
}
