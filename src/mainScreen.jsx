import React, { useEffect, useState } from 'react'
import Currencydropdown from "./dropdown"
import { LuArrowLeftRight } from "react-icons/lu";



const CurrencyConvertor = () => {

const [currencies, setCurrencies] = useState([]); //doubt in array
const [amount , setAmount] = useState(1);
const [fromCurrency , setFromcurrency] = useState("USD");
const [toCurrency , setTocurrency] = useState("INR");
const [convertedamount , setConvertedAmount] = useState();


  //conversion =>  https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}
     function fetchdata (){
  fetch(`https://api.frankfurter.app/currencies`)
    .then((response) => response.json())
    .then((data) => {
      
      // console.log(data,"i am fired");

      setCurrencies(Object.keys(data))

    }) .catch ((error) => {
      alert("check the country first")

    })

  };

   useEffect(()=>{
    fetchdata();
   },[])

  //  console.log(currencies );
  
   
   function convertcurrency (d){
        
    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${d || toCurrency}`)
    .then((response) => response.json())
    .then((data) => {
    // console.log(d , data)
       if(d) {
        // setTocurrency(d)
        setConvertedAmount(data.rates[d]);
      } else{
        setConvertedAmount(data.rates[toCurrency]);
        console.log(data.rates[toCurrency]);
      }
      // console.log(toCurrency,d)
      // console.log(convertedamount);
    }) .catch ((error) => {
      alert("Enter the Amount")
    })
    
   }

  //  console.log(fromCurrency)
  //  console.log(toCurrency)

   const swapcurrency = ( ()=>{
    setFromcurrency(toCurrency);
    setTocurrency(fromCurrency);

   });

   useEffect(()=>{
     convertcurrency()
   },[])
  
  return (
    <>
      <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md'>
        <h2 className='mb-5 text-2xl font-semibold text-gray-700'>
          Currency Converter
        </h2>
        <div className='flex justify-evenly items-end gap-2'>
          <Currencydropdown currencies={currencies} title='From' currency={fromCurrency} setCurrency={setFromcurrency}/>

            <div className=''>
                <button onClick={swapcurrency} className='p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300'><LuArrowLeftRight /></button> 
            </div>

          <Currencydropdown currencies={currencies} changecur= {convertcurrency} title='To' currency={toCurrency} setCurrency={setTocurrency}/>
        </div>

        <div>
          <label htmlFor='amount' className='block text-sm font-medium text-gray-700'>
            Amount :</label>
          <input type='number' value={amount} onChange={(e)=> setAmount(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 '></input>
        </div>

        <div className='flex justify-center mt-6'>
          <button onClick={()=>convertcurrency(false)} className='px-5 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'>Convert</button>
        </div>

        <div className='mt-4 text-lg font-medium text-right text-green-600'>
          Converted Amount: {convertedamount} {toCurrency}
        </div>

        

      </div>
    </>

  )
}

export default CurrencyConvertor