import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboards from '../../components/Dashboard/Dashboards';
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import HomePage from './HomePage';
import useStyle from "./styles";

function LayoutHome(props) {

    const styles = useStyle();
    return (
        <div className={styles.wrapper}>
            <SideNavBar />
            {props.children}
        </div>
    )
}

export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={
                (inside) => (<LayoutHome>
                    <Component {...inside} />
                </LayoutHome>)
            }
        />

    )
}
