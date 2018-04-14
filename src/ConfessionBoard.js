import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import './ConfessionBoard.css';
import Message from './Message';
import axios from 'axios';

class ConfessionBoard extends Component{
    constructor(){
        super();
        this.state={
            confessionData: []
        }
    }

    refreshConfessionData(){
        var _this = this;
        axios.get('https://love-letter95-server.herokuapp.com/confessions')
        .then(function(response){
            _this.setState({confessionData: response.data.confessions});
            console.log("Retrieve Confession Success");
        })
        .catch(function(error){
            console.log(error);
        })
    }

    componentDidMount(){
        this.refreshConfessionData();
        var _this = this
        document.addEventListener("onConfessionChanged", function(event){
            _this.refreshConfessionData();
            console.log("Heard onConfessionsChanged!");
        })
    }
    
    render(){
        return(
            <Grid className="confession-board">
                <Row>
                    <Col xs={12}>
                        <h1>Past Confessions.</h1>
                    </Col>
                    <Message confessionID="asdasdasd" body="hello world" link="#" publishedAt="1st Mar 2018"/>
                    <Message confessionID="WOOHOWHOW" body="this is a confession" link="#" publishedAt="2nd Mar 2018"/>
                    {this.state.confessionData.map(function(confession,index){
                        return(<Message
                            key={confession._id}
                            confessionID={confession._id}
                            body={confession.message}
                            name={confession.name}
                            publishedAt='today'
                            link="https://google.com.sg"
                        />)
                        })
                    }
                </Row>
            </Grid>
        );    
    }
}

export default ConfessionBoard;