import React from 'react';

function FirstPage(props) {
    return (
        <div className='first-page'>

            <div className="container-box">
                <div className="text-box">
                    <p className='title'>Intuitive resume maker</p>
                    <span className='subtitle'>Your resume will be fantastic!</span>
                    <button className='custom'><span className='fs-5'>Create resume</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FirstPage;