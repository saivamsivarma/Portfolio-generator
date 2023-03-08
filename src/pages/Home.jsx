import { useNavigate } from "react-router-dom"; //importing Link from react-router-dom
import { useEffect, useRef, useState } from "react"; // importing useState fom react
import { Button } from "../components/Button"; // importing Button component from components dir
import { Input } from "../components/Input"; // importing Input component from components dir
import { Select } from "../components/Select";
import { TextArea } from "../components/TextArea";
import DefaultUserImage from "../assets/user.svg";

export function Home(props) {
    const { step, setStep, user, setUser } = props;
    const fileInput = useRef(null); // useRef used for persist values between render

    // for navigation
    const redirect = useNavigate();
    // preview the image function
    const handleUpload = e => {
        // checking the length
        if (e.target.files.length > 0) imgPreview(e.target.files[0]);
    }

    const imgPreview = (image) => {
        if (image) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result.replace("data:", "").replace(/^.+,/, "");
                localStorage.setItem("image", result);
                const image = localStorage.getItem("image");
                imageLoad(image);
            }
            reader.readAsDataURL(image);
        }
    }

    const imageLoad = (image) =>{
        var previewImg = document.getElementById("preview");
        if(previewImg) previewImg.src = "data:image/jpg;base64," + image;
    }

    // useEffect is use to load the data for each render
    useEffect(() => {
        let image = localStorage.getItem("image")
        if(image) imageLoad(image)
    })

    // roles to add data to select Component
    const roles = [
        {
            value: 'desinger',
            label: 'Desinger'
        },

        {
            value: 'developer',
            label: 'Developer'
        }
    ]

    // const [image, setImage] = useState(user.image ? user.image : { preview: '', raw: '' }) // upload and preview image;
    const [firstName, setFirstName] = useState(user.basicDetails.firstName);
    const [lastName, setLastName] = useState(user.basicDetails.lastName);
    const [contact, setContact] = useState(user.basicDetails.contact);
    const [email, setEmail] = useState(user.basicDetails.email);
    const [role, setRole] = useState(user.role);
    const [summary, setSummary] = useState(user.summary);
    const [linkedIn, setLinkedIn] = useState(user.socialLinks.linkedIn);
    const [github, setGithub] = useState(user.socialLinks.github);
    const [dribbble, setDribbble] = useState(user.socialLinks.dribbble);

    const handleForm = () => {
        if (step < 3) {
            setStep(step + 1);
            localStorage.setItem("step", step + 1);
        }
        let user = {
            basicDetails: {
                firstName: firstName,
                lastName: lastName,
                contact: contact,
                email: email,
            },
            role: role,
            summary: summary,
            socialLinks: {
                linkedIn: linkedIn,
                github: github,
                dribbble: dribbble
            }
        }
        setUser(user);
        localStorage.setItem("userDetails", JSON.stringify(user));
        redirect('/template');
    }

    const handleBack = () => {
        if (step >= 0) setStep(step - 1);
        localStorage.setItem("step", step - 1);
    }

    return (
        <div className="container-fluid"> {/* className:container-fluid -- Using Bootstrap container from https://getbootstrap.com/docs/5.3/layout/containers/ which adds padding for content in X(left-right) direction */}
            <div className="row justify-content-center align-items-center" id="home-row"> {/* className:row -- Using Bootstrap row from https://getbootstrap.com/docs/5.3/layout/grid/ which adds grid properties to inner content; className: align-items-center used for center content horizontally className:justify-content-center used for center content vertically  ref: https://getbootstrap.com/docs/5.3/utilities/flex/ */}
                <div className="col col-md-6 col-lg-5"> {/* className:col-10 -- Each row consists of 12 columns col==is class name where 10 say that this element will occupy 5 columns space in a rowref = https://getbootstrap.com/docs/5.3/layout/grid/*/}
                    <h1 className="text-center">Portfolio <span className="text-primary">Generator</span></h1>
                    <div className="card shadow p-2"> {/* className: card -- adds css for card effect ref=https://getbootstrap.com/docs/5.3/components/card/; shadow -- adss shadow css for shadow effect ref=https://getbootstrap.com/docs/5.3/utilities/shadows/ ; p-5 --adds padding 5rem to div ref= https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding;*/}
                        <form className="p-4">
                            {/* Swicth case to render section  based on step  */}
                            {(() => {
                                switch (step) {
                                    case 0:
                                        return <section className="row gy-3">
                                            <Input label="First Name" labelfor="firstName" placeholder="Steven Haworth" column="col" onChange={(e) => setFirstName(e.target.value)} defaultValue={user.basicDetails.firstName} />
                                            <Input label="Last Name" labelfor="lastName" placeholder="Miller" column="col" onChange={(e) => setLastName(e.target.value)} defaultValue={user.basicDetails.lastName} />
                                            <Input label="Contact" labelfor="contact" type="tel" placeholder="Contact" column="col-12" onChange={(e) => setContact(e.target.value)} defaultValue={user.basicDetails.contact} />
                                            <Input label="Email" labelfor="email" type="email" placeholder="steve.miller@gmail.com" column="col-12" onChange={(e) => setEmail(e.target.value)} defaultValue={user.basicDetails.email} />
                                        </section>
                                    case 1:
                                        return <section className="row gy-3">
                                            <div className="col-12 d-flex gap-2 align-items-center">
                                                <span className="text-primary fw-bold">I'm</span> <Select options={roles} onChange={(e) => setRole(e.target.value)} defaultValue={user.role} />
                                            </div>
                                            <TextArea label="Summary" rows={6} placeholder="Summary About You" onChange={(e) => setSummary(e.target.value)} defaultValue={user.summary} />
                                        </section>
                                    case 2:
                                        return <section className="row gy-3">
                                            <Input label="LinkedIn" labelfor="linkedIn" placeholder="Paste Your LinkedIn URL" onChange={(e) => setLinkedIn(e.target.value)} defaultValue={user.socialLinks.linkedIn} />
                                            <Input label="Github" labelfor="gitHub" placeholder="Paste Your Github URL" onChange={(e) => setGithub(e.target.value)} defaultValue={user.socialLinks.github} />
                                            <Input label="Dribbble" labelfor="dribbble" placeholder="Paste Your Dribbble URL" onChange={(e) => setDribbble(e.target.value)} defaultValue={user.socialLinks.dribbble} />
                                        </section>
                                    case 3:
                                        return <section className="row gy-3">
                                            <div className="col-12 text-center">
                                                <div className="mt-n1">
                                                    <img src={DefaultUserImage} alt="" height="180px" className="rounded-pill" width="180px" id="preview" />
                                                    <Input type="file" className="d-none" onChange={handleUpload} imageRef={fileInput} fileAccept="image/*" />
                                                    <Button value="Upload" className="btn-outline-primary" click={() => fileInput.current.click()} />
                                                </div>
                                            </div>
                                        </section>
                                    default:
                                        return null
                                }
                            })()}
                            <div className={`${step > 0 && "d-flex"} justify-content-between mt-3`}>
                                {step > 0 && <Button value="Back" className="btn-light px-5 border" click={handleBack} />} {/* className: btn -- adds css properties btn ref=https://getbootstrap.com/docs/5.3/components/buttons/;*/}
                                <Button value={step === 3 ? "Generate" : "Next"} className="btn-primary px-5 float-end" click={handleForm} />
                            </div>
                        </form>
                        {/* <Link to="/template">Template</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;