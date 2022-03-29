import SideNavBar from "../components/SideNavBar/SideNavBar";
import PhotosPage from "../containers/HomeTemplate/PhotosPage.jsx";
import PostPage from "../containers/HomeTemplate/PostPage.jsx";
import HomePage from "../containers/HomeTemplate/HomePage.jsx";
import AlbumsPage from "../containers/HomeTemplate/AlbumsPage.jsx";
import PostsTemplate from "../containers/HomeTemplate/PostsTemplate.jsx";
import UserPages from "../containers/AuthTemplate/UsersPage/UserPages";
import { PostLayout } from "../containers/HomeTemplate/PostsTemplate.jsx";

import { Route, Switch } from 'react-router-dom';
import AlbumDetailPage from "../containers/HomeTemplate/AlbumDetailPage/AlbumDetailPage";
import PostDetailPage from "../containers/HomeTemplate/PostDetailPage/PostDetailPage";
import PhotoDetailPages from "../containers/HomeTemplate/PhotosDetailPage/PhotoDetailPages";

const homeRoutes = [
  
    { exact: true, path: '/dashboard', component: HomePage },

    { exact: false, path: '/postpage', component: PostPage },
    // { exact: false, path: '/postpage/id', component: PostDetailPage },

    { exact: false, path: '/albums', component: AlbumsPage, },
    // { exact: false, path: '/albums/id', component: AlbumDetailPage },

    { exact: false, path: '/photos', component: PhotosPage },
    // { exact: false, path: '/photos', component: PhotoDetailPages },

    { exact: false, path: '/user', component: UserPages },
]

export { homeRoutes };


