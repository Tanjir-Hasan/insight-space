import React from 'react';
import { useParams } from 'react-router-dom';

const SSLPaymentSuccess = () => {

    const { transaction_Id } = useParams();

    const handleCopy = () => {
        navigator.clipboard.writeText(transaction_Id);
        alert("Copied")
    }

    return (
        <div>
            <h1>success</h1>

            <input type="text"
                value={transaction_Id}
                readOnly
            />

            <button onClick={handleCopy}>Copy</button>
            
        </div>
    );
};

export default SSLPaymentSuccess;