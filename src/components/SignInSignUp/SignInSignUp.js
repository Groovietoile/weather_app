import { v4 as uuidv4 } from 'uuid';
// import { useHistory } from "react-router-dom";
// import Favorites from '../Favorites/Favorites';
// import {withRouter} from 'react-router-dom';

// props = setIsSignedIn, users, setUserId

const SignInSignUp = (props) => {
    // const history = useHistory();

    function onSignIn(e) {
        e.preventDefault();
        const username = document.getElementById("signin_username").value;
        const pwd = document.getElementById("signin_pwd").value;
        if (!username || !pwd) {
            return;
        }
        const user = props.users.filter((user) => user.username === username);
        if (user.length) {
            if (user[0].password === pwd) {
                alert("Signed in successfully !");
                props.setIsSignedIn(true);
                props.setUserId(user[0].id);
                // TODO : this changes only the url
                // window.history.replaceState(null, '', 'http://localhost:3000/favorites');
                // history.push('/favorites');
                // navigate("/favorites"); 
                // this.props.history.push('http://localhost:3000/favorites');
                // props.history.push("/favorites");
            }
            else {
                alert("Incorrect password.");
            }
        }
        else {
            alert(`The user ${username} does not exist.`);
        }
    }

    function onSignUp(e) {
        e.preventDefault();
        const username = document.getElementById("signup_username").value;
        const pwd = document.getElementById("signup_pwd").value;

        if (!username || !pwd) {
            return;
        }

        if (props.users.filter((user) => user.username === username).length) {
            alert("This username is not available.");
        }

        else {
            fetch('http://localhost:8000/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "id": uuidv4(),
                        "username": username,
                        "password": pwd,
                        "favorites": []
                    }
                )
            }).then(res => res.json())
                .then(res => alert("Signed up successfully !"));
        }
    }

    return (
        <>
            <form>
                <label>
                    <p>Username</p>
                    <input id="signin_username" type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input id="signin_pwd" type="password" />
                </label>
                <div>
                    <button type="submit" onClick={onSignIn}>Sign in</button>
                </div>
            </form>

            <p>No account ?</p>
            <form>
                <label>
                    <p>Username</p>
                    <input id="signup_username" type="text" required />
                </label>
                <label>
                    <p>Password</p>
                    <input id="signup_pwd" type="password" required />
                </label>
                <div>
                    <button type="submit" onClick={onSignUp} >Sign up</button>
                </div>
            </form>
        </>
    )
}
export default SignInSignUp;