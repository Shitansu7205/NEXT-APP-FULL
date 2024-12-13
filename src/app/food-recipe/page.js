'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Foodapp = () => {


    // const [food, setFood] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('')
    const APP_ID = '911da0c9';
    const APP_KEY = '244eec0f63d7b6a4fd8aa58309fc8332'



    const handleChanges = (e) => {
        setQuery(e.target.value)
    };



    /**
     * Handles form submission by logging the current search query in the console.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!query) {
                toast.error("Invalid Input")
            }
            else {
                const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
                const data = await response.json();
                toast.success('Recipe fetched successfully');
                setRecipes(data.hits)
            }

        } catch (err) {
            console.log(err)

        }






        // console.log(data.hits)
        // console.log(recipe)
    };

    return (
        <>
            {/* <form className=' flex justify-center items-center flex-col mt-44' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter The Food'
                    className=' min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    name='food'
                    value={query}
                    onChange={handleChanges}
                />
                <br />
                <input type='submit' value='Brows Items' className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500' />
            </form> */}
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-20 flex flex-col mx-auto mt-32">
                <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">
                  Make Your Own Recipe
                </h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    Enter the food item you want to browse.
                </p>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter The Food"
                        className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        name="food"
                        value={query}
                        onChange={handleChanges}
                        required
                    />
                    <input
                        type="submit"
                        value="Browse Items"
                        className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                    />
                </form>
            </div>



            <div className='flex flex-wrap justify-center'>
                {recipes.length > 0 && recipes.map((item, index) => {
                    return (
                        <a key={index} href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow m-4 w-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src={item.recipe.image} alt={item.recipe.label} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.recipe.label}</h1>
                                <ul>
                                    {item.recipe.ingredientLines && item.recipe.ingredientLines.map((ingredient, i) => (
                                        <li key={i}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    );
                })}
            </div>

















        </>
    );
};

export default Foodapp;
