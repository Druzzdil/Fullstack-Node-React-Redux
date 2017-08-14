import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';



const Header = () => <div>header</div>
const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>
const Landing = () => <div>Landing</div>



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path ="/" component={Landing}/>
                     <Route  path ="/surveys" component={Dashboard}/>
                </div>
            </BrowserRouter>
        </div>
    )
}   

export default App;