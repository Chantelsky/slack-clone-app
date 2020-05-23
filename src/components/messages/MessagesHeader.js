import React from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';

class MessagesHeader extends React.Component {
  render() {
    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>
            Channel
            <Icon name={'star outline'} color="black" />
          </span>
          <Header.Subheader>2 Users</Header.Subheader>

          {/* Channel Search Input */}
          <Header floated="right">
            <Input
              size="mini"
              icon="search"
              name="searchTerm"
              placeholder="search Messages"
            />
          </Header>
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;