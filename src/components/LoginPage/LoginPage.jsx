const LoginPage = () => {
    const googleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    }

    return (
        <div>
            <div>
                Login Here
            </div>

            <div onClick={googleLogin}>
                Login with Google
            </div>
        </div>
    )
}

export default LoginPage;