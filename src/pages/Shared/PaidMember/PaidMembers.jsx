import BenifitMember from "./BenifitMember";
import GuarantyMember from "./GuarantyMember";
import MemberCard from "./MemberCard";
import PaymentList from "./PaymentList";


const PaidMembers = () => {
   
    return (
       <div>
        <MemberCard></MemberCard>
        <GuarantyMember></GuarantyMember>
        <BenifitMember></BenifitMember>
        <PaymentList></PaymentList>
       </div>
    );
};

export default PaidMembers;