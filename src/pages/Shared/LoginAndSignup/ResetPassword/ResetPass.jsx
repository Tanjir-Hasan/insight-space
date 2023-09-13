import { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Navbar from '../../Navbar/Navbar';
import Button from '../../../../components/Button';
import { Link } from 'react-router-dom';
const ResetPass = () => {
    const { resetPassword } = useAuth()
    const [email, setEmail] = useState('');
    const [isResetSent, setIsResetSent] = useState(false);

    const handleReset = async () => {
        try {
            await resetPassword(email)
            setIsResetSent(true);
        } catch (error) {
            // Handle error here (e.g., display error message)
            console.error('Error sending password reset email:', error);
        }
    };

    return (
        <>
            <Navbar />
            {isResetSent ? (
                <div className="md:w-1/2 mx-auto">
                    <div className='flex justify-center items-center gap-2 py-5 bg-green-300 rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Reset email sent! Check your inbox for further instructions.</span>
                    </div>
                    <br />
                    <Link to="/login">
                        <Button heading="Login Now">
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className='flex justify-center md:items-center mt-10 md:mt-0 h-96'>
                    <div className='text-center space-y-4 md:w-1/2'>
                        <p className=''>
                            <input
                                className="input-field"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </p>
                        {/* <button className='text-xl text-white font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] w-full duration-700 px-24 py-2 rounded-lg' onClick={handleReset}>Send Password Reset Email</button> */}

                        <Link onClick={handleReset}>
                            <Button heading="Send Password Reset Email">
                            </Button>
                        </Link>

                    </div>
                </div>
            )}
        </>
    );
};

export default ResetPass;
