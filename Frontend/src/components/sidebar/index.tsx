import rectangle from "../../resources/Rectangle 63.png"
import CardSidebar from "../CardSidebar";
import React, {useContext, useEffect} from "react";
import {listSidebar} from "./listSidebar";
import {DashboardContext} from "../../context/Dashboard/DashboardContext";
import {useLocation, useNavigate} from "react-router-dom";
import {SidebarContent} from "./SideBarContent";

const sidebarStyle = {
    background: 'var(--primary-dark-blue-04, #0d28a6)',
    minHeight: '100vh',
}

const Sidebar = () => {
    const navigate = useNavigate();
    const { state } = useContext(DashboardContext);
    const { setSubSidebarContents, setSubSidebarTitle, activeItemSidebar, setActiveItemSidebar, setActiveItemSubSidebar} = state;
    const location = useLocation();
    useEffect(() => {
        // Mendapatkan pathname dari useLocation dan menyesuaikannya dengan link pada listSidebar
        const currentPath = location.pathname;
        const activeIndex = listSidebar.findIndex(item => item.contents[0].link === currentPath);

        if (activeIndex !== -1) {
            setActiveItemSidebar(activeIndex);
        }
    }, [location.pathname]);
    const handleCardClick = (index: number, title: string, contents: SidebarContent[]) => {
        setActiveItemSidebar(index);
        setSubSidebarTitle(title);
        setSubSidebarContents(contents);
        setActiveItemSubSidebar(0);
        navigate(contents[0].link);
        localStorage.setItem('contents', JSON.stringify(contents));
        localStorage.setItem('title', JSON.stringify(title));
    };
    return(
        <div className='d-flex flex-column w-auto' style={sidebarStyle}>
            <img src={rectangle} alt="header" className="m-3" width='34px'/>
            {listSidebar.map(({ icon, text, contents}, index) => {
                return <div key={index} onClick={() => handleCardClick(index, text, contents)} style={{
                                backgroundColor: activeItemSidebar === index ? 'rgba(255, 255, 255, 0.3)' : 'transparent'
                            }}>
                    <CardSidebar icon={icon} text={text} />
                </div>
            })}
        </div>
    )
}
export default Sidebar
