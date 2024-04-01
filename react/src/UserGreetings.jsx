
function UserGreetings(props){
    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2> 
    const loginPrompt = <h2 className="login-prompt">
                        Please login if you want to continue
                        </h2>

    return (props.isLoggIn ? welcomeMessage : loginPrompt)
    
    //return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : <h2 className="login-prompt">Please login if you want to continue</h2>)


    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in if you want to continue</h2>
    // }
}

export default UserGreetings