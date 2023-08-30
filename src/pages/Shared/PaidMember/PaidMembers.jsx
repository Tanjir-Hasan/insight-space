import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import BenifitMember from "./BenifitMember";
import GuarantyMember from "./GuarantyMember";
import MemberCard from "./MemberCard";
import PaymentList from "./PaymentList";


const PaidMembers = () => {
    const { theme } = useContext(ThemeContext);
    return (
       <div>
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
        <MemberCard></MemberCard>
        <GuarantyMember></GuarantyMember>
        <BenifitMember></BenifitMember>
        <PaymentList></PaymentList>
        </div>
       </div>
    );
};

export default PaidMembers;