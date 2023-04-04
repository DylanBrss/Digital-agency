import React from 'react';
import '../../styles/team.css';

import team01 from '../../assets/images/team-01.png';
import team02 from '../../assets/images/team-02.png';
import team03 from '../../assets/images/team-03.png';

const teamMember = [
    {
        imgUrl: team01,
        name: 'Country Hurry',
        position: 'Product Developer'
    },
    {
        imgUrl: team02,
        name: 'Lindas Walton',
        position: 'Frond-End Developer'
    },
    {
        imgUrl: team03,
        name: 'Harry Martin',
        position: 'Product Designer'
    },
    {
        imgUrl: team02,
        name: 'Lisa Cooper',
        position: 'CEO & Sr. Developer'
    },

];

const Team = () => {
    return (
        <section className='our__team'>
            <div className="container">
                <div className="team__content">
                    <h6 className='subtitle'>Our Team</h6>
                    <h2>Meet with <span className="highlight">our team</span></h2>
                </div>

                <div className="team__wrapper">
                    {
                        teamMember.map((item, index) => (
                            <div className="team__item" key={index}>
                                <div className="team__img">
                                    <img src={item.imgUrl} alt="" />
                                </div>
                                <div className="team__details">
                                    <h4>{item.name}</h4>
                                    <p className="description">{item.position}</p>

                                    <div className="team__member-social">
                                        <span><i className="ri-linkedin-line"></i></span>
                                        <span><i className="ri-twitter-line"></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team