import {Link} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import {DashboardContext} from "../../context/Dashboard/DashboardContext";
import {SubSidebarProps} from "./SubSidebarProps";
import {sidebarHeader, sidebarItem, sidebarStyle} from "./SubSidebarStyle";

const SubSideBarContent = ({ name, link }: SubSidebarProps) => {
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <div
                style={sidebarItem}
            >
                <span>{name}</span>
            </div>
        </Link>
    );
};


const SubSidebar = () => {
    const { state } = useContext(DashboardContext);
    const { subSidebarContents, setSubSidebarContents, subSidebarTitle, setSubSidebarTitle, activeItemSubSidebar, setActiveItemSubSidebar} = state;

    // const [activeItem, setActiveItem] = useState(0);
    const handleCardClick = (index: number) => {
        setActiveItemSubSidebar(index);
    };

    useEffect(() => {
        const storedContents = localStorage.getItem('contents');
        const storedTitle = localStorage.getItem('title');
        const contentsActive = storedContents ? JSON.parse(storedContents) : [{ name: 'Dashboard', link: '/dashboard'}];
        const titleActive = storedTitle ? JSON.parse(storedTitle) : 'Dashboard';
        setSubSidebarContents(contentsActive);
        setSubSidebarTitle(titleActive);
    }, []);

    return (
        <div id="sidebar2" style={sidebarStyle}>
            <div style={sidebarHeader}>{subSidebarTitle}</div>
            {subSidebarContents.map(({ name, link }, index) => (
                    <div key={index} onClick={() => handleCardClick(index)} style={{
                        backgroundColor: activeItemSubSidebar === index ? 'var(--primary-dark-blue-01, #cfd4ed)' : 'transparent'
                    }}>
                        <SubSideBarContent
                            name={name}
                            link={link}
                        />
                    </div>
                ))}
        </div>
    );
};

export default SubSidebar;
