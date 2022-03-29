import React, { useReducer } from 'react';
import SearchBar from '../../components/Searchbar/SearchBar'
import AlbumsItem from "../../components/AlbumItem/AlbumItem.jsx";
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Loader from '../../components/CustomizeTemplate/Loader';
import AlbumDetailPage from "./AlbumDetailPage/AlbumDetailPage.jsx";
import { Route, Switch } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useRouteMatch } from 'react-router-dom';

const routes = [
    { exact: false, path: '/albums/:id', component: AlbumDetailPage },

];
const listHead = [
    { id: 1, header: 'Dashboard' },
    { id: 2, header: 'Albums' }

]
export default function AlbumsPage() {

    const styles = useStyle();
    const { url, path } = useRouteMatch();
    const albumsList = useSelector(state => state.hookReducers.albumsList);
    const photosList = useSelector(state => state.hookReducers.photosList);
    console.log('page', path);
    const handleRenderAlbum = () => {

        if (albumsList && albumsList.length > 0) {

            return albumsList.slice(0, 28).map(item => (
                <AlbumsItem item={item} photosList={photosList} />
            ))
        }
        return (<div className={styles.container}><Loader /></div>)
    }
    return (
        <div className={styles.container}>
            <Switch>
                <Route exact path={path}>
                    <Breadcrumb listOfBread={listHead} />
                    <p className={styles.header}>Albums</p>
                    <SearchBar />
                    <div className='row pt-3 '>
                        {handleRenderAlbum()}
                    </div>
                </Route>
                <Route path={`${path}/:id`}>
                    <AlbumDetailPage listHead={listHead} />
                </Route>
            </Switch>
        </div>
    )
};

const useStyle = makeStyles(() => ({
    container: {
        width: '100%',
        // backgroundColor: 'red',
        paddingRight: 100,
        paddingLeft: 100,
        marginTop: 20,
    },
    rowFormat: {
        display: 'flex',
        flexDirection: 'row'
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '',
    }
}))


