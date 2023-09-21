import React, { useContext, useEffect } from 'react';
import useMyPayments from '../../../../Hooks/useMyPayments';
import { useRef } from 'react';
// import generatePDF from 'react-to-pdf';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useReactToPrint } from 'react-to-print';


const PaymentHistory = () => {

  const { theme } = useContext(ThemeContext);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // const targetRef = useRef();
  const [myPayments, , reload] = useMyPayments();
  // console.log(reload)
  const controls = useAnimation();

  const [refs, inView] = useInView();

  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const handleDeletePayments = (_id) => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-payment/${_id}`)
          .then(data => {

            // refetch();
            if (data) {
              Swal.fire(
                'Deleted!',
                'Your Payment has been deleted.',
                'success'
              )
            }
          })
          .catch(err => console.log(err.message))
      }
    })
  };


  return (

    <div className={`${theme} h-screen`}>
      <motion.div
        ref={refs}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 3 }}>
        <div className={` ${theme} mt-20 pb-10`}>
          <div onClick={handlePrint} className='text-right my-2 flex justify-end'>
            <button className='text-xl text-white font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] px-12 duration-700 py-1 rounded-lg flex items-center gap-3'>
              <img className='w-10 h-10 rounded-md' src="https://cdn.dribbble.com/users/151595/screenshots/3517495/icon_downloading.gif" alt="" />
              Download invoice
            </button>
          </div>

          <div ref={componentRef} className="overflow-x-auto">
            <table className="min-w-full">
              <thead className='bg-sky-800  md:text-2xl py-5 text-white '>
                <tr className=''>
                  <th className="px-6 py-3  text-left  font-medium tuppercase tracking-wider">
                    No
                  </th>
                  <th className="px-6 text-left   font-medium uppercase tracking-wider">
                    Name & Email
                  </th>
                  <th className="px-6 text-left  font-medium  uppercase tracking-wider">
                    Amount & TrxnId
                  </th>
                  <th className="px-6 text-left   font-medium  uppercase tracking-wider">
                    MemberShip & Date
                  </th>
                  <th className="px-6 text-left   font-medium  uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>


                {myPayments?.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b "
                  // className={classNames({
                  //    'bg-gray-100'    : index % 2 === 0,
                  //   'bg-white': index % 2 !== 0,
                  // })}
                  >
                    <td className="px-6 py-4  whitespace-no-wrap text-xl leading-5 font-bold ">

                      {index + 1}
                    </td>
                    <td className="flex gap-3 items-center px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">

                      <div>
                        {
                          item?.memberShip === 'Basic' ?
                            (
                              <img className='w-10 h-10 rounded-full whitespace-nowrap' src="https://i.ibb.co/r0BMFDp/verified-green-512.webp" alt="" />
                            )
                            :
                            item?.memberShip === 'Pro' ?
                              (
                                <img className='w-12 h-10 rounded-full whitespace-nowrap' src="https://i.ibb.co/3dzNwLw/download-1-removebg-preview.png" alt="" />
                              )
                              : " "
                        }
                      </div>

                      <div>
                        <div className='font-bold '>
                          {item?.UserName}

                        </div>
                        <div>
                          {item?.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      <div className='font-bold'>
                        $ {item?.price}
                      </div>
                      <div>
                        {item?.transactionId}
                      </div>
                    </td>
                    <td className="px-6 py-4  whitespace-no-wrap text-sm leading-5 text-gray-600">
                      <div className='font-bold whitespace-nowrap'>
                        {item?.memberShip} Membership
                      </div>
                      <div className='whitespace-nowrap'>
                        {item?.date}
                      </div>
                    </td>
                    <td className="px-6 py-4  whitespace-no-wrap text-sm leading-5 text-gray-600">
                      <div onClick={() => handleDeletePayments(item?._id)}>
                        <img className='h-8 w-8 rounded-full' src="https://e7.pngegg.com/pngimages/228/54/png-clipart-logo-trademark-brand-delete-button-miscellaneous-text-thumbnail.png" alt="" />
                      </div>
                    </td>
                  </tr>

                ))}

              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>

  );
};

export default PaymentHistory;