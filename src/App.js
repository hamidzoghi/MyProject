import React, {Fragment} from 'react';
import Mainmenu from './MainMenu';


    class App extends React.Component {
    constructor() {
        super();
        this.state={
            firstName:"hamid",
            lastName:"zoghi"
        }
    }

    render() {
        const CarInfo={
            name:"Pjoo",
            color:"red"
        }

        return (
            <Fragment>
                <Mainmenu CarInfo={this.state}/>
                <ul>
                    <li>Number one {this.state.firstName}</li>
                    <li>Number tow {this.state.lastName}</li>
                    <li>Number three</li>
                    <li>Number four</li>
                    <li>Number five</li>
                </ul>
            </Fragment>
        )
    }
}

export default App;
