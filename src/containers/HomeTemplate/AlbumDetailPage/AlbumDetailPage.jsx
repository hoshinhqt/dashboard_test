import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumDetailAPi } from "./module/action";
import { makeStyles, TextField } from "@material-ui/core";
import Loader from "../../../components/CustomizeTemplate/Loader.jsx";
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';


export default function AlbumDetailPage(props) {

    const style = useStyle();
    const { id } = useParams();

    const dispatch = useDispatch();
    const dataDetail = useSelector(state => state.allDetailReducers.dataDetail);


    React.useEffect(() => {
        console.log(`NHQT-detail ${id}`);
        dispatch(fetchAlbumDetailAPi(id))
    }, [id, dispatch]);

    const renderAlbumDetai = () => {
        if (dataDetail) {
            return (
                <div >
                    <p className={style.title}>{dataDetail.title}</p>
                    <p >by <Link to={`/user/${dataDetail.userId}`}>User {dataDetail.userId}</Link></p>
                    <TextField
                        sx={{
                            ml: 1,
                            flex: 0.5,
                        }}
                        placeholder='Search'
                        // value='temp'
                        // className={styles.inputStyle}
                        label="Search"
                        variant="outlined"
                    />
                    <img alt="..." />
                </div>
            )
        } else {
            return <Loader />
        }
    }


    return (
        <>
            <Breadcrumb listOfBread={[...props.listHead, { id: 3, header: `${id}` }]} />
            {renderAlbumDetai()}
        </>
    )

}
const useStyle = makeStyles(() => ({
    title: {
        fontSize: 32,
        fontWeight: '800',
    }
}))
