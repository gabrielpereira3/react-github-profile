import React from 'react';
import './App.css';

class App extends React.Component {

  setState = {
    url: []
  };

  handleButtonClick(){
    this.url = '';
  }

  render(){
    return (
      <div className="card">
        <form action={url}>
          <label>Type a github username</label><br/>
          <input type='text'></input>
          <button onClick={handleButtonClick}>Submit</button>
        </form>
        {/* <form action="/action_page.php">
          <label for="fname">First name:</label><br>
          <input type="text" id="fname" name="fname" value="John"><br>
          <label for="lname">Last name:</label><br>
          <input type="text" id="lname" name="lname" value="Doe"><br><br>
          <input type="submit" value="Submit">
        </form>  */}
      </div>
    );
  }

}

// getUserInfo(url){
//   const info = fetch(url);
// }

export default App;
