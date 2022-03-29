
import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoRecent from '../PhotoRecent/PhotoRecent';
import Posts from '../Posts/Posts';
import Loader from '../CustomizeTemplate/Loader';

import { fetchPostApi, fetchAlbumsApi, fetchPhotosApi } from "./modules/action";

import { hookReducers, initAlbums } from '../../reducers/AlbumsReducer';

import useStyle from "./styles";

export default function Dashboards() {

    const styles = useStyle();
    const dispatch = useDispatch();
    const postList = useSelector(state => (state.postReducer.postList));
    const isLoading = useSelector(state => state.postReducer.isLoading);
    const albumsList = useSelector(state => state.hookReducers.albumsList);
    const photosList = useSelector(state => state.hookReducers.photosList);
    // console.log(`NHQT ${postList.length} - ${albumsList.length}- ${photosList.length}`);
    const handleRenderDashboard = () => {
        if (postList && albumsList && photosList && postList.length > 0 && albumsList.length > 0 && photosList.length) {
            return (
                <div className={styles.container}>
                    <div className={`col-md-4 ${styles.itemFormat}`}>
                        <div className={styles.headerItem}>
                            Statistics
                        </div>
                        <div className={styles.cardFormat}>
                            <div className={styles.cardBody}>
                                <p className={styles.cardTitle}>{postList.length}</p>
                                <p className={styles.cardText}>Posts</p>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.cardTitle}>{albumsList.length}</p>
                                <p className={styles.cardText}>Albums</p>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.cardTitle}>{photosList.length}</p>
                                <p className={styles.cardText}>Photos</p>
                            </div>
                        </div>

                    </div>
                    <div className={`col-md-4 ${styles.itemFormat}`}>
                        <div className={styles.headerItem}>
                            Last Posts
                        </div>
                        <div className={styles.scrollView}>
                            <Posts />
                        </div>

                    </div>
                    <div className={`col-md-4 ${styles.itemFormat}`}>
                        <div className={styles.headerItem}>
                            Recent Photos
                        </div>
                        <div className={styles.scrollView}>
                            <div className='row m-0'>
                                <PhotoRecent photosList={photosList} />
                            </div>

                        </div>

                    </div>
                </div>
            )
        } else {
            return <div className={styles.content}><Loader /></div>
        }
    }

    return (
        <div className={styles.content}>
            <div>
                <div className={styles.myCardHeader}>
                    <p>welcome to <h2>My App</h2></p>
                </div>
                {handleRenderDashboard()}
            </div>
        </div>

    )


}
