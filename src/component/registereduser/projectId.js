import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import projectMembershipActions from "../../redux/projectmembership/reducers";
export default function ProjectId(props) {
const{userid}=props
    // const dispatch = useDispatch();
    const ProjectMembership = useSelector(
        (state) => state.projectMemberships
    )
    console.log(ProjectMembership)
 
    return (
        <div className="flex">
            {ProjectMembership.projectMembership.filter(val => { 
                if(val.userId===userid){
                    return val
                }
            })
            .map((member) =>
                <div> {member.projectId} &nbsp; &nbsp;</div>
            )}
        </div>
    )
}
