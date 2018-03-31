import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import './Main.css';

class ConfessionBoard extends Component{
    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title><b>Confession ID:</b>{this.props.confessionID}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <p>
                                    {this.props.body}
                                </p>
                            </Panel.Body>
                            <Panel.Footer>
                                <a href="{this.props.link}">Published: {this.props.publishedAt}</a>
                                <span className="pull-right"><i className="fa fa-user fa-fw"/>{this.props.name}</span>
                            </Panel.Footer>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );    
    }
}

export default ConfessionBoard;