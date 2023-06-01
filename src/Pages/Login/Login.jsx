import { useContext, useEffect, useRef, useState } from 'react';
import login from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

    const captchaRef = useRef()
    const [disabled, setDisabled] = useState(true)

    const {signIn} = useContext(AuthContext)



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const loginInfo = {
            email,
            password
        }
        console.log(loginInfo)

        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error.message)
        })

    }
    
    const handleCaptchaValidation = () => {
        const user_captcha_value = captchaRef.current.value
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }   
    
    return (
        <div className="hero min-h-screen bg-base-200 py-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card w-full lg:w-1/2 max-w-sm">
                    <h1 className="text-5xl font-bold text-center">Login </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered rounded-sm" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered rounded-sm" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input ref={captchaRef} type="text" name='captcha' placeholder="password" className="input input-bordered rounded-sm" />
                            <button onClick={handleCaptchaValidation} className='btn btn-outline btn-xs mt-2'>Validation</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn border-none bg-yellow-500 rounded-sm" type="submit" value="Login" />
                        </div>
                        <p><small>New here? <Link to="/signUp">Create a New Account</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;