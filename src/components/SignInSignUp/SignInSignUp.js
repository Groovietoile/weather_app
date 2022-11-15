const SignInSignUp = () => {
    return (
        <>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" required />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" required />
                </label>
                <div>
                    <button type="submit">Sign in</button>
                </div>
            </form>
            <p>No account ?</p>
            <button type="submit">Sign up</button>
        </>
    )
}
export default SignInSignUp;