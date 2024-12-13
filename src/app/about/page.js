
"use client";
import {useRouter} from 'next/navigation';
const About = () =>{
    const router = useRouter();
    const navigate = (name)=>{
        router.push(name);
        
    }
    return (
        <div className=''>
            <h1 className="text-3xl font-bold  text-red-500  text-center ">This is my About us Page</h1>
            <a href="/login">Login</a>

            <button onClick={()=>{navigate('/login')}}>Go To Login</button>
            <button onClick={()=>{navigate('/')}}>Go To Home</button> <br/>
            <button onClick={()=>{navigate('/about/about-shitansu')}}>About shita</button>

        </div>
    );
}
export default About