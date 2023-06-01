import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import signUp from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const {createUser} = useContext(AuthContext)
    
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error=>{
            console.error(error.message)
        })
    };
    
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
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered rounded-sm" />
                            {errors.name && <span>name required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", {required: true})} className="input input-bordered rounded-sm" />
                            {errors.email && <span>email required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered rounded-sm" />
                            {errors.password?.type === 'minLength' && <p>Password must be 6 character</p>}
                            {errors.password?.type === 'maxLength' && <p>Password must be less then 20 character</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn border-none bg-yellow-500 rounded-sm" type="submit" value="Login" />
                        </div>
                        <p><small>Already registered? <Link to="/login">Go to login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;