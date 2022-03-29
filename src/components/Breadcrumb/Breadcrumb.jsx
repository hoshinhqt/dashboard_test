import { makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Breadcrumb(props) {

    const styles = useStyles();
    const { listOfBread } = props;

    const renderBreadItem = () => {
        // console.log('NHQT-listOfBread', listOfBread);
        return listOfBread.map((item, index) => (
            <li className={`breadcrumb-item ${(item.id === listOfBread.length ? 'active' : '')}`}
                aria-current="page" >
                {item.header}
            </li >
        ))
    }
    return (
        <>
            <nav>
                <ol className={`breadcrumb  ${styles.olCustomize}`} >
                    {renderBreadItem()}
                </ol>
            </nav>

        </>
    )
}
const useStyles = makeStyles(() => ({
    olCustomize: {
        backgroundColor: 'white',
        padding: 0
    }
}))
