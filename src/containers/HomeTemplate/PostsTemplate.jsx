import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.jsx";
import PostDetailPage from './PostDetailPage/PostDetailPage.jsx';
import PostPage from './PostPage';

const routes = [
    // {
    //     path: "/postpage",
    //     component: PostPage,
    // },
    // {
    //     path: "/postpage/:id",
    //     component: PostDetailPage
    // },
    {
        path: "/postpage",
        component: PostPage,
        routes: [
            {
                path: "/postpage/:id",
                component: PostDetailPage
            },

        ]
    }
];
export const listHeadPost = [
    { id: 1, header: 'Dashboard', path: '/dashboard' },
    { id: 2, header: 'Posts', path: '/postpage' },
    { id: 3, header: 'id', path: '/postpag/:id' }
];

export default function PostsTemplate() {
    const style = useStyle();

    return (
        <div className={style.container}>
            <Breadcrumb listOfBread={listHeadPost} />
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}
                    />
                ))}
            </Switch>
        </div>
    )
}
export function RouteWithSubRoutes(route) {
    console.log(`RouteWithSubRoutes ${route.component}`);
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
const useStyle = makeStyles(() => ({
    container: {
        width: '100%',
        // backgroundColor: 'red',
        paddingRight: 100,
        paddingLeft: 100,
        marginTop: 20,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '',
    }
}))
