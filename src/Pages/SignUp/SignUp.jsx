import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import signUp from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updatUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updatUser(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                            const saveUser = {name: data.name, email: data.email}
                        fetch('http://localhost:5000/users',{
                            method: 'POST',
                            headers: {
                                'content-type' : 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Sign up Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })


                    })
            })
            .catch(error => {
                console.error(error.message)
            })
    };
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
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="photoURL" {...register("photoURL", { required: true })} className="input input-bordered rounded-sm" />
                            {errors.photoURL && <span>photoURL required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered rounded-sm" />
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
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;