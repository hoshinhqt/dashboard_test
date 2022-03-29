
import React from 'react';
import { makeStyles } from "@material-ui/core";
import Posts from '../../../components/Posts/Posts'
import { fetchUserAPi } from "./module/action";
import { useDispatch, useSelector } from 'react-redux';
import SideNavBar from '../../../components/SideNavBar/SideNavBar';
import Loader from '../../../components/CustomizeTemplate/Loader';
import { Link } from 'react-router-dom';

export default function UserPages() {
    const style = useStyle();
    const dispatch = useDispatch()

    const userData = useSelector(state => state.hookReducers.userData);
    const albumsList = useSelector(state => state.hookReducers.albumsList);

    console.log(`userdataPage - ${albumsList}`);
    React.useEffect(() => {
        dispatch(fetchUserAPi(1))
    }, [dispatch]);

    const renderAlbumItem = () => {
        if (albumsList && albumsList.length > 0) {
            return albumsList.map(item => (
                <div className='p-1 ml-1'><Link> <p className='m-0'>{item.title}</p ></Link></div>
            ))
        }
    }
    const renderUserpage = () => {
        if (userData) {
            return (
                <div className={style.content}>
                    <div>
                        <div className={style.myCardHeader}>
                            <h2>{userData.name}</h2>
                            <p>@{userData.username} -- {userData.email}
                                -- {userData.website}
                                -- {userData.company.name}
                                -- {userData.address.city}</p>
                        </div>
                    </div>
                    <div className={style.container}>
                        <div className='row'>
                            <div className={style.item}>
                                <div className={style.headerItem}>
                                    Albums
                                </div>
                                <div className={style.scrollView}>
                                    {renderAlbumItem()}
                                    {/* <Posts /> */}
                                </div>

                            </div>
                            <div className={style.item}>
                                <div className={style.headerItem}>
                                    Posts
                                </div>
                                <div className={style.scrollView}>
                                    <Posts />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            )
        } else {
            return <Loader />
        }
    }

    return (
        <div className={style.wrapper}>
            <SideNavBar />
            {renderUserpage()}
        </div>
    )
}
const useStyle = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    content: {
        width: '100%',
    },
    container: {
        paddingRight: 60,
        paddingLeft: 60,
        paddingBottom: 10,
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    item: {
        width: '100%',
        flex: .5,
    },
    myCardHeader: {
        backgroundColor: '#125D98',
        color: 'white',
        paddingRight: 60,
        paddingLeft: 60,
        paddingBottom: 10,
        paddingTop: 10,
    },
    scrollView: {
        overflowY: 'scroll',
        width: '100%',
        float: 'left',
        height: '500px',
        position: 'relative',
        backgroundColor: '#f5f5f5'

    },
    headerItem: {
        backgroundColor: '#EEEEEE',
        padding: 5,
        fontWeight: '400'
    }
}));
