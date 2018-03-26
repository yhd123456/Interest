 import React, { Component } from 'react';	
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { Player } from 'video-react';
class Page extends Component{
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}
	componentDidMount (){	
		let {url:{match:{params}}} = this.props;
		let {arr,data} = this.props;	
		console.log(data)
		console.log(params.id)
//		data2.forEach((e,i)=>{
			this.setState({
			data:data[params.id]
//		})
	})
		
   }
	render(){
			let {arr} = this.props;
			let arr2 = arr?arr:data
//			console.log(arr2)
//			console.log(arr.type)
			let {data} = this.state;
			console.log(data)
//
				return(					
				<div id="indexContainer">								
			<div className="page_top">	
			</div>
			<div className="tt_ad_img">
					<img src={arr.image1}/>
					</div>
		    <Player>
		      <source src={arr.videouri} />
		    </Player>
					<div className="article">
					<div className="article_head">
						<h1 
						className="article__title"
						>
						</h1>
					</div>
					
					<div className="article_const">
						
					</div>
				</div>
				</div>	
					
				)	
}
}
export default Page;