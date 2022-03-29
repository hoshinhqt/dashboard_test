import { makeStyles, styled } from '@material-ui/core';
import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import NavFooterBar from "../../components/NavFooterBar/NavFooterBar.jsx";
import SearchBar from "../../components/Searchbar/SearchBar.jsx";
import TablePost from "../../components/TablePost/TablePost.jsx";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PostDetailPage from './PostDetailPage/PostDetailPage.jsx';
import { RouteWithSubRoutes } from "../../routes/index";


export const listHeadPost = [
    { id: 1, header: 'Dashboard' },
    { id: 2, header: 'Posts' }

]
export default function PostPage() {

    const style = useStyle();
    let { path, url } = useRouteMatch();
    return (
        < >
            <div className={style.container}>
                <Switch>
                    <Route exact path={path}>
                        <Breadcrumb listOfBread={listHeadPost} />
                        <p className={style.header}>Posts</p>
                        <div className='pb-3'>
                            <SearchBar />
                        </div>
                        <div className=' pb-3'>
                            <TablePost />
                        </div>
                    </Route>
                    <Route path={`${path}/:id`}>
                        <PostDetailPage listHeadPost={listHeadPost} />
                    </Route>
                </Switch>
            </div>


        </>

    )
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
