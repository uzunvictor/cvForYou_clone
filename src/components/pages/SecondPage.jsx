import React from 'react';
import homeImage from '../../assets/img/second_page/home-img.svg'

function SecondPage(props) {
    return (
        <section className='py-70'>
            <div className="container">
                <p className='h2 fw-bold text-center mb-4'>What does Online Resume Builder mean ?</p>
                <div className="row">
                    <div className="col-6">
                        <img src={homeImage} alt="home" /></div>
                    <div className="col-6">
                        <p className='fs-5'>
                            Resume Builder is a service that assists people to create a resume online. It has everything you need: templates with different designs, tips on how to effectively create a professional resume, and examples of great cvs. You are guided through the process step-by-step.
                        </p>
                        <p className='fs-5'>
                            The Resume Builder allows you to create your own resume layout, changing the location of the blocks and their sequence inside the template. It also includes auto-sorting functions. Additionally, from design options - choose the font color and style. At the same time, everything is simple and intuitive to navigate.
                        </p>
                        <p className='fs-5'>
                            Once you create resume, you can use the link for online view or download it as a PDF document.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecondPage;