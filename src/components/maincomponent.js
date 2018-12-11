import React from 'react';
import UserListContainer from '../containers/userlistcontainer';
import UserDetailContainer from '../containers/userdetailcontainer';

class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>User List:
                    <UserListContainer></UserListContainer>
                </div>
                <hr></hr>
                <div>Details of the user:
                    <UserDetailContainer></UserDetailContainer>
                </div>
            </div>
            
         );
    }
}
 
export default MainComponent;