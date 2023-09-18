import { useContext, useState } from "react";
import { BsSend } from "react-icons/bs";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { ThemeContext } from "../../../providers/ThemeProvider";
import ButtonWithLoading from "../../../components/ButtonWithLoading";
import useAuth from "../../../Hooks/useAuth";

const ContactForm = () => {

    const { theme } = useContext(ThemeContext);

    const {btnLoading, setBtnLoading} = useAuth();

    // emailjs initialization
    emailjs.init("dN2Z3JjKlbihQjXW6");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnLoading(true);
        // Send the email using EmailJS
        emailjs.send("service_m09mch3", "template_ojktfke", formData)
            .then((response) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Email sent successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                // Clear form data
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
                setBtnLoading(false);
            })
            .catch((error) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Sorry Email Not Sent!',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.error('Error sending email:', error);
                setBtnLoading(false);
            });
    };
    
    return (
        <div id="contact" className={` ${theme} pb-20`}>

                <div className='md:w-10/12 w-11/12 mx-auto'>
                    <h2 className={`${theme === 'light' ? 'border-[#3c6e71]' : theme === 'dark' ? 'border-[#48cae4]' : theme === 'night' ? 'border-[#b79ced]' : ''} border-b-2 md:text-5xl text-4xl font-[Poppins] lg:w-1/2 w-11/12 mb-8`}>Help Desk
                    <br />
                    <span className="text-lg">Share your query, ask us anything, anytime.</span>
                    </h2>
                </div>

                <div className="md:w-8/12 w-11/12 mx-auto">
                    <form onSubmit={handleSubmit}>

                        <div className="md:flex gap-10 items-center">

                            <div className="md:w-1/2 w-10/12 mx-auto space-y-5">

                                <div className="">
                                    <label htmlFor="name" className="font-[Poppins] block font-semibold mb-2">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div className="">
                                    <label htmlFor="email" className="font-[Poppins] block font-semibold mb-2">
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>

                            </div>

                            <div className="md:w-1/2 w-10/12 mx-auto md:py-0 py-5">
                                <label htmlFor="message" className="font-[Poppins] block font-semibold mb-2">
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    rows={4}
                                    required
                                />
                            </div>

                        </div>

                        <div className="md:flex justify-end mt-5">
                            <ButtonWithLoading loading={btnLoading} icon={<BsSend/>}>Send Message</ButtonWithLoading>
                        </div>

                    </form>
                </div>

        </div>
    );
};

export default ContactForm;