import { ProjectDetailsWrapper, HeaderStyle, ConsultantStyle } from "./Project-details.styles"
import { useParams } from "react-router"
import { useEffect, useState} from "react"
import ProjectConsultants from "../Project-consultants/Project-consultants"
import { useNavigate } from "react-router"


const ProjectDetails = () => {
    
    let localToken = localStorage.getItem("valtech-auth")
    const navigate = useNavigate()
    const initialID = useParams().projectId

    const [project, setProject] = useState()

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json",
    })    
    const getconfig = {
        method: get,
        headers: header
    }
    useEffect(() => {
        fetch(`http://localhost:8000/api/projects/${initialID}/`, getconfig)
          .then(response => response.json())
          .then(data =>  setProject(data))
          .catch(error => console.log(error));

    },[])

    return (
        <ProjectDetailsWrapper>
            <div>
            <HeaderStyle>
            <h1>Project details</h1>
            <button onClick={() => navigate(`/project/${initialID}/edit`)}>Edit details</button>
            </HeaderStyle>
            <hr></hr>
            <div>
                <p>Image</p>
                <img src={project?.image}/>
            </div>
            <div>
                <p>Name</p>
                <p>{project === undefined ? 'Not provided' : project.name}</p>
            </div>
            <div>
                <p>Description </p>
                <p>{project === undefined ? 'Not provided' : project.description}</p>
            </div>
            <div>
                <p>External link</p>
                <p>{project === undefined ? 'Not provided' : project.external_link}</p>
            </div>
            <div>
                <p>Project duration</p>
                <p>{project === undefined ? 'Not provided' : `${project.time_frame.date_started} - ${project.time_frame.date_finished}`}</p>
            </div>
            <div>
                <p>Amount of consultants <br/> working on project</p>
                <p>{project === undefined ? 'Not provided' : project.assignee.length}</p>
            </div>
            <div>
                <p>Tools used</p>
                {project === undefined ? 'Not provided' : project.tools.map(element => <h4>{element.title}</h4>)}
            </div>
            <ConsultantStyle>
            <p>Consultants currently assigned to project:</p>
            <ProjectConsultants consultant={project}/>
            </ConsultantStyle>
            </div>
            
        </ProjectDetailsWrapper>
    )
}

export default ProjectDetails
