"use client"
import Image from 'next/image';
import RegisterImage from '../../../assets/logos/Pexels-Photo-by-Snapwire.png';
import cardUser from '../../../assets/logos/cardUser.png';
import { Box, Typography } from "@mui/material";
import { useState } from 'react';
import styles from "../styles/formRegister.module.css";

export default function FormRegister() {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    subject:'',
    message:''

  })

  const onSubmit = (data) => console.log(data)

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({...inputs, [name]: value})
  }

  return (
    <section className='w-full'>
      <Box className="flex flex-row justify-center" sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(101, 147, 189, 0.4) 0%,  rgba(101, 147, 189, 0.4) 50%, rgba(218, 218, 218, 0.1) 100%), url(${RegisterImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}>
        <Box component="form" display="flex" flexDirection="column" className=' px-10 flex flex-col w-full md:w-3/4 xl:w-1/2 pt-20 pb-20 max-w-5xl' onSubmit={onSubmit}>
          <Typography className={styles.line_orange_buttom +' text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center text-primary relative'}>REGISTER NOW</Typography>
          <Box className="flex flex-col md:flex-row items-center">
            <Image src={cardUser} alt='benky banner' className='md:mr-10 mb-10 md:mb-0'/>
            <Typography className='text-2xl font-bold  text-primary'>Be part of the new experience in transfers, BENKY has a team ready to give you the full access</Typography>
          </Box>
            <Box className="mt-10">
              <Box className="sm:col-span-4">
                <label htmlFor={'name'} className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <Box className="mt-2">
                  <Box className="block text-sm font-medium leading-6 text-gray-900">
                    <input name='name' value={inputs.name} onChange={onChange} type="text" className="border-0 bg-white py-3 pl-5 text-black placeholder:text-gray-400 w-full" placeholder='Name'/>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="mt-10">
              <Box className="sm:col-span-4">
                <label htmlFor={'E-mail'} className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                <Box className="mt-2">
                  <Box className="block text-sm font-medium leading-6 text-gray-900">
                    <input name='email' value={inputs.email} onChange={onChange} type="email" className="border-0 bg-white py-3 pl-5 text-black placeholder:text-gray-400 w-full" placeholder='E-mail'/>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="mt-10">
              <Box className="sm:col-span-12">
                <label htmlFor={'Phone_Number'} className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <Box className="mt-2">
                  <Box className="block text-sm font-medium leading-6 text-gray-900">
                    <input name='phone' value={inputs.phone} onChange={onChange} type="number" className="border-0 bg-white py-3 pl-5 text-black placeholder:text-gray-400 w-full" placeholder='Phone Number'/>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="mt-10">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
              <Box className="mt-2">
                <select value={inputs.country} onChange={onChange} name="country" autoComplete="country-name" className="bg-white py-3 pl-5 text-black placeholder:text-gray-400 w-full" placeholder='Country'>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </Box>
            </Box>
            <Box className="mt-10">
              <Box className="sm:col-span-4">
              <Box className="mt-2">
                  <Box className="block text-sm font-medium leading-6 text-gray-900">
                    <input name='subject' value={inputs.subject} onChange={onChange} type="text" className=" bg-white py-3 pl-5 text-black placeholder:text-gray-400 w-full" placeholder='subject' />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="mt-10">
              <Box className="sm:col-span-4">
                <label htmlFor={'name'} className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                <Box className="mt-2">
                  <Box className="block text-sm font-medium leading-6 text-gray-900">
                    <textarea name='message' value={inputs.message} onChange={onChange} type="text" className="border-0 bg-white py-3 pl-5 text-black placeholder:text-gray-400 w-full min-h-32" placeholder='Message'/>
                  </Box>
                </Box>
              </Box>
            </Box>
            <button type="button" className="mt-3 text-white w-48 bg-custom_purple hover:bg-custom_purple focus:ring-4 focus:ring-custom_purple font-medium  text-sm px-5 py-2.5 me-2 mb-2  dark:hover:bg-custom_purple focus:outline-none dark:focus:custom_purple">Send</button>
        </Box>
      </Box>
     
    </section>
  );
}