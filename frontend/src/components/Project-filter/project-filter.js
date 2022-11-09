import { ProjectFilterContainer, Flex, GridItem } from "./project-filter.styles"
import { useState, useRef, useEffect } from "react"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDebugValue } from "react";

const ProjectFilter = (props) => {

    const inputref = useRef([])

    const [projects, setProjects] = useState()
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [skills, setSkills] = useState();

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MzY0NzM1LCJpYXQiOjE2Njc5MzI3MzUsImp0aSI6ImVjYTk5ZTYxMTg1ZTQ2OTRhNDg0N2VkODg5YWFkOTliIiwidXNlcl9pZCI6Mn0.0rsTH6W_ehRitYh5ezU_HHzPpG6EfSlQIdFAfbUKyag`,
        "content-type": "application/json",
    })
    const getconfig = {
        method: get,
        headers: header
    }

    useEffect((state) => {
        fetch(`http://localhost:8000/api/projects/`, getconfig)
            .then(response => response.json())
            .then(data => { setProjects(data); props.setTomapout(data) })
            .catch(error => console.log(error));

        fetch(`http://localhost:8000/api/skills/`, getconfig)
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.log(error));
    }, [])

    const handleFilter = () => {

        const query = {
            name: inputref.current.name.value,
            skills: inputref.current.skills.value,
            dates: inputref.current.date.value,
        }

        let updatedList = [...projects];
        updatedList = updatedList.filter(element =>
            element.name.toLowerCase().indexOf(query.name.toLowerCase()) !== -1 &&
            (element.tools.some(element => element['id'] === parseInt(query.skills)) || query.skills === '0')
        )
        props.setTomapout(updatedList);
    };

    const handleDatePicker = (update) => {
        inputref.current.date.value = update;
        setDateRange(update);
        handleFilter()
    };


    return (
        <div>
            <ProjectFilterContainer>
                <h1>Projects</h1>
                <Flex>
                    <form>
                        <input ref={ref => inputref.current.name = ref} type="text" name="name" placeholder="Filter by name" autoComplete="none" onChange={handleFilter} />
                        <GridItem>
                            <DatePicker
                                ref={ref => inputref.current.date = ref}
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={update => handleDatePicker(update)}
                                isClearable={true}
                                value={dateRange}
                            />
                        </GridItem>
                        <select ref={ref => inputref.current.skills = ref} name="skills" onChange={handleFilter}>
                            <option value='0'>Select a skill</option>
                            {skills === undefined ? <option>Loading...</option> : skills.map(element => <option value={element.id}>{element.title}</option>)}
                        </select>
                    </form>
                </Flex>
            </ProjectFilterContainer>

        </div>
    )
}

export default ProjectFilter

