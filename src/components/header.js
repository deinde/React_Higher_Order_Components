import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions/index';
class Header extends Component{

	authButton(){
		if(this.props.authenticated){
		 return <button onClick={ () => this.props.authenticate(false)}>Sign Out</button>	
		}
		return <button onClick={ ()=> this.props.authenticate(true)}>Sign In</button>
	}
	render(){
		return(
     <nav className='navbar navbar-light'>
      <ul className='nav navbar-nav'>
       <li className='navbar-item'>
        <Link to='/'>Home</Link>
       </li>
       <li className='navbar-item'>
        <Link to='/resources'>Resources</Link>
       </li>
         <li className='navbar-item'>
         {this.authButton()}
       </li>
      </ul>
    </nav>
		);
	}
}
function mapStateToProps(state){
	return {authenticated:state.authenticated}
}

export default connect(mapStateToProps,actions)(Header);