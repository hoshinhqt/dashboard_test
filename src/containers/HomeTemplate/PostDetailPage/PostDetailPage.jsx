import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsDetailAPi } from '../AlbumDetailPage/module/action';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/CustomizeTemplate/Loader';
import { makeStyles } from '@material-ui/styles';
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.jsx";


export default function PostDetailPage(props) {

    const style = useStyle();
    const { listHeadPost } = props;
    const { id } = useParams();
    const dispatch = useDispatch();
    const postDetail = useSelector(state => state.allDetailReducers.postDetail);

    // console.log(`id :${id} `);
    React.useEffect(() => {
        dispatch(fetchPostsDetailAPi(id))
    }, [dispatch, id]);

    const renderDetailPost = () => {
        if (postDetail) {
            return (
                <div className="p-1">
                    <div >
                        <p className={style.title}>{postDetail.title}</p>
                        <p >{postDetail.body}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className=' p-3 text-center'>
                    <Loader />
                </div>
            )
        }
    }

    return (
        <>
            <Breadcrumb listOfBread={[...listHeadPost, { id: 3, header: `${id}` }]} />
            {renderDetailPost()}
        </>
    )

}
const useStyle = makeStyles(() => ({
    title: {
        fontSize: 32,
        fontWeight: '800',
    }
}))
