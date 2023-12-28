import AboutImg from "./AboutImg/AboutImg";
import AboutInfo from "./AboutInfo/AboutInfo";

function About() {
    return (
        <div className="mt-[25px]">
            <div className="container">
                <div className="flex justify-between">
                    <AboutInfo/>
                    <AboutImg/>
                </div>
            </div>
        </div>
    );
}

export default About;