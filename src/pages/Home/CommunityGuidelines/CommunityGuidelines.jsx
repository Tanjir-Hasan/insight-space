import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

const CommunityGuidelines = () => {

    const { theme } = useContext(ThemeContext);

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div className={`${theme}`}>

            <div className="md:w-10/12 w-11/12 mx-auto space-y-10 md:pb-20 pb-10">

                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}

                    className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#48cae4]'} border-b-2 md:text-5xl text-4xl font-[Poppins] lg:w-1/2 w-11/12`}>
                    Community Guidelines
                </motion.h1>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 },
                    }}
                    transition={{ duration: 0.9 }}

                    className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto">

                    <div>
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">Be Respectful</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">Treat others with kindness and respect. Harassment, hate speech, personal attacks, and any form of discrimination will not be tolerated.</p>
                    </div>

                    <div>
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">Keep it Civil</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">Engage in constructive discussions and debates. Disagreements are natural, but remember to express your opinions in a respectful and non-inflammatory manner.</p>
                    </div>

                    <div>
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">No Offensive Content</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">Do not post content that is explicit, offensive, or graphic in nature. This includes nudity, violence, and any content that may distress or offend others.</p>
                    </div>

                    <div

                    >
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">Intellectual Property</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">Respect copyright and intellectual property rights. Only post content that you have the right to use, and always give credit when necessary.</p>
                    </div>

                    <div

                    >
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">No Spam or Self-Promotion</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">Avoid spamming the platform with repetitive or irrelevant content. Excessive self-promotion is discouraged; focus on contributing valuable content to the community.</p>
                    </div>

                    <div

                    >
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">Privacy Matters</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">Respect the privacy of others. Do not share personal information without permission, and be cautious about sharing your own personal information.</p>
                    </div>

                    <div

                    >
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">Report Inappropriate Content</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">If you come across content that violates our guidelines, report it to our moderation team. Help us maintain a safe community for everyone.</p>
                    </div>

                    <div

                    >
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">No Bullying or Harassment</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">Bullying or harassing behavior, whether directed at individuals or groups, is strictly prohibited.</p>
                    </div>

                    <div

                    >
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">Respect Diversity</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">Embrace the diversity of our community members. Do not engage in any behavior that discriminates against individuals based on their race, gender, religion, sexual orientation, etc.</p>
                    </div>

                    <div

                    >
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">Follow Platform Rules</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">Follow the rules and guidelines set by the platform. Any violations may result in content removal, warnings, or account suspension.</p>
                    </div>

                    <div

                    >
                        <div className="relative group">
                            <h3 className="font-[Poppins] text-xl">Be Mindful of Minors</h3>
                            <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                        </div>
                        <p className="font-[Cinzel] text-justify mt-2">If your content is accessible to minors, ensure that it is appropriate for all age groups.</p>
                    </div>

                </motion.div>

            </div>


        </div>
    );
};

export default CommunityGuidelines;

/***
 * 2. 

3. 

4. 

5. 

6. 

7. 

8. 

9. 

10. 

11. 
 * 
 * 
 * **/ 