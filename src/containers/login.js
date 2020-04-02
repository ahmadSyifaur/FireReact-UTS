import React,{Component} from 'react'
import Navbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

class Login extends Component{

    changeUser =() =>{
        this.props.changeUsername(0)
    }

    render(){
        return(
            <div>
                <Navbar />
                <p>Login Page {this.props.userName}</p>
                <button onClick={this.changeUser}>Register</button>
                {/* <button>Dashboard</button> */}
            </div>
        )
    }
}
const reduxState=(state)=>({
    popupProps :state.popup,
    userName : state.user
})

const reduxDispatch=(dispatch) =>({
        changeUsername: () => dispatch({type:'CHANGE_USER', value : "wawing dong"})
})
export default connect(reduxState, reduxDispatch) (Login);