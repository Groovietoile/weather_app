const SignInSignUp = () => {
    return (
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Sign in</button>
            </div>
            <p>No account ?</p>
            <button type="submit">Sign up</button>
        </form>
    )
}
export default SignInSignUp;