import { useState } from "react"

const Login = () => {

    const [currentState, setCurrentState] = useState("Sign Up")

    return (
        <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="prata-regular text-3xl">{currentState}</p>
                <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
            </div>
            {currentState === "login" ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-600 rounded-sm" placeholder="Name" required />}
            <input type="email" className="w-full px-3 py-2 border border-gray-600 rounded-sm" placeholder="Enter Your email" required />
            <input type="password" className="w-full px-3 py-2 border border-gray-600 rounded-sm" placeholder="Create Password" required />
            <input type="password" className="w-full px-3 py-2 border border-gray-600 rounded-sm" placeholder="Confirm Password" required />
            <div className="w-full cursor-pointer flex justify-between text-sm mt-[8px]">
                <p>Forgot your password?</p>
                {
                    currentState === "login"
                        ? <p onClick={() => { }}>Create Account</p> :
                        <p onClick={() => { }}>Login Here</p>
                }
                <button type="submit" className="bg-black text-white px-5 py-1.5 rounded-md font-normal">{currentState}</button>
            </div>
        </form>
    )
}

export default Login