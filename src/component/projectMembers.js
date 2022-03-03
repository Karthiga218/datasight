import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import projectMembershipActions from '../redux/projectmembership/actions';
import { Link } from "react-router-dom";
export default function ProjectMembers() {

    const dispatch = useDispatch();
    const ProjectMembership = useSelector(
        (state) => state.projectMemberships
    )
    console.log(ProjectMembership)
    useEffect(() => {
        dispatch({ type: projectMembershipActions.GET_ALL_PROJECTMEMBERSHIP });
    },[])
    return (
        <div>
            <div className="page-body">
                <div className="nav">
                    <a className="tab active">ProjectMembers</a>
                    <br />
                    <Link className="tab" to='/component/registereduser' >RegisteredUser</Link>
                    <br />
                    <Link className="tab" to="/component/unregisteredUser">unRegisteredUser</Link>
                </div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>PROJECT ID</th>
                        <th>USER ID</th>
                    </tr>
                    {ProjectMembership.projectMembership.map((member) =>
                        <tr>
                            <td>{member.id}</td>
                            <td>{member.projectId}</td>
                            <td>{member.userId}</td>
                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}
