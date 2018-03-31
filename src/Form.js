import React, {Component} from 'react';
import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, Panel, FieldGroup} from 'react-bootstrap'; 
import './Form.css';
import axios from 'axios';
  
  class Form extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            message:''
        }
    }

    handleNameChange(e){
        this.setState({name: e.target.value});
        console.log(e.target.value);
    }

    handleConfessionChange(e){
        this.setState({message:e.target.value});
        console.log(e.target.value);
    }

    refreshConfession(){ //in this case dont need event parameter cause the event has already been prevent default in the method above it. 
        var event = new Event("onConfessionChanged");
        document.dispatchEvent(event);
        console.log("You clicked refresh on submit button");
    }

    handleSubmitClick(e){
        e.preventDefault();
        var _this = this; 
        console.log('{"name":"'+this.state.name+'","message":"'+this.state.message+'"}')
        axios.post('http://localhost:8080/confession', {
            name: this.state.name,
            message: this.state.message
          })
          .then(function (response) {
            console.log(response);
            _this.refreshConfession();
            _this.setState({name:"",message:""});
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    render(){
        return(
            <Grid fluid className="form-body">
                <Row>
                    <Col xs={10} xsOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
                        <Panel bsStyle="info">
                            <Panel.Heading>
                            <Panel.Title componentClass="h3">Confess here!</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <form>  
                                    <FormGroup controlId="Name-Input">
                                        <ControlLabel>Enter Name</ControlLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.name}
                                            placeholder="Anonymous"
                                            onChange={this.handleNameChange.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="Confession-Input">
                                        <ControlLabel>Your confession</ControlLabel>
                                        <FormControl componentClass="textarea" placeholder="I would like to confess that..." rows='8' onChange={this.handleConfessionChange.bind(this)} value={this.state.message}/>
                                    </FormGroup>
                                    <Button type="submit" onClick={this.handleSubmitClick.bind(this)}>Submit</Button>
                                </form>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );    
    }
}

export default Form;