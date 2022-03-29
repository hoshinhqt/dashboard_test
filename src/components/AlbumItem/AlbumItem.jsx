
import React from 'react';
import { useDispatch } from 'react-redux'
import { Link, Route } from 'react-router-dom';
import useStyle from './styles';
import AlbumDetailPage from "../../containers/HomeTemplate/AlbumDetailPage/AlbumDetailPage.jsx";
import { useRouteMatch } from 'react-router-dom';


export default function AlbumsItem(props) {

    const style = useStyle();
    const { url } = useRouteMatch();
    const { item, photosList } = props;
    console.log("iem", item.title.slice(0, 15), url);

    const renderListRowImage = () => {
        if (photosList && photosList.length > 0) {
            return photosList.slice(0, 4).map(item => {
                return (
                    <div>
                        <img className={style.cardImage} src={item.thumbnailUrl} alt="" />
                    </div>)
            })
        }
    }
    return (
        <>
            <div className={`col-3 p-1`}>
                <div className={style.cardFormat}>
                    <div className={style.cardRow}>
                        <Link to={`${url}/${item.id}`}><p className={style.cardTitle}>{item.title.slice(0, 20)}</p></Link>
                    </div>
                    <div className={style.cardBody}>
                        {
                            renderListRowImage()
                        }
                    </div>

                    <div className={style.cardRow}>

                        <Link to={`${url}/${item.id}`}><p className={style.cardTitle}>By : User {item.userId}</p></Link>
                    </div>
                </div>

            </div>
        </>
    )
}
