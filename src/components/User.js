import { Component } from 'react';
import classes from './User.module.css';

//Class-based Component
class User extends Component {

  //Lifecycle Method - componentWillUnmount
  componentWillUnmount() {
    console.log("Component will unmount.")
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

//Functional Component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
