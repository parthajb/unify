import React from 'react';
import { useForm, useWatch } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select'

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ disable, setDisable ] = React.useState(false);
  const [ email, setEmail ] = React.useState(false);
  const [ phone, setPhone ] = React.useState(false);
  const [ city, setCity ] = React.useState(false);

  const [ submit, setSubmit ] = React.useState('Submit');

  const [ namevalue, setNamevalue ] = React.useState('');
  const [ emailvalue, setEmailvalue ] = React.useState('');
  const [ phonevalue, setPhonevalue ] = React.useState('');
  const [ cityvalue, setCityvalue ] = React.useState('');

  


  const options = [
    { value: 'item1', label: 'Item 1' },
    { value: 'item2', label: 'Item 2' },
    { value: 'item3', label: 'Item 3' }
  ]
  
  const notify = () => toast.success('🎉 Thank you for your enquiry. Our team will get back to you soon!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
  const onSubmit = async formData => {
    setDisable(true)
    setSubmit('Submitting...')
    const dorm = JSON.stringify(formData);
    const data = await  axios.post('/api/form', formData )
    if (data.status === 200) {
      notify();
      setDisable(false)
      setSubmit('Submit')
      document.getElementById("form").reset();
      setEmailvalue('')
      setPhonevalue('')
      setNamevalue('')
      setCityvalue('')
    }
  }

  const productChange = product => {
    let catArray = [];
    product.map(o => 
       catArray.push(o.value)
   );
    console.log(catArray);

    if (Object.values(catArray).indexOf('item1') > -1) {
       setEmail(true)
    } else {
      setEmail(false)
    }
    if (Object.values(catArray).indexOf('item2') > -1) {
       setPhone(true)
    } else {
      setPhone(false)
    }
    if (Object.values(catArray).indexOf('item3') > -1) {
       setCity(true)
    } else {
      setCity(false)
    }

  }

  const updateEmail = e => {
    setEmailvalue(e.target.value)
  }
  
  const updateName = e => {
    setNamevalue(e.target.value)
  }
  
  const updatePhone = e => {
    setPhonevalue(e.target.value)
  }
  
  const updateCity = e => {
    setCityvalue(e.target.value)
  }
  
  return (
    <form id="form" onSubmit={handleSubmit(onSubmit)} className="w-full">
    <div className="p-3">
      <label htmlFor="product" className="block text-sm text-gray-400 mb-2">Select products</label>
      <Select options={options} isMulti name="product" onChange={productChange} className="basic-multi-select" classNamePrefix="select" />
    </div>
    <div className="p-3">
      <label htmlFor="full_name" className="block text-sm text-gray-400 mb-2">Name</label>
      <input {...register("full_name", {required: true})} id="full_name" name="full_name" onChange={updateName} className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Your full name" autoComplete="off" required="" />
      <p className='text-red-500 mt-1 text-sm'>{errors.full_name?.type === 'required' && "Name is required"}</p>
    </div>

    {
      email ? 
      <div className="p-3">
        <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
        <input {...register("email", {required: true, pattern: /^\S+@\S+$/i})} id="email" name="email" onChange={updateEmail} className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Your email address" autoComplete="off" required="" />
        <p className='text-red-500 mt-1 text-sm'>{errors.email?.type === 'required' && "Email is required"} {errors.email?.type === 'pattern' && "Invalid email address"}</p>
      </div>
      : <></>
    }


    {
      phone ? 
      <div className="p-3">
        <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">Phone</label>
        <input {...register("phone", {required: true, pattern: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/})} id="phone" name="phone" onChange={updatePhone} className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" placeholder="Your phone number" autoComplete="off" required="" />
        <p className='text-red-500 mt-1 text-sm'>{errors.phone?.type === 'required' && "Phone is required"} {errors.phone?.type === 'pattern' && "Invalid phone number"}</p>
      </div>
      : <></>
    }


    {
      city ? 
      <div className="p-3">
        <label htmlFor="city" className="block text-sm text-gray-400 mb-2">City</label>
        <input {...register("city", {required: true})} id="city" name="city" onChange={updateCity} className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Your city" autoComplete="off" required="" />
        <p className='text-red-500 mt-1 text-sm'>{errors.email?.type === 'required' && "City is required"}</p>
      </div>
      : <></>
    }

    <div className="p-3 mt-8 relative">
      <p className="absolute -top-0 left-6 bg-white px-2 text-green-400">Preview</p>
      <div className="p-4 border border-green-300  rounded">
        <p className="text-gray-400 mb-1 text-sm">Name: <span className="font-bold text-gray-700">{namevalue}</span></p>
        { email ? <p className="text-gray-400 mb-1 text-sm">Email: <span className="font-bold text-gray-700">{emailvalue}</span></p> : <></> }
        
        { phone ? <p className="text-gray-400 mb-1 text-sm">Phone: <span className="font-bold text-gray-700">{phonevalue}</span></p> : <></> }
        
        { city ? <p className="text-gray-400 text-sm">City: <span className="font-bold text-gray-700">{cityvalue}</span></p> : <></> }
      </div>
    </div>

    <div className="p-3 pt-4">
      <button disabled={disable} className="bg-indigo-800 hover:bg-indigo-900 relative rounded w-full block mt-4 uppercase px-8 py-3 font-bold tracking-widest text-white disabled:opacity-50 disabled:cursor-not-allowed">
      {submit}
      </button>
    </div>
    <ToastContainer />

  </form>
  )
}