import { ProfileInfo, ProfileJoined, ButtonProfile, EditUserDetails, ProfileUsername, ProfileEmail, ProfileName, ProfileMain,ProfileRightSide, NameLocation, ProfilePhoto, ProfileInfoLeftSide} from "./profile.styles"
import {CiEdit} from 'react-icons/ci'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import SideNav from '../../components/SideNav/SideNav';


const UserProfile = () => {

    const [consultants, setConsultants] = useState([])

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MzY0NzM1LCJpYXQiOjE2Njc5MzI3MzUsImp0aSI6ImVjYTk5ZTYxMTg1ZTQ2OTRhNDg0N2VkODg5YWFkOTliIiwidXNlcl9pZCI6Mn0.0rsTH6W_ehRitYh5ezU_HHzPpG6EfSlQIdFAfbUKyag`,
        "content-type": "application/json",
    })

    const getconfig = {
    method: get,
    headers: header,
    }

useEffect((state) => {
    fetch("http://localhost:8000/api/me/", getconfig)
        .then(response => response.json())
        .then(data => setConsultants(data))
        .catch(error => console.log(error));
}, [])





return (
        <ProfileMain>
            <ProfileInfo>
                <ProfileInfoLeftSide>
                    <ProfilePhoto photo={consultants.image}>
                    </ProfilePhoto>
                </ProfileInfoLeftSide>
                <ProfileRightSide>
                    <NameLocation>
                        <ProfileName>
                            <p>First name: {consultants.first_name}</p>
                            <p>Last name: {consultants.last_name}</p>
                        </ProfileName>
                    </NameLocation>
                    <ProfileUsername>
                        <p>Username: {consultants.username}</p>
                    </ProfileUsername>
                    <ProfileEmail>
                        <h3>Email: {consultants.email}</h3>
                    </ProfileEmail>
                    <ProfileJoined>
                        <h3>Joined: {consultants.date_joined}</h3>
                    </ProfileJoined>
                </ProfileRightSide>
            </ProfileInfo>
            <ButtonProfile>
                <EditUserDetails>       
                  <p>Edit User Details</p>
                </EditUserDetails>
            </ButtonProfile>
        </ProfileMain>
    )
}

export default UserProfile

                

