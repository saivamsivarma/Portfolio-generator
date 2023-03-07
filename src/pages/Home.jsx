// import { Link } from "react-router-dom"; //importing Link from react-router-dom
import { useState } from "react"; // importing useState fom react
import { Button } from "../components/Button"; // importing Button component from components dir
import { Input } from "../components/Input"; // importing Input component from components dir
import { Select } from "../components/Select";
import { TextArea } from "../components/TextArea";

export function Home() {
    const [stepper, setStepper] = useState(0); // stepper contains value; setStepper update the stepper value;

    const role = [
        {
            value: 'desinger',
            label: 'Desinger'
        },

        {
            value: 'developer',
            label: 'Developer'
        }
    ]
    return (
        <div className="container-fluid"> {/* className:container-fluid -- Using Bootstrap container from https://getbootstrap.com/docs/5.3/layout/containers/ which adds padding for content in X(left-right) direction */}
            <div className="row justify-content-center align-items-center" id="home-row"> {/* className:row -- Using Bootstrap row from https://getbootstrap.com/docs/5.3/layout/grid/ which adds grid properties to inner content; className: align-items-center used for center content horizontally className:justify-content-center used for center content vertically  ref: https://getbootstrap.com/docs/5.3/utilities/flex/ */}
                <div className="col col-md-6 col-lg-5"> {/* className:col-10 -- Each row consists of 12 columns col==is class name where 10 say that this element will occupy 5 columns space in a rowref = https://getbootstrap.com/docs/5.3/layout/grid/*/}
                    <h1 className="text-center">Portfolio <span className="text-primary">Generator</span></h1>
                    <div className="card shadow p-2"> {/* className: card -- adds css for card effect ref=https://getbootstrap.com/docs/5.3/components/card/; shadow -- adss shadow css for shadow effect ref=https://getbootstrap.com/docs/5.3/utilities/shadows/ ; p-5 --adds padding 5rem to div ref= https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding;*/}
                        <form className="p-4">
                            {/* Swicth case to render section  based on stepper  */}
                            {(() => {
                                switch (stepper) {
                                    case 0:
                                        return <section className="row gy-3">
                                            <Input label="First Name" labelFor="firstName" placeholder="Steven Haworth" column="col" />
                                            <Input label="Last Name" labelFor="lastName" placeholder="Miller" column="col" />
                                            <Input label="Contact" labelFor="contact" type="tel" placeholder="Contact" column="col-12" />
                                            <Input label="Email" labelFor="email" type="email" placeholder="steve.miller@gmail.com" column="col-12" />
                                        </section>
                                    case 1:
                                        return <section className="row gy-3">
                                            <div className="col-12 d-flex gap-2 align-items-center">
                                                <span className="text-primary fw-bold">I'm</span> <Select options={role} defaultMessage="Select Your Role" />
                                            </div>
                                            <TextArea label="Summary" rows={10} placeholder="Summary About You" />
                                        </section>
                                    case 2:
                                        return <section className="row gy-3">
                                            <Input label="Linked" labelFor="linked" placeholder="Paste Your Linked URL"/>
                                            <Input label="Github" labelFor="gitHub" placeholder="Paste Your Github URL"/>
                                            <Input label="Dribbble" labelFor="dribbble" placeholder="Paste Your Dribbble URL"/>
                                        </section>
                                    case 3:
                                        return <section className="row gy-3">
                                            
                                        </section>
                                    default:
                                        return null
                                }
                            })()}
                            <div className={`${stepper > 0 && "d-flex"} justify-content-between mt-3`}>
                                {stepper > 0 && <Button value="Back" className="btn-light px-5 border" click={() => setStepper(stepper - 1)} />} {/* className: btn -- adds css properties btn ref=https://getbootstrap.com/docs/5.3/components/buttons/;*/}
                                <Button value="Next" className="btn-primary px-5 float-end" click={() => setStepper(stepper + 1)} />
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