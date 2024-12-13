
"use client"
import {useRouter} from 'next/navigation'
const Aboutshiatnsu = ()=>{
    const router = useRouter()
    const navigate = (name)=>{
        router.push(name);
        router.push(name);

    }
    return(
        <>
        <h1 className="text-3xl font-bold  text-red-500  text-center ">Shiatnsu Is a Good Boy</h1>
        <button onClick={()=>{navigate('/')}}>Go To Home Page</button> <br/>
        <button onClick={()=>{navigate('/login')}}>Go To Login Page</button>
        </>
    )
}

export default Aboutshiatnsu