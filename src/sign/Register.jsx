import React,{useState} from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Register =()=>{
    const Navigate = useNavigate();
    const [info,setInfo]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(info.password !== info.confirmPassword){
            alert("Passwords don't match");
            return;
        }
        try{
            const userCredentials = await createUserWithEmailAndPassword(auth,info.email,info.password);
            const user = userCredentials.user;
            await sendEmailVerification(user);
            Navigate('/');
        }catch(err){console.log(err);}
    }

    return <div className="container flex flex-col gap-y-4">
        <div className="text-center flex flex-col gap-y-2">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">Register for SYBG</h2>
        <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">
            Join the Syrian Youth Baghdad Gathering community! Sign up to stay updated
            on the latest events and activities, and easily manage your attendance.
            Fill in the form below to create your account.
        </p>
        </div>

        <form onSubmit={handleSubmit} className="formInput flex flex-col gap-y-8">

            <div className="flex flex-col gap-y-8">
            <input type="text" placeholder="Full name"
            onChange={(e)=>setInfo((prev)=>({...prev,fullName:e.target.value}))}/>
            <input type="email" placeholder="Email address"
            onChange={(e)=>setInfo((prev)=>({...prev,email:e.target.value}))}/>
            <input type="password" placeholder="password"
            onChange={(e)=>setInfo((prev)=>({...prev,password:e.target.value}))}/>
            <input type="password" placeholder="confirm password"
            onChange={(e)=>setInfo((prev)=>({...prev,confirmPassword:e.target.value}))}/>
            </div>

            <button type="submit"
            className=" h-10 rounded-lg bg-third-fc text-border3-color">
                Register
            </button>
        </form>
    </div>
}