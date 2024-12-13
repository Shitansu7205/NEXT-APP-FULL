'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';


const Signup = () => {

    const router = useRouter()                      //make the router instance

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const mailChange = (e) => {
        setMail(e.target.value)
    }
    const passChange = (e) => {
        setPassword(e.target.value)
    }



    const getSubmit = async (e) => {
        e.preventDefault()
        const formData = { name, mail, password }

        try {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                const data = await response.json();                 // Parse the response data
                                                                    // alert(data.message || 'User created successfully'); // Provide success message
                toast.success(data.message || 'User created successfully');
            } else {
                const errorData = await response.json();             // Parse the error response
                                                                    // alert(errorData.message || 'Failed to submit the data'); // Show error message
                toast.error(errorData.message || 'Failed to submit the data');
            }
            console.log(response)
            router.push('/login')
           
        }
        catch (err) {
            console.log(err)
        }
    }






    return (
        <>
            <form className="max-w-sm mx-auto mt-32 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800" onSubmit={getSubmit}>
                <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white text-center">
                    Creat Your Account
                </h5>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400 text-center">Enter your correct details to signup</p>
                <div className="flex justify-center mt-6 space-x-4 mb-2">
                    <a href="#" aria-label="Sign up with Facebook">
                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.5 0h-21C.672 0 0 .672 0 1.5v21c0 .828.672 1.5 1.5 1.5h21c.828 0 1.5-.672 1.5-1.5v-21C24 .672 23.328 0 22.5 0zm-3.75 12h-3v10.5h-4.5V12h-2.25V9h2.25V7.5c0-2.25 1.125-3.75 3.75-3.75h3v3h-2.25c-.375 0-.75.375-.75 1.125V9h4.5l-.75 3z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Sign up with GitHub">
                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.53c.4.073.55-.174.55-.386 0-.192-.007-.882-.013-1.598-2.24.486-2.713-1.077-2.713-1.077-.366-.933-.894-1.182-.894-1.182-.73-.5.055-.49.055-.49.807.056 1.23.828 1.23.828.715 1.222 1.875.87 2.33.664.072-.518.28-.87.51-1.071-1.77-.2-3.63-.885-3.63-3.95 0-.872.313-1.585.83-2.148-.083-.201-.36-1.016.079-2.114 0 0 .67-.214 2.2.82A7.592 7.592 0 0 1 8 2.25c.68.003 1.36.092 2 .27 1.52-1.034 2.19-.82 2.19-.82.44 1.098.163 1.913.08 2.114.52.563.83 1.276.83 2.148 0 3.067-1.86 3.747-3.63 3.95.29.25.55.746.55 1.5 0 1.078-.007 1.947-.007 2.205 0 .215.15.463.55.386A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Sign up with LinkedIn">
                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M1.146 0C.514 0 0 .514 0 1.146v13.708C0 15.486.514 16 1.146 16h13.708C15.486 16 16 15.486 16 14.854V1.146C16 .514 15.486 0 14.854 0H1.146zm3.778 13.333H2.29V6.636h2.634v6.697zM3.695 5.8a1.547 1.547 0 1 1 0-3.095 1.547 1.547 0 0 1 0 3.095zM13.57 13.333h-2.405v-3.516c0-.839-.017-1.917-1.168-1.917-1.169 0-1.352.914-1.352 1.847v3.586h-2.403V6.636h2.305v.918h.034c.322-.61 1.108-1.253 2.285-1.253 2.441 0 2.893 1.609 2.893 3.702v4.33z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Sign up with Microsoft">
                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z" />
                        </svg>
                    </a>
                </div>
                <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Username
                </label>
                <div className="flex mb-4">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        id="username"
                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Bonnie Green"
                        required
                        name='name'
                        value={name}
                        onChange={nameChange}

                    />
                </div>

                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your Email
                </label>
                <div className="flex mb-4">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 16"
                        >
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </span>
                    <input
                        type="email"
                        id="email"
                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@domain.com"
                        required
                        name='mail'
                        value={mail}
                        onChange={mailChange}
                    />
                </div>

                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your Password
                </label>
                <div className="flex mb-4">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 1a3 3 0 0 0-3 3v1H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-1V4a3 3 0 0 0-3-3H10zm0 2h4v2h-4V3zm2 8v6h-4v-6H7v-2h6v2h-1z" />
                        </svg>
                    </span>
                    <input
                        type="password"
                        id="password"
                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="••••••••"
                        required
                        name='password'
                        value={password}
                        onChange={passChange}
                    />
                </div>


                <div className="flex justify-center">
                    <button
                        type="submit"
                        className=" w-32 bg-blue-600 text-white font-medium rounded-lg text-sm p-2.5 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"

                    >
                        Sign Up
                    </button>
                </div>

                <div className="flex justify-center mt-5">
                    <p>Already have an account.</p>
                    <p className='text-blue-500'><button onClick={() => router.push('/login')}>Sign in</button></p>
                </div>
            </form>
        </>
    )
}

export default Signup
