import pp from "../../../../resources/group15.png"
import downicon from "../../../../resources/fi_chevron-down.png"
import {string} from "prop-types";
import React, {useState} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {ProfileProps} from "./ProfileProps";

const dropdownButtonStyle = {
    padding: '10%',
    background: 'none',
    border: 'none'
}

const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    borderRadius: '8px',
    padding: '5px 10px',
    backgroundColor: '#EFECEC',
    border: '0px solid #ccc',
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.05)',
    right: '30px',
    display: 'flex',
    justifyContent: 'center',
}
const Profile = ({img, name}: ProfileProps) => {
    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const dropdowHandleHover = () => {
        setIsHovered(true)
    }
    const dropdownHandleLeaveHover = () => {
        setIsHovered(false)
    }

    const dropdownMergeStyle: React.CSSProperties = {
        ...dropdownButtonStyle,
        background: isHovered ? '#E0E0E0' : 'none',
        fontWeight: isHovered ? '700' : '400'
    }
    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        Cookies.remove("token");
        localStorage.clear()
        navigate("/login");
    }

    return (
        <div className="d-flex gap-2 align-items-center">
            <div>
                <img src={img} alt="" width='30px'/>
            </div>
            <div className="text-middle">{name}</div>
            <div onClick={handleDropdownClick}>
                <a href="#"><img src={downicon} alt=""/></a>
                {showDropdown && (
                    <div style={dropdownStyle}>
                        <button
                            onClick={handleLogout}
                            style={dropdownMergeStyle}
                            onMouseEnter={dropdowHandleHover}
                            onMouseLeave={dropdownHandleLeaveHover}
                            >Logout</button>
                        {/* Tambahan pilihan lainnya bisa ditambahkan di sini */}
                    </div>
                )}
            </div>
        </div>
    )
}
Profile.defaultProps = {
    img: pp,
    name: 'Unis Badri'
}
Profile.propTypes = {
    img: string,
    name: string
}
export default Profile;
