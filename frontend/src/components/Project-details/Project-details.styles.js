import styled from "styled-components"

export const ProjectDetailsWrapper  = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 110px;
margin-left: 70px;
height: 100vh;
position: relative;
padding: 10px;


.hero {
    background: linear-gradient(
    135deg,

    rgba(255, 255, 255, 1) 1%, rgba(255, 255, 255, 0.9) 40%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%
    
  ),url(${props => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -1;
    top: 0px; 
    left: 0px;
    width: 100px;
    height: 80vh;
    width: 75vw;
   
  
}

div > p:last-child {
    color: #1b253d;
}

/* rgba(0,0,0, 0),
    rgba(255,255,255, 100)*/

/* div > p:first-child {
    color: #1b253d;
} */


div > button {
    color: #1b253d;
    border: 1px solid #42018cc2;
    height: 30px;
    width: 100px;
    font-weight: bolder;
    border-radius: 5px;
    margin-left:20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 15px;
}

div > button.deleteButton {
    width: 120px;
}

div > button:hover {
    background-color: #220641;
    color: white;
}


h1 {
    color: #1b253d;
  
    margin-bottom: 10px;
}

hr {
    color: #5f5e5e42;
    border: none;
    height: 2px;
    background-color: #8080803e;
    width: 570px;
    margin-bottom: 20px;
    
}


div:not(:first-child) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

p {
    font-size: 20px;
    color: grey;
    width: 400px;
    padding: 10px 0;

}

p:first-child {
    font-weight: bolder;
}

h4 {
    font-weight: 400;
    font-size: 12px;
    color: white;
    border-radius: 18px;
    text-align: center;
    height: auto;
    background-color: #220641;
    font-weight: bolder;
    border: 1px solid #42018cc2;
    padding: 9px 15px 9px 15px;
    margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    font-size: 12px;
}

a {
    outline: none;
    font-size: 20px;
    width: 400px;
    padding: 10px 0;
}

a:link {
    color: #1b253d;
}

a:hover {
    color: purple;
}

a:visited {
    color: purple;
}

`;

export const HeaderStyle  = styled.div`
display: flex;

`;

export const ConsultantStyle  = styled.div`
display: flex;
flex-direction: column;
margin-top: 2%;

p {
    color: #1b253d;
}

.consultant-currently{
    width: 500px;
}
`;

export const OverFlow  = styled.div`
overflow-y: auto;
height: 200px;



`;