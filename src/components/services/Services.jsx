import React from 'react';
import './Services.css';
import Image1 from '../../assets/prog.jpg'
import Image2 from '../../assets/7026946.jpg'
import Image3 from '../../assets/5484597.jpg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Programming Languages ",
        description:
            "Python, Java, MySql.",
    },
    {
        id: 2,
        image: Image2,
        title: "Devops",
        description:
            "AWS, Git, Linux, Maven, JUnit, Jenkins, Docker, Kubernetes, Ansible, Terraform, Trivy, SonarQube, Grafana, Prometheus, ArgoCD, MangoDB Atlas",
    },
    
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Skills</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services