// import { useContext } from 'react';
import signUp from '../../assets/others/authentication2.png'
// import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    // const {createUser} = useContext(AuthContext)

    // const handleSignUp = event => {
    //     event.preventDefault()
    //     const form = event.target
    //     const name = form.name.value
    //     const email = form.email.value
    //     const password = form.password.value
    //     const loginInfo = {
    //         name,
    //         email,
    //         password
    //     }
    //     console.log(loginInfo)

    //     createUser(email, password)
    //     .then(result => {
    //         const user = result.user
    //         console.log(user)
    //     })
    //     .catch(error => {
    //         console.error(error.message)
    //     })

    // }

    return (
        <div className="hero min-h-screen bg-base-200 py-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <img src={signUp} alt="" />
                </div>
                <div className="card w-full lg:w-1/2 max-w-sm">
                    <h1 className="text-5xl font-bold text-center">Sign Up </h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered rounded-sm" />
                        </div>
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
                        <div className="form-control mt-6">
                            <input className="btn border-none bg-yellow-500 rounded-sm" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;