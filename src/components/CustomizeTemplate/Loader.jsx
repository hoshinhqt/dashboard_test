import { makeStyles } from '@material-ui/core';
import React from 'react';



export default function Loader() {
    const style = useStyles();
    return (
        <div className={style.loaderStyles}>
            <div class="spinner-border" role="status">
                {/* <span class="visually-hidden">Loading...</span> */}
            </div>
        </div>
    )
}
const useStyles = makeStyles(() => ({
    loaderStyles: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
}))
