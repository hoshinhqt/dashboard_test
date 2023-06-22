import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Cart({ getItem }) {

  
  const [items, setItem] = useState([])

  useEffect(() => {
    setItem(getItem())
    // console.log('check reRender');
  }, [getItem])

  return items.map(item => <div key={item}>{item}</div>)

}
