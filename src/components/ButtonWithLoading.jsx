import React from 'react';
import { BsSend } from 'react-icons/bs';
import { ColorRing } from 'react-loader-spinner';

const ButtonWithLoading = ({loading, children, icon}) => {
    return (
        <button
            type="submit"
            className={`bg-[#84a98c] hover:bg-[#344e41] text-white py-2 rounded duration-700 flex justify-center items-center gap-3 text-xl font-[Poppins] md:w-72 w-10/12 md:mx-0 mx-auto ${loading ? "bg-gray-500 hover:bg-gray-500" : "bg-[#84a98c]"}`}
            disabled={loading}
        >
            {children} {loading ? <>
                <ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </> :  <>{icon}</>}
        </button>
    );
};

export default ButtonWithLoading;