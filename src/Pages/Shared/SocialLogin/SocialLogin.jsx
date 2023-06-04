import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext)
    
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user 
            console.log(loggedUser)


            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
                        fetch('http://localhost:5000/users',{
                            method: 'POST',
                            headers: {
                                'content-type' : 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(() => {
                                    navigate(from, { replace: true });
                            })


        })
    }

    return (
        <div className="mx-auto">
            <p className="mb-3 font-semibold">Or signup with</p>
            <div className="flex gap-4 text-3xl">
                <FaFacebook></FaFacebook>
                <FaGoogle className="cursor-pointer" onClick={handleGoogleSignIn}></FaGoogle>
                <FaGithub></FaGithub>
            </div>
        </div>
    );
};

export default SocialLogin;