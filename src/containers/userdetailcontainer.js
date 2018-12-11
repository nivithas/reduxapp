import React from 'react';
import { connect } from "react-redux";
class UserDetailContainer extends React.Component {
    state = {  }
    render() { 
            if(this.props.activeUser === null){
                return(
                    <div>Click to see the details</div>
                )
            }
            else{
                return(
                    <div>
                        User Details from container
                    <br></br>
                    <br></br>
                    <br></br>
                    Name:<b>{this.props.activeUser.first} {this.props.activeUser.last}</b><br></br>
                    Age: {this.props.activeUser.age}<br></br>
                    Comments: {this.props.activeUser.desc}<br></br>
                    </div>
                )
            }
    }
}
 
function convertStoreToProps(store){
    return{
        activeUser:store.clickeduser
    }
}

export default connect(convertStoreToProps)(UserDetailContainer);