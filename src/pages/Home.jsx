import { Link } from "react-router-dom"; //importing Link from react-router-dom

export function Home() {
    return (
        <div className="container-fluid"> {/* className:container-fluid -- Using Bootstrap container from https://getbootstrap.com/docs/5.3/layout/containers/ which adds padding for content in X(left-right) direction */}
            <div className="row justify-content-center align-items-center" id="home-row"> {/* className:row -- Using Bootstrap row from https://getbootstrap.com/docs/5.3/layout/grid/ which adds grid properties to inner content; className: align-items-center used for center content horizontally className:justify-content-center used for center content vertically  ref: https://getbootstrap.com/docs/5.3/utilities/flex/ */}
                <div className="col-5"> {/* className:col-5 -- Each row consists of 12 columns col==is class name where 5 say that this element will occupy 5 columns space in a rowref = https://getbootstrap.com/docs/5.3/layout/grid/*/}
                    <h1>Home</h1>
                    <Link to="/template">Template</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;