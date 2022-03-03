import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import unregisteredUserActions from '../redux/unregistereduser/actions';
import { Link } from "react-router-dom";

export default function UnRegisteredUser() {

    const dispatch = useDispatch();

    const UnregisteredUsers = useSelector(
        (state) => state.unregisteredUserReducer
    )
    console.log(UnregisteredUsers)

    useEffect(() => {
        dispatch({ type: unregisteredUserActions.GET_ALL_UNREGISTEREDUSER });
    }, [])

    return (
        <div>
            <div className="page-body">
                <div className="nav">
                    <Link className="tab" to="/">ProjectMembers</Link>
                    <br />
                    <Link className="tab" to='/component/registereduser' >RegisteredUser</Link>
                    <br />
                    <a className="active tab">unRegisteredUser</a>
                </div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Email Address</th>
                        <th>languageCode</th>
                        <th>Registration Id</th>
                        <th>Registration Id Generated Time</th>

                    </tr>
                    {UnregisteredUsers.unregisteredUsers.map((member) =>
                        <tr>
                            <td>{member.id}</td>
                            <td>{member.emailAddress}</td>
                            <td>{member.languageCode}</td>
                            <td>{member.registrationId}</td>
                            <td>{member.registrationIdGeneratedTime}</td>
                        </tr>
                    )}

                </table>
            </div>

        </div>
    )
}