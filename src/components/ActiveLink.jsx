import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../providers/ThemeProvider';

const ActiveLink = ({ to, children }) => {

    const location = useLocation();

    const { theme } = useContext(ThemeContext);
    
    const isActive = location.pathname === to;

    return (
        <NavLink
            to={to}
            className={theme === 'light' ? (isActive ? 'light-active' : 'default') : theme === 'dark' ? (isActive ? 'dark-active' : 'default') : theme === 'night' ? (isActive ? 'night-active' : 'default') : 'default'}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;