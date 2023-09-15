import { SiLeetcode } from "react-icons/si"
import {useState} from "react"
import {Input } from "./index"
import { Link } from "react-router-dom"
import { post, setTokenCookie } from "../lib/util";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const passwordChange = (e) => {
        setPassword(e.target.value);
    };
    const confirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const onSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const response = await post("/signup", { email, password });
        const responseJson = await response.json();
        if (responseJson.success) {
            setTokenCookie(responseJson.data.token, 1);
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
        console.log(responseJson.message)
        alert(responseJson.message);
       
    };

  return (
      <div className="flex-grow flex justify-center items-center ">
          <form className="p-8 flex flex-col rounded-xl w-[30rem] bg-white  mx-auto gap-6 justify-center  ">
           <div className="flex flex-col justify-center items-center ">
           <SiLeetcode className="text-5xl"/>
                  <h1 className="font-mono text-2xl">LETSCODE</h1>
           </div>
          
              <Input onChange={emailChange} placeholder="Email" type="email"/>  
              <Input onChange={passwordChange} placeholder="Password"type="Password" />  
              <Input onChange={confirmPasswordChange} placeholder="Confirm Password" type="Password"  />  
              

              <button
                  onClick={onSignup}
                  type="submit"
                  className="bg-sky-200 hover:bg-sky-700 text-white font-bold py-2 px-4 "
              >
                  Submit
              </button>  

              <div className="flex justify-center text-sm gap-2">
                  <p className="text-slate-500">Already have an account?</p>
                  <Link className="text-slate-800 font-bold" to="/login">
                      Login
                  </Link>
              </div> 
         
          <button type="" />    
             
           
       </form>
    </div>
  )
}

export default SignUp