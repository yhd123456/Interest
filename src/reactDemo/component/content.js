import React, {Component} from 'react';
import {
	Link
} from 'react-router-dom';
import { PullToRefresh, Button } from 'antd-mobile';
class Content extends Component{
	constructor(props){
		super(props);
		this.state = {
			refreshing: false,
      		down: true,
	        height: document.documentElement.clientHeight,
      		data: [],
		}
	}
	click = (ev) => {
        let {yz,url,id} = this.props; 
        let {url:{match:{params}}} = this.props;
        console.log(params.id)
        yz(url,ev,params.id); 
 		}
	render(){		
		let {data} = this.props
		let data2 = (data.data)?(data.data):[];
		let {cont,url:{match:{params}}} = this.props;
		let comt2 = data2.map((e,i)=>{	
				return (
					<div 
					key={i}
					onClick={this.click.bind(this,e)}
					>
				    	<div 
				    	className="cont clearfloat"				    	
				    	>
				    	<div className="cont_img">
				    		<img src={e.profile_image} />
				    	</div>
				    	<div className="cont_span">
				    		<span>{e.name}</span><br />
				    		<em>{e.passtime}</em>
				    	</div>
				    	</div>
				    	<ul className="ul clearfloat">
				    			<li>
				    			{<img src={e.bimageuri}/>}
				    			</li>
				    			<li>
				    			</li>
				    			<li>
				    			</li>
				    	</ul>
				    		<div className="foot">
				    		<span>{e.text}</span>
				    		<span></span>
				    		</div>				    		
				</div>
					)
		})			
		return (
			<div>
			      <Button
			        style={{ 
			        	marginBottom: 15 
			        }}
			        onTouchStart={() => this.setState({ 
			        	down: !this.state.down 
			        })}
			      >
			        direction: {this.state.down ? 'down' : 'up'}
			      </Button>
			      <PullToRefresh
			        ref={el => this.ptr = el}
			        style={{
			          height: this.state.height,
			          overflow: 'auto',
			        }}
			        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
			        direction={this.state.down ? 'down' : 'up'}
			        refreshing={this.state.refreshing}
			        onRefresh={() => {
			          this.setState({ refreshing: true });
			          setTimeout(() => {
			          	let {activeNum,url:{match:{params}}} = this.props;
			          	console.log('内容'+activeNum)
			          	cont(activeNum,activeNum,activeNum)
			            this.setState({ 
			            	refreshing: false 
			            });
			          }, 1000);
			        }}
			      >	
			          <section>
						<div className="Album">
						</div>
					    <div className="content"
					    	>
					    <div className="content_top">
					    </div>
					    	{comt2}		    	
					    </div>					    
					</section>			        
			      </PullToRefresh>
			    </div>			    
		);	
		}
	}

export default Content;