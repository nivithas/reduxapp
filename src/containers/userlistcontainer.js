import React from 'react';
import { connect } from "react-redux";
import { bind } from "react-redux";
import { bindActionCreators } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux';
import clickUserAction from '../actions/useractions';


class UserListContainer extends React.Component {
    renderThePropsReceived(){
        console.log(this.props.myusers)
        return this.props.myusers.map((u)=>{
            return(
                <li key={u.id} onClick={()=>this.props.clickUserProp(u)}>
                    {u.first},{u.last}
                </li>
            )
        })
    }
    render() { 
        return ( <div>
            {this.renderThePropsReceived()}
        </div> );
    }
}
function mapPropsToActionsAndDispatchThem(dispatch){
    return bindActionCreators({
        clickUserProp: clickUserAction
    },dispatch)
 }
function convertStoreToProps_custom(store){
    console.log(store)
    return{
        myusers: store.users
    }
}
export default connect(convertStoreToProps_custom,mapPropsToActionsAndDispatchThem)(UserListContainer);