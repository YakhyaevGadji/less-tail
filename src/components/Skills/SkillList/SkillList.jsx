import "./SkillList.scss";

function SkillList() {
    return (
        <ul className="skills__list">
            <li className="skill__list-item">
                <img className="mb-[30px]" src="./../src/assets/icons/design.png" alt="photo" />
                <h3 className="font-semibold uppercase text-[24px] mb-[10px]">UI/UX Design</h3>
                <p className="leading-8">Our design is translated into comprehensive digital environments built on latest development standards.</p>
            </li>
            <li className="skill__list-item">
                <img className="mb-[30px]" src="./../src/assets/icons/design.png" alt="photo" />
                <h3 className="font-semibold uppercase text-[24px] mb-[10px]">UI/UX Design</h3>
                <p className="leading-8">Our design is translated into comprehensive digital environments built on latest development standards.</p>
            </li>
            <li className="skill__list-item">
                <img className="mb-[30px]" src="./../src/assets/icons/design.png" alt="photo" />
                <h3 className="font-semibold uppercase text-[24px] mb-[10px]">UI/UX Design</h3>
                <p className="leading-8">Our design is translated into comprehensive digital environments built on latest development standards.</p>
            </li>
        </ul>
    );
}

export default SkillList;