import React,{Component} from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent){
	class Authentication extends Component{
		// this is giving Authentication Component access to router 
		//Bypassing normal order and directly referencing it!!
		//The trick is React forces you to define the context of whatever you want to use
		//To prevent abuse!!
		//static is essentially saying Authintication.contextTypes!!
		//making it a class level property
		//meaning any function inside of Authenticate has access to contextTypes
		//here I am declaring router as the context. I am giving it a value of React.PropTypes.Object
		//This gives me access to the router object and all its methods
		static contextTypes ={
    
     router:React.PropTypes.Object
		}
		//test to access defined class level property router. This is how to do this
		//when component about to mount go to index.html
		componentWillMount(){
     if(!this.props.authenticated){
     	 this.context.router.push('/');
     }
  
     }
    componentWillUpdate(nextProps){
     	if(!nextProps.authenticated){
     		this.context.router.push('/')
     	}
		}

		render(){
			console.log('Rendering Authenticated!!!', this.props.authenticated);
			console.log('Rendering The context!!', this.context)
			return <ComposedComponent {...this.props} />
		}
	}
	function mapStateToProps(state){
		return {authenticated:state.authenticated}
	}
 return connect(mapStateToProps)(Authentication);
}