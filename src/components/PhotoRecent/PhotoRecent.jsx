import React from 'react';
import { useStyle } from './styles';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

export default function PhotoRecent(props) {
    const styles = useStyle();
    // const { photosList } = props;
    const photosList = useSelector(state => state.hookReducers.photosList);

    if (photosList && photosList.length) {
        return photosList.slice(0, 30).map(item => (
            <div className=' col-md-4 p-1' >
                <div>
                    < img src={item.thumbnailUrl} className={styles.cardImage} alt="..." />
                    <p className={styles.cardText}>{item.title.slice(0, 10)} ...</p>
                </div>
            </div >
        ))

    } else {
        return <p>PhotoFormat</p>
    }

}

