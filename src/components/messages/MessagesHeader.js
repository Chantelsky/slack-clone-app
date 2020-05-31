import React from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';

class MessagesHeader extends React.Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading,
    } = this.props;

    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header
          className={'message_header'}
          fluid="true"
          as="h3"
          floated="left"
          style={{ marginBottom: 0 }}
        >
          <span>
            {channelName}
            <Icon name={'star outline'} color="black" />
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>

          {/* Channel Search Input */}
          <Header floated="right">
            <Input
              loading={searchLoading}
              onChange={handleSearchChange}
              className={'header_input'}
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
