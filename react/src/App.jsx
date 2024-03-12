//Conditional rendering = allows you to control what gets rendered 
//   in your application based on certain conditions
//    (show , hide, or change components)
import UserGreeting from "./UserGreetings";
function App() {
    return(
      <>
        <UserGreeting isLoggedIn={true} username="Precilia"/>
      </>
    );
}

export default App
