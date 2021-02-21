import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}
interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onFindUserClick = () => {
    const { name } = this.state;
    const { users } = this.props;
    this.setState({ user: users.find((user) => user.name === name) });
  };

  render() {
    const { user, name } = this.state;
    return (
      <div>
        <input value={name} onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={this.onFindUserClick}>Find user</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
