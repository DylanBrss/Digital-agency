import React from 'react';
import "../../styles/services.css";

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        desc: 'Lorem ipsum dolor sit amet  elit. Iure magni voluptas voluptatem pariatur nulla autem officiis'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor sit amet  elit. Iure magni voluptas voluptatem pariatur nulla autem officiis'
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        desc: 'Lorem ipsum dolor sit amet  elit. Iure magni voluptas voluptatem pariatur nulla autem officiis'
    },
    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet  elit. Iure magni voluptas voluptatem pariatur nulla autem officiis'
    },

];

const Services = () => {
    return (
        <section id="service">
            <div className="container">
                <div className="service__top-content">
                    <h6 className='subtitle'>Our Services</h6>
                    <h2>Save time managing your business</h2>
                    <h2 className="highlight"> our best services</h2>
                </div>

                <div className="service__item-wrapper">
                    {
                        serviceData.map((item, index) => (
                            <div className="service__item" key={index}>
                                <span className="service__icon"><i class={item.icon}></i></span>
                                <h3 className="service__title">{item.title}</h3>
                                <p className="description">{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services