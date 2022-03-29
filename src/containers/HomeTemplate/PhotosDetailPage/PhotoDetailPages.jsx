import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotosDetailAPi } from '../AlbumDetailPage/module/action';
import Loader from '../../../components/CustomizeTemplate/Loader';


export default function PhotoDetailPages(props) {

    const { id } = useParams();
    const styles = useStyle();
    const dispatch = useDispatch();
    const photoDetail = useSelector(state => state.allDetailReducers.photoDetail);

    React.useEffect(() => {
        dispatch(fetchPhotosDetailAPi(id));
    }, [id, dispatch]);

    const renderPhotoDetail = () => {
        if (photoDetail) {
            return (
                <div>
                    <p className={styles.cardText}>{photoDetail.title}</p>
                    <Link to={`/albums`}>View Album</Link>
                    <div className='text-center'>
                        <img src={photoDetail.thumbnailUrl} className={styles.cardImage} alt="..." />
                    </div>
                </div>

            )
        } else {
            <div><Loader /></div>
        }

    }
    return (
        <div>
            <Breadcrumb listOfBread={[...props.listHead, { id: 3, header: `${id}` }]} />
            {renderPhotoDetail()}
        </div>
    )
}
const useStyle = makeStyles(() => ({
    cardText: {
        fontSize: 32,
        fontWeight: '800',
        margin: 0,
    },
    cardImage: {
        width: 600,
        height: 600,
    }
}))

