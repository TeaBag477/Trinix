import {FunctionComponent, ReactNode} from 'react';
import Navbar from '../navbar';

interface BaseLayoutProps {
    children?: ReactNode;
}

const BaseLayout: FunctionComponent<BaseLayoutProps> = ({children}) => {
    return <>
        <Navbar />
        <div className='py-16 backdrop-gray-50 bg-sky-50 overflow-hidden min-h-screen'>
            <div className='max-w-7xl mx-auto px-4 space-y-8 sm:px-8'>
                {children}
            </div>
        </div>
    </>
}

export default BaseLayout
