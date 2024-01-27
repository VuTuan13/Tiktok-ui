import Header from '~/components/GlobalStyles/Layout/components/Header'
import Silebar from "./Sidebar";

function DefaultLayout( {children} ) {
    return ( 
        <div>
            <Header />
            <div className='container'>
                <Silebar/>
                <div className='Content'>{children}</div>
            </div>
        </div>
     );
}

export default DefaultLayout;