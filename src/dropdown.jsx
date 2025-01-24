import React from 'react'

const Currencydropdown = ({
    currencies,
    currency,
    setCurrency,  // doubt in what is this
    // favorites,
    // handleFavriote,
    title ,   // doubt in what is this
    changecur,
}) => {

    return (
        <div>

            <label htmlFor={title}className='block text-sm font-medium text-gray-700'>{title}</label>

            <div className="mt-1 relative">
                <select value={currency} onChange={(e)=>{setCurrency(e.target.value) ;changecur(e.target.value)}} className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                {currencies?.map((currency) => {
                    return (<option value={currency} key={currency}>{currency}</option>)
                })}
            </select></div>

        </div>
    )
}

export default Currencydropdown