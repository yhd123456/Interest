import React, { Component } from 'react';
import {
    Route,
    Link,
    Redirect
  } from 'react-router-dom';
import Page from './component/Page';
import Nav from './component/nav';
import Content from './component/content';
import fetchJsonp from 'fetch-jsonp';
import { Player } from 'video-react';
import { PullToRefresh, ListView, Button } from 'antd-mobile';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:[],
			arr:[],
			nav_data:[
				'动态',
				'推荐',
				'文字',
				'图片',
				'视频'
			],
			activeNum:0,
			paid:[]
		}
	}			
	//ajax 获取数据，
	componentDidMount(){
		const ajax = new XMLHttpRequest;
        ajax.open('get','https://www.apiopen.top/satinApi?type=1&page=0');
        ajax.send();
        ajax.onload = ()=>{
            let data = JSON.parse(ajax.responseText);
			this.setState({
            	data:data
            })
        }
 }	
	//打开内容
	cont = (id,ev,act) => {
		let pid = id?id:0;
		const ajax = new XMLHttpRequest;
        ajax.open('get',`https://www.apiopen.top/satinApi?type=${pid}&page=0`);
        ajax.send();
        ajax.onload = ()=>{
            let data = JSON.parse(ajax.responseText);
			this.setState({
            	data:data,
            	activeNum:ev||act||0	//神来之笔，前面两个全是undefined也不怕
            })
        }
	}
	//打开内页
	yz = (url,ev,id,paid) => {		
        url.history.push(`/page${id}`);
		this.setState({
			arr:ev,
			paid:paid,
		})
   }	
	render(){
		let {data} = this.state		
		let {arr} = this.state;
		let {abb} = this.state;
		let {activeNum} = this.state;
        return (
        <section>
        {/* 跟路径下默认显示头部和默认内容页*/}
        	<Route path="/" render={(props)=>{
                return <Nav url={props} cont={this.cont} activeNum={this.state.activeNum} nav_data={this.state.nav_data}/>
            }}/>
        	{/* 点击进入内页，page路径下，显示page路由 */}
        	<Route path="/page:id" render={(props)=>{
                    return <Page url={props} data={data} arr={this.state.arr} yz={this.yz}/>
            }}/>              	
        	{/*在/路由下，初始化内容*/}
        	<Route exact path="/"  render={(props)=>{
        		return <Content url={props} data={this.state.data} yz={this.yz} cont={this.cont}/>
        	}}/>
            <Route exact path="/content/:id"  render={(props)=>{
        		return <Content url={props} activeNum={this.state.activeNum} nav_arr={this.state.nav_arr} paid={this.state.paid} data={this.state.data} yz={this.yz} cont={this.cont}/>
        	}}/>
        	{/*在content/js路由下，保留头部*/}    
        	<Route exact path="/content/:id"  render={(props)=>{
        		return <Nav url={props} cont={this.cont} activeNum={this.state.activeNum} nav_data={this.state.nav_data}/>
        	}}/>
		</section>
        )
       }
}
export default App;
