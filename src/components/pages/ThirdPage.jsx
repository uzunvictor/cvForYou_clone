import React, { useState } from 'react';
import hrImage from '../../assets/img/third_page/hr.svg'
import resumeImage from '../../assets/img/third_page/resume.svg'
import docImage from '../../assets/img/third_page/doc.svg'

function ThirdPage(props) {

    const [imgs, setImgs] = useState([
        {
            title: "Vetted by HR",
            image: hrImage,
            alt: 'hr',
            description: "Resume structure approved by HR experts — their helpful hints will ensure you make it right from the start.",
        },
        {
            title: "Professional design",
            image: resumeImage,
            alt: 'resume',
            description: "Font choice, colours, structure, infographics -- every detail has a purpose and a function to make a great first impression.",
        },
        {
            title: "Quicker than Word",
            image: docImage,
            alt: 'doc', 
            description: "Everything is intuitively simple. Just fill in your details and you’re good to go!",
        }
    ])

    return (
        <section className='py-70 bg-light'>
            <div className="container">
                <p className='h2 fw-bold text-center mb-5'>Resume generator works best</p>
                <div className="row">
                    {imgs.map(img => <div className="col-4 px-5 pb-3">
                        <div className="card bg-transparent border-light" >
                            <img src={img.image} className="card-img-top img-third-page" alt={img.alt} />
                            <div class="card-body">
                                <h5 class="card-title text-center fs-4 fw-bold">{img.title}</h5>
                                <p class="card-text text-center text-secondary">{img.description}</p>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </section>
    );
}

export default ThirdPage;