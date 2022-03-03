import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/users/actions";
import { Link } from "react-router-dom";
import ProjectId from "./registereduser/projectId";
import unregisteredUserActions from '../redux/unregistereduser/actions';
import projectMembershipActions from '../redux/projectmembership/actions';

export default function RegisteredUser() {

    const dispatch = useDispatch();

    const RegisteredUsers = useSelector(
        (state) => state.registeredUserReducer
    );
        console.log(RegisteredUsers)

    const UnregisteredUsers = useSelector(
        (state) => state.unregisteredUserReducer
    )
        console.log(UnregisteredUsers)

    const ProjectMembership = useSelector(
        (state) => state.projectMemberships
    )
        console.log(ProjectMembership)

    useEffect(()=>{
        dispatch({type:actions.GET_ALL_USERS});
        dispatch({ type : unregisteredUserActions.GET_ALL_UNREGISTEREDUSER});
        dispatch({ type : projectMembershipActions.GET_ALL_PROJECTMEMBERSHIP});
    },[])
   
      
    return (
        <div>
            <div className="page-body">
                <div className="nav">
                    <Link className="tab" to='/' >ProjectMembers</Link>
                    <br />
                    <a className="tab active">RegisteredUser</a>
                    <br />
                    <Link className="tab" to="/component/unregisteredUser">unRegisteredUser</Link>
                </div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>city</th>
                        <th>company</th>
                        <th>country</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>organizationType</th>
                        <th>phone</th>
                        <th>state</th>
                        <th>emailAddress</th>
                        
                        <th className="bg-red">ProjectId</th>
                    </tr>
                    {RegisteredUsers.registeredUsers.map((member) =>
                        <tr>
                            <td>{member.id}</td>
                            <td>{member.city}</td>
                            <td>{member.company}</td>
                            <td>{member.country}</td>
                            <td>{member.firstName}</td>
                            <td>{member.lastName}</td>
                            <td>{member.organizationType}</td>
                            <td>{member.phone}</td>
                            <td>{member.state}</td>
                            <td>{member.emailAddress}</td>
                            
                            <td>
                            <ProjectId userid={member.id} />
                                </td>
                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}