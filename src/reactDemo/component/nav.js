import React, { Component } from 'react';
import {
	Browserroute as Router,
	Route,
	Link
} from 'react-router-dom';
class Nav extends Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}
	clickNav = (ev) => {
		let {cont,url} = this.props;
		let {url:{match:{params}}} = this.props;		
		let id = params.id;		
		cont(id,ev);
		this.setState({
			activeNum:ev
		})
}
	render(){
		let {data} = this.props;
		let {url:{match:{params}}} = this.props;
		let pid = params.id;	
		let {nav_data} = this.props;
		let {activeNum} = this.props;
		let classN = activeNum == this.props.i  ?   'active' : '' ;
		let nav = nav_data.map((e,i)=>{
			let classN = activeNum == i  ?   'active' : '' ; //默认初始化activeNum为0，点击切换按钮
			return(
			<li key={i} onTouchEnd={()=>{this.clickNav(i)}} >		
                <div className={classN}><Link to={`/content/${(i)+1}`}>{e}</Link></div>
            </li>
           )
		})		
		return(
			<section>
			<header id="head"> 
			<span>趣 味</span>
			</header>
			    <nav id="nav"
			    >			    
			    <ul className="nav_ul clearfloat">
			    {nav}	
			    </ul>
			   </nav>	
			</section>			
		)		
	}	
}
export default Nav;
