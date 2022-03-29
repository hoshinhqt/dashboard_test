import React from 'react'
import useStyle from '../Dashboard/styles'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Posts() {

    const styles = useStyle();
    const postList = useSelector(state => state.postReducer.postList)
    // console.log(`Posts ${postList}`);
    if (postList && postList.length > 0) {
        return postList.slice(0, 30).map(item => (
            <div className="p-1">
                <div className={styles.cardColumn}>
                    <Link> <p className={styles.cardText}>{item.title.slice(0, 30)}</p></Link>
                    <p className={styles.cardText}>{item.body.slice(0, 60)}</p>
                </div>
            </div>
        ))
    } else {
        return (
            <>
                <p>Error</p>
            </>
        )
    }

}
