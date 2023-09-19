import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import BenifitMember from "./BenifitMember";
import GuarantyMember from "./GuarantyMember";
import MemberCard from "./MemberCard";
import PaymentList from "./PaymentList";
import useTitle from "../../../Hooks/useTitle";


const PaidMembers = () => {

    useTitle('Subscription');

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <div className={`${theme} mb-20 pb-20`}>
                <MemberCard></MemberCard>
                <GuarantyMember></GuarantyMember>
                <BenifitMember></BenifitMember>
                <PaymentList></PaymentList>
            </div>
        </div>
    );
};

export default PaidMembers;