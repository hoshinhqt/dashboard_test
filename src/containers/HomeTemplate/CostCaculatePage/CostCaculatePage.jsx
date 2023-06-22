import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import Cart from '../../../components/Cart/Cart'
import Product from '../../../components/Product'

export default function CostCaculatePages(props) {

    const styles = useStyle()
    const formInputRef = React.useRef(null);
    const [number, setNumber] = useState(0)
    const [dark, setMode] = useState(false)

    // example for useMemo
    const doubleNumber = showDelay(number)
    // const doubleNumber = useMemo(() => {
    //     return showDelay(number)
    // }, [number])

    useEffect(() => {

    })
    //ex for ref
    const focusInput = () => {
        formInputRef.current.focus()
    }

    //example for useCallback

    const getItems = useCallback(() => {

        return [number * 2]
    }, [number])
    console.log('input', getItems);

    const theme = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333',
        width: '500px',
        margin: '30px 10px'
    }

    return (
        <div style={theme}>
            <div className='exampleUseCallback' >
                <input
                    type="number"
                    value={number}
                    onChange={e => setNumber(parseInt(e.target.value))}
                />
                <button className={styles.button} onClick={() => setMode(prevDark => !prevDark)}>
                    Change Mode
                </button>
            </div>
            <Cart getItem={getItems} />
        </div>
    )
}

function showDelay(num) {
    console.log('show slow');
    for (let i = 0; i < 20000; i++) { }
    return num * 2
}
const useStyle = makeStyles(() => ({
    button: {
        backgroundColor: '#64CCC5'
    }
}))
