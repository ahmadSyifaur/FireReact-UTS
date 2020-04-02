import React,{Component} from 'react'
import Navbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../config/firebase'

class Register extends Component{
    state={
        email : "",
        password : ""
    }
    
    handleChangeText =(e) =>{
        // console.log(e.target.id)
        this.setState({
            [e.target.id] : e.target.value,
        })
    }

    handleRegisterSubmit =() =>{
        const {email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email,   password).then(res =>{
            console.log('Success :  ', res)
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    }

    render(){
        return(
            <div>
                <Navbar />
                <div className="container">
                    <form className="col col-md-6">
                        <div className="form-goup">
                            <label htmlFor="Email">Email</label>
                            <input type="email" id="email" className="form-control" placeholder="Email" onChange={this.handleChangeText}/>
                        </div>
                        <div className="form-goup">
                            <label htmlFor="Password">Password</label>
                            <input type="password" id="password" className="form-control" placeholder="Min 6 Character" onChange={this.handleChangeText}/>
                        </div>
                        <br/>
                    </form>
                    <button  className="btn btn-primary" onClick={this.handleRegisterSubmit} >Register</button>
                </div>
            </div>
        )
    }
}
export default Register;