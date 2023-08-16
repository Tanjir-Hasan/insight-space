import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { ColorRing } from "react-loader-spinner";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
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
                setLoading(false);
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
                setLoading(false);
            });
    };
    return (
        <div id="contact" className="container mx-auto mb-4 md:mb-10">
            <div className="md:flex justify-between items-center gap-5">

                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="md:w-6/12 mx-5 md:mx-0">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-semibold mb-2">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block font-semibold mb-2">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                rows={4}
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className={`bg-[#84a98c] hover:bg-[#344e41] text-white py-2 px-10 rounded duration-700 flex items-center gap-3 text-xl ${loading ? "bg-gray-500 hover:bg-gray-500" : "bg-[#84a98c]"}`}
                                disabled={loading}
                            >
                                Send Message{loading ? <>
                                    <ColorRing
                                        visible={true}
                                        height="30"
                                        width="30"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    />
                                </> : <BsSend />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;