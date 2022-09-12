import React from 'react';
import './App.css';
import { loadUsers } from './utils/load-users';

class App extends React.Component {

  state = {
    users: [],
    searchValue: '',
  };

  handleInputChange(){
  }

  handleLoadUsers = async () => {
    const usersAndPhotos = await loadUsers();

    this.setState({
      users: usersAndPhotos
    });
  }

  componentDidMount(){
    this.handleLoadUsers();
  }

  render(){
    const { users } = this.state;

    return (
      <section className='container'>
        <div className="card">
          <input
            type="search"
            className='text-input'
            onChange={this.handleInputChange}
            value={this.searchValue}
            placeholder="Type your search"
          />
        </div>
        <div className="users">
          {users.map((user) => (
              <div className='user'>
                <img src={user.cover} alt={'title'}/>
                <div className="user-content">
                    <h2>{"title"} {"id"}</h2>
                    <p>{"body"}</p>
                </div>
              </div>
          ))}
        </div>
      </section>
    );
  }

}

export default App;
