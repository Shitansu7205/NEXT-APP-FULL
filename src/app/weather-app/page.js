'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ThermometerSnowflake, Gauge, Heater, Wind, MapPinned } from 'lucide-react';

import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';


const Weather = () => {

    const [query, setQuery] = useState('')
    const [weatherdata, setWeatherdata] = useState([
        {
            temp: '',
            pres: '',
            humidity: ''
        }
    ])
    const [country, setCountry] = useState('')
    const [wind, setWind] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    // const [temp , setTemp] = useState('')


    const router = useRouter();



    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (!query) {
                // alert("Invalid Input")
                toast.error("Invalid Input");
                // window.location.reload();
            }
            else {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=f5a3cdfd21df128b747ae8cd02326ee1`);
                if (!response.ok) {
                    const errorData = await response.json();
                    toast.error(errorData.message || "failed");
                    // setErrorMessage(errorData.message || "failed");
                    // setWeatherdata([
                    //     {
                    //         temp: '',
                    //         pres: '',
                    //         humidity: ''
                    //     }
                    // ]);
                    return;

                }
                else {
                    const data = await response.json();
                    toast.success('Weather  fetched successfully');
                    setWeatherdata(data.main)
                    setCountry(data.sys.country)
                    setWind(data.wind.speed)
                }
            }

        } catch (err) {
            console.log(err)
        }




    }


    // hide the error msg
    const hideErrorMsg = () => {
        document.getElementById('alert-1').style.display = 'none'
        window.location.reload();
    }
    return (
        <>
            {/* {errorMessage && (
                <div
                    id="alert-1"
                    className="flex items-center p-4 mb-4 text-blue-800 rounded-lg  dark:bg-gray-800 dark:text-blue-400 mt-20   "
                    role="alert"
                >
                    <svg
                        className="flex-shrink-0 w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="ms-3 text-sm font-medium">
                        Enter The Correct city Name{" "}
                        <a href="#" className="font-semibold underline hover:no-underline">
                        </a>

                    </div>
                    <button
                        type="button"
                        id='alertbtn'
                        className="ms-auto -mx-1.5 -my-1.5 bg-red-700 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                        data-dismiss-target="#alert-1"
                        aria-label="Close"
                        onClick={hideErrorMsg}
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>

            )} */}

            <div className=' flex justify-center items-center pt-10'>

                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 mt-20 flex flex-wrap justify-center ">
                    <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                        Wheather App
                    </h5>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Search the name Of the city to view deatils.</p>

                    <form className=' flex justify-center items-center flex-row mt-7 ' onSubmit={handleSubmit}>
                        <input type='text' placeholder='Enter City Name' className=' mr-5 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6' onChange={handleChange} value={query} />

                        <Button variant='default' size='lg'>Click Me</Button>
                    </form>

                    <ul className="my-4 space-y-3">
                        <li>
                            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white" style={{ width: '350px' }}>
                                <MapPinned />
                                <span className="flex-1 ms-3 whitespace-nowrap">Country <span className='ml-32'> </span></span>
                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">{country}</span>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <ThermometerSnowflake />
                                <span className="flex-1 ms-3 whitespace-nowrap">Temprature </span>
                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">{weatherdata.temp}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <Gauge />
                                <span className="flex-1 ms-3 whitespace-nowrap">Pressure </span>
                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"> {weatherdata.pressure}</span>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <Heater />
                                <span className="flex-1 ms-3 whitespace-nowrap">Humidity </span>
                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">{weatherdata.humidity}</span>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <Wind />
                                <span className="flex-1 ms-3 whitespace-nowrap">Wind Speed </span>
                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">{wind}</span>

                            </a>
                        </li>

                    </ul>
                    <div>
                        {/* <Link to="/" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            Go to the home page
                        </Link> */}
                        <button onClick={() => { router.push('/') }}>Go to home page</button>


                    </div>
                </div>

            </div>

        </>
    )
}

export default Weather