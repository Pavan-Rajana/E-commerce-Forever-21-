import { useState } from "react"

const Login = () => {

    const [currentState, setCurrentState] = useState("Sign Up")

    const onSubmitHandler = async (e) => {
        e.preventDefault()
    }

    return (
        <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800" onSubmit={onSubmitHandler}>
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="prata-regular text-3xl">{currentState}</p>
                <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
            </div>
            {currentState === "login" ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-600 rounded-sm" placeholder="Name" required />}
            <input type="email" className="w-full px-3 py-2 border border-gray-600 rounded-sm" placeholder="Enter Your email" required />
            <input type="password" className="w-full px-3 py-2 border border-gray-600 rounded-sm" placeholder="Create Password" required />
            {currentState === "Sign Up" && (
                <input type="password" className="w-full px-3 py-2 border border-gray-600 rounded-sm" placeholder="Confirm Password" required />
            )}
            <div className="w-full cursor-pointer flex justify-between text-md mt-[8px]">
                <p className="hover:underline">Forgot your password?</p>
                {
                    currentState === "login"
                        ? <p className="hover:underline" onClick={() => { setCurrentState('Sign Up') }}>Create Account</p> :
                        <p className="hover:underline" onClick={() => { setCurrentState("login") }}>Login Here</p>
                }
            </div>
            <button className="bg-black text-white px-8 py-1.5 rounded-sm hover:shadow-xl">{currentState === 'login' ? 'Sign In' : 'Sign Up'}</button>
        </form>
    )
}

export default Login