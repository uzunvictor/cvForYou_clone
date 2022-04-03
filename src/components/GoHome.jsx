import React from 'react';
import { FaHome } from 'react-icons/fa';

function GoHome({scrollToTop}) {
    return (
        <div id='go-home' className='d-flex align-middle justify-content-center'>
            <div className='pt-1' onClick={scrollToTop}>
                <FaHome size={50} color="blue"/>
            </div>
        </div>
    );
}

export default GoHome;