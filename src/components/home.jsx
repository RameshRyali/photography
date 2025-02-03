import React from 'react';
import image6 from '../assests/homepage/10001.jpg';
import image4 from '../assests/homepage/10003.webp';
import image1 from '../assests/homepage/10004.webp'; // Correct path with forward slashes
import image2 from '../assests/homepage/10005.webp';
import image3 from '../assests/homepage/10006.webp';
import image5 from '../assests/homepage/wed.webp';
import '../styles/home.css';

const Home = () => {
    return (
        <>
        <div className="home" id="home">
            <div className="text">
                <h1>Stunning Visuals</h1>
                <p>
                    Explore breathtaking images from our talented photographers, ready to
                    capture your moments.
                </p>
            </div>
            <div className="photos">
                <div className="cont">
                    <img src={image1} alt="Beautiful scenery" />
                    <img
                        src={image2}
                        alt="Party scene"
                        className="large"
                    />
                    <img
                        src={image3}
                        alt="Sunset couple"
                    />
                    <img
                        src={image4}
                        alt="Camera store"
                    />
                    <img
                        src={image5}
                        alt="Wedding celebration"
                    />
                    <img
                        src={image6}
                        alt="Creative shot"
                        style={{ height: '75%' }}
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
