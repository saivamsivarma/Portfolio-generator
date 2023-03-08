import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare, faDribbbleSquare } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from "react";
import DefaultUserImage from "../assets/user.svg";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Template(props) {
    const { user,setStep } = props;
    const redirect = useNavigate();
    const soicalIcons = [
        {
            icon: faLinkedin,
            link: 'https://'+user.socialLinks.linkedIn
        },
        {
            icon: faGithubSquare,
            link: user.socialLinks.github
        },
        {
            icon: faDribbbleSquare,
            link: user.socialLinks.dribbble
        }
    ];

    const imagePreivew = (image) => {
        var previewImg = document.getElementById("preview");
        if (previewImg) previewImg.src = "data:image/jpg;base64," + image;
    }

    useEffect(() => {
        const image = localStorage.getItem("image");
        if (image) imagePreivew(image);
    });

    const handleEdit = () => {
        redirect('/');
        setStep(0);
    }
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div>
                    <Button value="Edit Profile" className="btn-outline-primary float-end shadow" click={handleEdit}/>
                </div>
            </div>
            <div className="row align-items-center" id="temp-row">
                <section className="col-1 col-md-1">
                    {soicalIcons.map((soicalIcon, index) => (
                        <div className="icons p-1" key={index}>
                            <a href={soicalIcon.link} rel="noreferrer" target="_blank" className="text-primary"><FontAwesomeIcon icon={soicalIcon.icon} /></a>
                        </div>
                    ))}
                </section>
                <section className="col-11">
                    <section className="row p-3 gy-3">
                        <section className="col-12 col-md-6 order-4 order-lg-1">
                            <sup className="fs-4 text-primary">Hello! </sup>
                            <header className="user-Name">I'm <article>{user?.basicDetails.firstName},<span className="text-primary">{user?.basicDetails.lastName}</span></article></header>
                            <p className="text-justify">{user?.summary}</p>
                            <div className="d-md-flex gap-3">
                                <a href={`tel:` + user.basicDetails.contact} className="btn btn-light border contact">Contact Via Phone</a>
                                <a href={`mailto:` + user.basicDetails.email} className="btn btn-primary contact mt-2 mt-md-0">Contact Via Mail</a>
                            </div>
                        </section>
                        <section className="col-12 col-md-6 order-1 order-lg-5">
                            <div className="img-container p-2 text-center mx-auto shadow-lg">
                                <img src={DefaultUserImage} alt="" id="preview" className="shadow mt-md-2" />
                            </div>
                        </section>
                    </section>
                </section>
            </div>
        </div>
    )
}