'use client'
import { useState } from 'react'
import React from 'react'
import { toast } from 'react-toastify'



const page = () => {

    const [query, setQuery] = useState('')
    const [image, setImage] = useState([])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!query) {
            toast.warn("Invalid Input")
            return;
        }

        const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=TC8m21DG0Z5_ESFdAvK9BAVORwSYuVNJqqAnsL3Fm-I`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            toast.error("Something went wrong")
            return;
        }

        else {
            const data = await response.json()
            setImage(data.results)

            for (let i = 0; i < data.results.length; i++) {
                console.log(data.results[i].urls.full)
            }
            return data;

        }
    }


    return (
        <>
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-20 flex flex-col mx-auto mt-32">
                <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">
                   Want To Downloade Image
                </h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    Enter the Image ,  you want to browse.
                </p>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Image Name"
                        className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        name="food"
                        value={query}
                        onChange={handleChange}

                    />
                    <input
                        type="submit"
                        value="Browse Items"
                        className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                    />
                </form>
            </div>






            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-20">
                {
                    image.map((item, index) => {
                        return (
                            <div key={index}>
                                <img
                                    className=" max-w-full rounded-lg"
                                    src={item.urls.full}
                                    alt=""
                                    style={{height:'200px' , width:'300px', objectFit:'cover'}}
                                
                                />
                            </div>
                        )
                    })
                }


            </div>




        </>
    )
}

export default page