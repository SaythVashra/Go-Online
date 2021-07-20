function Login() {

    return (
        <div className={"login-container"}>

            <h1>What's your nickname??</h1>

            <form method={"post"} action={"/login"}>
                <input type={"text"} autoFocus={true}></input>
                <p>This nickname is already being used.</p>
                <button type={"submit"}>Done!!</button>
            </form>

        </div>
    )
}

export default Login;