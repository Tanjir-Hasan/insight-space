import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    const { t } = useTranslation();
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active" : "default"}
        >
            {t(children)}
        </NavLink>
    );
};

export default ActiveLink;