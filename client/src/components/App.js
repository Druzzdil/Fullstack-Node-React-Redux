import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>
const Landing = () => <div><h1>Landing</h1></div>



class App extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){

    }
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route  exact path ="/" component={Landing}/>
                        <Route  exact path ="/surveys" component={Dashboard}/>
                        <Route  path ="/surveys/new" component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }   
}

export default App;