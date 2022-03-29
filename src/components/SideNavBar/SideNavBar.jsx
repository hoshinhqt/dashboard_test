import React from 'react';
import { useDispatch } from 'react-redux';
import useStyle from "./styles";
import { Link, NavLink } from 'react-router-dom';
import { fetchAlbumsApi, fetchPostApi, fetchPhotosApi } from '../Dashboard/modules/action';

export default function SideNavBar() {
    const styles = useStyle();
    const dispatch = useDispatch();

    React.useEffect(() => {
        console.log(`NHQT - ${typeof ({ id: 1, head: 'object' })}`);
        dispatch(fetchPostApi());
        dispatch(fetchAlbumsApi());
        dispatch(fetchPhotosApi());
        // fetchAlbumsApi(dispatchAlbum);
        // fetchPhotosApi(dispatchAlbum);
    }, [fetchPostApi, fetchPhotosApi, fetchAlbumsApi]);

    return (
        <header>
            <nav id="sidebar" className={styles.sidebar}>
                <div>
                    <Link to='/dashboard' className="nav-link" >
                        <h4 className={styles.text}> <strong>My App</strong></h4>
                    </Link>
                </div>
                <div className="sideNavBar">
                    <ul className="navbar-nav">
                        <li className={` nav-item ${styles.customLi}`}>
                            <NavLink exact
                                className={`nav-link ${styles.customNavLink}`} to="/dashboard">
                                Dashboard
                            </NavLink>
                        </li>
                        <li className={`nav-item ${styles.customLi}`}>
                            <NavLink to='/postpage' className={`nav-link ${styles.customNavLink}`} >
                                Posts
                            </NavLink>

                        </li>
                        <li className={` nav-item ${styles.customLi}`}>
                            <NavLink to='/albums' className={`nav-link ${styles.customNavLink}`} >
                                Albums
                            </NavLink>
                        </li>
                        <li className={`nav-item ${styles.customLi}`}>
                            <NavLink to='/photos' className={`nav-link ${styles.customNavLink}`}>
                                Photos
                            </NavLink>
                        </li>

                    </ul>
                </div>

            </nav>
        </header>
    )
}
