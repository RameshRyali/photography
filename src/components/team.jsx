import React from "react";
import team1 from '../assests/talentedphotographers/mem1.jpg';
import team2 from '../assests/talentedphotographers/mem2.jpg';
import team3 from '../assests/talentedphotographers/mem3.jpg';
import team4 from '../assests/talentedphotographers/mem4.jpg';
import team5 from '../assests/talentedphotographers/mem5.jpg';
import team6 from '../assests/talentedphotographers/mem6.jpg';
import '../styles/team.css';

const Team = () => {
    return(
        <section className="phot">
        <div className="cont3">
            <div className="hd">
                <h1>Our Talented Team</h1>
                <p>Discover skilled photographers ready to capture your special moments.</p>
            </div>
            <div className="team-grid">
                <div className="team-member">
                    <img src={team1} alt="Emily Johnson"/>
                    <h2>Emily Johnson</h2>
                    <h3>Wedding Photographer</h3>
                    <p>Emily captures the magic of your special day with a keen eye for detail.</p>
                </div>
                <div className="team-member">
                    <img src={team2} alt="Michael Smith"/>
                    <h2>Michael Smith</h2>
                    <h3>Event Photographer</h3>
                    <p>With a keen eye for detail, Michael excels in capturing the essence of events.</p>
                </div>
                <div className="team-member">
                    <img src={team3} alt="Sophia Lee"/>
                    <h2>Sophia Lee</h2>
                    <h3>Indoor Photographer</h3>
                    <p>Sophia specializes in capturing beautiful and candid portraits.</p>
                </div>
                <div className="team-member">
                    <img src={team4} alt="David Brown"/>
                    <h2>David Brown</h2>
                    <h3>Outdoor Photographer</h3>
                    <p>David creates stunning images for advertising and marketing.</p>
                </div>
                <div className="team-member">
                    <img src={team5} alt="Olivia Martinez"/>
                    <h2>Olivia Martinez</h2>
                    <h3>Lifestyle Photographer</h3>
                    <p>Olivia captures everyday moments in a unique and artistic way.</p>
                </div>
                <div className="team-member">
                    <img src={team6} alt="Ava Roberts"/>
                    <h2>Ava Roberts</h2>
                    <h3>Fashion Photographer</h3>
                    <p>Ava captures the latest trends with a stylish and modern touch.</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Team; 