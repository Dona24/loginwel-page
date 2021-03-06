import React,{useState} from 'react';
import LoginForm from './components/LoginForm';


function App() {

  const adminUser={
    email:"kumar@gmail.com",
    password:"kumar123"
  }

const [user,setUser]=useState({name:"",email:""});
const [error,setError]=useState("");


const Login=details=>{
  console.log(details);

  if(details.email===adminUser.email && details.password===adminUser.password){
    console.log("Logged In");

    setUser({
     
     email:details.email 
    });
  }
  else{
    console.log("Invalid Details");
    setError("Invalid Details");
  }

  
}
const Logout=()=>{
  console.log("Logout");
  setUser({name:"",email:""});
}


  return (
    <div className="App">
    {(user.email!=="")?(
      <div className="welcome">
        <h2><center>WELCOME</center> <span>{user.name}</span></h2>
        <h4><center>You have logged in with the email address as</center> <span>{user.name}</span></h4>
        <h3><center>kumar@gmail.com </center><span>{user.name}</span></h3>
        
        <button onClick={Logout}>Logout</button>
      </div>
    ):(
      <LoginForm Login={Login} error={error}/>
    )
    }
    </div>
  );
}

export default App;
