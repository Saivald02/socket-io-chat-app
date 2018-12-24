import React from 'react';

import MessageHistory from '../MessageHistory/MessageHistory';
import Messages from '../Messages/Messages';


//import socketIOClient from "socket.io-client";

export class Temp extends React.Component {

    componentDidMount() {

        //socket.emit("FromAPISelfoss", data => this.setState({ selfoss: data}));
        //socket.on("newUser", data => this.setState({ newUser: data }));

        //socket.emit("clientRender", "hello server");
    }


    render() {
        return (
            <div>
                <MessageHistory />
                <Messages />
            </div>
        );
    }
}

export default Temp;

/*
axios.all([
    axios.get('https://apis.is/weather/observations/is?stations=6310,6310?time=1h'),
    axios.get('https://apis.is/weather/observations/is?stations=6222,6222?time=1h')
])
.then(axios.spread((selfoss, hvolsollur) => {
    // do something with both responses
}));
*/
