import React from 'react';
import './Work.css';
import project1_img from './fyp1.png';
import project2_img from './Ai.png';
import project3_img from './charta.png';
import project4_img from './star.jpg';

const Work = () => {
    const mywork_data = [
        {
            w_no: 1,
            w_work: 'web design',
            w_img: project1_img,
            w_link: 'https://home-imagine-client.vercel.app/' // Replace with actual link
        },
        {
            w_no: 2,
            w_work: 'web design',
            w_img: project2_img,
            w_link: 'https://mock-with-ai.vercel.app/' // Replace with actual link
        },
        {
            w_no: 3,
            w_work: 'web design',
            w_img: project3_img,
            w_link: 'https://www.charta.me/' // Replace with actual link
        },
        {
            w_no: 4,
            w_work: 'Starbucks Clone',
            w_img: project4_img,
            w_link: 'https://example.com/project4' // Replace with actual link
        }
    ];

    return (
        <div className="mywork" id='work'>
            <div className="mywork-title">
                <h1>My Work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={work.w_img}
                                alt={`Project ${work.w_no}`}
                                style={{ width: '300px', background: 'black', color: '#fff' }}
                            />
                        </a>
                    );
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
            </div>
        </div>
    );
};

export default Work;
