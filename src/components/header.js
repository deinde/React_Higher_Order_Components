import React,{Component} from 'react';
import {Link} from 'react-router';
class Header extends Component{
	authButton(){
		return <button>Sign In</button>
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


export default Header;