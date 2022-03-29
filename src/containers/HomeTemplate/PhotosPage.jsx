import { makeStyles } from '@material-ui/core';
import React from 'react';
import SearchBar from '../../components/Searchbar/SearchBar'
import { Route, Switch, Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useRouteMatch } from 'react-router-dom';
import PhotoDetailPages from './PhotosDetailPage/PhotoDetailPages';
import { useSelector } from 'react-redux';

export const listHead = [
    { id: 1, header: 'Dashboard' },
    { id: 2, header: 'Photos' }

]
export default function PhotosPage() {

    const styles = useStyle();
    const { url, path } = useRouteMatch();
    const photosList = useSelector(state => state.hookReducers.photosList);


    const renderPhotoList = () => {
        if (photosList && photosList.length > 0) {
            return photosList.slice(0, 18).map(item => (
                <div className='col-md-2 p-3'>
                    <img src={item.thumbnailUrl} className={styles.cardImage} alt="..." />
                    <p className={styles.cardText}> <Link to={`${url}/${item.id}`}>{item.title.slice(0, 15)}</Link>...</p>
                </div>
            ))

        }

    }
    return (
        <div className={styles.container}>
            <Switch>
                <Route exact path={path}>
                    <Breadcrumb listOfBread={listHead} />
                    <p className={styles.header}>Photos</p>
                    <SearchBar />
                    <div className='row pt-3'>
                        {renderPhotoList()}
                    </div>
                </Route>
                <Route path={`${path}/:id`}>
                    <PhotoDetailPages listHead={listHead} />
                </Route>
            </Switch>
        </div>
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
    },
    cardImage: {
        weight: 100,
        height: 100,
    },
    cardText: {
        fontSize: 14,
        fontWeight: '300',
        margin: 0,
        marginRight: 5,
    }
}))
