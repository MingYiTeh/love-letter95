import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Main.css';
import Form from './Form';

class Main extends Component{
    render(){
        return(
            <Grid fluid className="main-body">
                <Row>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <h1>Confessions.</h1>
                    </Col>
                    <Col xs={12} sm={6} md={9} lg={9}>
                        <h1 className="pull-right">Your one stop solution to confessing.</h1>
                    </Col>
                </Row>
                {/* <Row>
                    <Form/>
                </Row> */}
            </Grid>
        );    
    }
}

export default Main;