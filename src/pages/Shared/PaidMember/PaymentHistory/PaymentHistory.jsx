import React, {  useEffect, useState } from 'react';
import classNames from 'classnames';




const PaymentHistory = () => {
  const [payments, setPayments] = useState([])

  const url = 'http://localhost:5000/payment-history'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPayments(data))
  }, [url])



  return (
    <div className=' mt-20 mb-10'>
      <div className="overflow-x-auto">
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
            </tr>
          </thead>
          <tbody>
            {payments.map((item, index) => (
              <tr
                key={index}
                className={classNames({
                  'bg-gray-100': index % 2 === 0,
                  'bg-white': index % 2 !== 0,
                })}
              >
                <td className="px-6 py-4  whitespace-no-wrap text-xl leading-5 font-bold ">

                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  <div className='font-bold'>
                    {item.UserName}
                  </div>
                  <div>
                    {item.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  <div className='font-bold'>
                    $ {item.price}
                  </div>
                  <div>
                    {item.transactionId}
                  </div>
                </td>
                <td className="px-6 py-4  whitespace-no-wrap text-sm leading-5 text-gray-600">
                  <div className='font-bold'>
                   {item.memberShip} Membership
                  </div>
                  <div>
                    {item.date}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default PaymentHistory;