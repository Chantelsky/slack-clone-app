import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { useStore } from 'react-redux';

class DirectMessages extends React.Component {
  state = {
    user: this.props.currentUser,
    users: [],
  };

  componentDidMount() {
    if (this.state.user) {
      this.addListeners(this.state.user.uid);
    }
  }

  addListeners = (currentUserUid) => {};

  isUserOnline = (user) => user.status === 'online';

  changeChannel = (user) => {
    const channelId = this.getChannelId(user.uid);
  };

  getChannelId = (userId) => {
    const currentUserId = this.state.user.uid;
  };

  render() {
    const { users } = this.state;

    return (
      <Menu.Menu className="menu">
        <Menu.Item>
          <span>
            <Icon name="mail" />
            Direct Messages
          </span>{' '}
          ({users.length})
        </Menu.Item>
        {users.map((user) => (
          <Menu.Item
            key={user.uid}
            onClick={() => this.changeChannel(user)}
            style={{ opacity: 0.7, fontStyle: 'italic' }}
          >
            <Icon
              name="circle"
              color={this.isUserOnline(user) ? 'green' : 'red'}
            />
          </Menu.Item>
        ))}
      </Menu.Menu>
    );
  }
}

export default DirectMessages;
