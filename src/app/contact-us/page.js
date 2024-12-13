'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {


    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const router = useRouter()

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const mailChange = (e) => {
        setMail(e.target.value)
    }
    const messageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        const fromData = { name, mail, message }

        if (!name || !mail || !message) {
            toast.warn("Enter All the fileds")
        }
        else {
            try {
                const responce = await fetch(`/api/users/contact`, {
                    method: "POST",
                    headers: {
                        Content_Type: "application/json",
                    },
                    body: JSON.stringify(fromData)
                })
                if (responce.ok) {
                    toast.success("Submitted Sucessfully...")
                    router.push('/')

                }
                else {
                    toast.error("Unable to Send the Data")
                }

            } catch (error) {
                toast.error("Failed to submit the data")
            }

        }


    }




return (
    <>
        {/* <form className='mt-28 flex flex-col w-1/5 mx-auto'>
                <label htmlFor="mail">Enter Name</label>
                <input type="text" value={name} onChange={nameChange} className='text-black' required />
                <label htmlFor="mail">Enter Mail</label>
                <input type="mail" value={mail} onChange={mailChange} className='text-black' required />
                <input type="submit" value="submit" onClick={handleSubmit} className='mt-4 bg-blue-500 ' />
            </form> */}







        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto flex flex-col items-center px-6 py-12">
                <div className="lg:flex lg:items-center lg:justify-center lg:w-full lg:max-w-5xl">
                    <div className="lg:w-1/2 lg:mx-6">

                        <img class="hidden object-cover rounded-full lg:block shrink-0 w-60 h-60" src="https://media.licdn.com/dms/image/v2/C5603AQH_BDCDNxP4zQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1661054452151?e=1735171200&v=beta&t=SQbAI69I8LSzBqwRrOlHmT0Vq7kkEtlURJFebkkaujw" alt="" />
                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="mx-2 text-gray-700 whitespace-nowrap w-72 dark:text-gray-400 overflow-x-visible">
                                    Near Khandagiri , Bhubaneswar , Odisha, India.
                                </span>
                            </p>
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                    +91- 7205121943
                                </span>
                            </p>
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                    shitansukumargochhayat@gmail.com
                                </span>
                            </p>
                        </div>
                        <div className="mt-6 w-80 md:mt-8">
                            <h3 className="text-gray-600 dark:text-gray-300 text-left">Follow us</h3>
                            <div className="flex justify-start mt-6 space-x-4 mb-2">

                                <a href="https://github.com/Shitansu7205" aria-label="Sign up with GitHub">
                                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.53c.4.073.55-.174.55-.386 0-.192-.007-.882-.013-1.598-2.24.486-2.713-1.077-2.713-1.077-.366-.933-.894-1.182-.894-1.182-.73-.5.055-.49.055-.49.807.056 1.23.828 1.23.828.715 1.222 1.875.87 2.33.664.072-.518.28-.87.51-1.071-1.77-.2-3.63-.885-3.63-3.95 0-.872.313-1.585.83-2.148-.083-.201-.36-1.016.079-2.114 0 0 .67-.214 2.2.82A7.592 7.592 0 0 1 8 2.25c.68.003 1.36.092 2 .27 1.52-1.034 2.19-.82 2.19-.82.44 1.098.163 1.913.08 2.114.52.563.83 1.276.83 2.148 0 3.067-1.86 3.747-3.63 3.95.29.25.55.746.55 1.5 0 1.078-.007 1.947-.007 2.205 0 .215.15.463.55.386A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/shitansu-kumar-gochhayat-91b7a5241/" aria-label="Sign up with LinkedIn">
                                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M1.146 0C.514 0 0 .514 0 1.146v13.708C0 15.486.514 16 1.146 16h13.708C15.486 16 16 15.486 16 14.854V1.146C16 .514 15.486 0 14.854 0H1.146zm3.778 13.333H2.29V6.636h2.634v6.697zM3.695 5.8a1.547 1.547 0 1 1 0-3.095 1.547 1.547 0 0 1 0 3.095zM13.57 13.333h-2.405v-3.516c0-.839-.017-1.917-1.168-1.917-1.169 0-1.352.914-1.352 1.847v3.586h-2.403V6.636h2.305v.918h.034c.322-.61 1.108-1.253 2.285-1.253 2.441 0 2.893 1.609 2.893 3.702v4.33z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Sign up with Facebook">
                                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.5 0h-21C.672 0 0 .672 0 1.5v21c0 .828.672 1.5 1.5 1.5h21c.828 0 1.5-.672 1.5-1.5v-21C24 .672 23.328 0 22.5 0zm-3.75 12h-3v10.5h-4.5V12h-2.25V9h2.25V7.5c0-2.25 1.125-3.75 3.75-3.75h3v3h-2.25c-.375 0-.75.375-.75 1.125V9h4.5l-.75 3z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Sign up with Microsoft">
                                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>





                    <div className="mt-8 lg:w-1/2">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl text-center">
                                Let’s talk
                            </h1>
                            <p className='text-gray-500'>Ask us everything and we would love to hear from you

                            </p>
                            <form className="mt-6">
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={name}
                                        onChange={nameChange}
                                    />
                                </div>
                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="johndoe@example.com"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={mail}
                                        onChange={mailChange}
                                    />
                                </div>
                                <div className="w-full mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Message
                                    </label>
                                    <textarea
                                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        placeholder="Message"
                                        defaultValue={""}
                                        value={message}
                                        onChange={messageChange}
                                    />
                                </div>
                                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={handleSubmit}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>
)
}

export default page
