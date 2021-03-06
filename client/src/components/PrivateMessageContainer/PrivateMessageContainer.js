import React from 'react';
import { connect } from 'react-redux';
import PrivateMessageReceive from '../PrivateMessageReceive/PrivateMessageReceive';
import PrivateMessageSend from '../PrivateMessageSend/PrivateMessageSend';
import PrivateMessageHistory from '../PrivateMessageHistory/PrivateMessageHistory';
import { closePrivateChat } from '../../actions/privateChatActions';

class PrivateMessageContainer extends React.Component {

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    componentDidMount() {

    }

    closePrivateChatWindow = e => {
        e.stopPropagation();
        e.preventDefault();

        this.props.closePrivateChat(false);

    }

    render() {

        const { currentPrivateChat } = this.props;
        //console.log(currentPrivateChat);
        if(currentPrivateChat !== false) {
            return (
                <div className="chatwindow-child chatwindow-child-private">
                    <div className="private-chat-window-child">
                        <div className="chat-top">
                            <div className="chat-top-right"> { this.props.currentPrivateChat } </div>
                            <div className="chat-top-left">
                                <button
                                    type="button"
                                    className="btn-small"
                                    onClick={this.closePrivateChatWindow}> X
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="private-chat-window-child scrollable">
                        <PrivateMessageHistory />
                        <PrivateMessageReceive />
                    </div>
                    <div className="private-chat-window-child">
                        <PrivateMessageSend />
                    </div>
                </div>
            );
        } else {
            return (
                null
            );
        }
    }
};

const mapStateToProps = ({ currentPrivateChat }) => {
    return { currentPrivateChat };
}

export default connect(mapStateToProps,{ closePrivateChat })(PrivateMessageContainer);
