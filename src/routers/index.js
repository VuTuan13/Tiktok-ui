//Layouts
import { HeaderOnly } from '~/components/GlobalStyles/Layout';

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/UpLoad';
import Search from '~/pages/Search';

//  Public Router
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile},
    { path: '/upload', component: Upload, layout:HeaderOnly},
    { path: '/sreach', component: Search, layout:null},
    // xét layout chung bằng null
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };