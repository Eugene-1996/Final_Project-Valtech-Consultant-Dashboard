import styled from "styled-components"

export const NavContainer  = styled.div`
width: 215px;
height: 100vh;
background: linear-gradient(to top, #7c47e6, #8e54e9);
display: flex;
flex-direction: column;
align-items: center;
border-radius: 0 5px 5px 0;
box-shadow: 0px 0px 25px -2px #555;
/* position: absolute; */

@media only screen and (min-width: 1500px) {
    width: 15%;
}

h1 {
    padding-top: 50px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;

    @media only screen and (min-width: 1500px) {
    font-size: 45px;
}

}

button {
    display: flex;
    background-color: transparent;
    align-items: center;
    color: rgba(255, 255, 255, 0.55);
    border:none;
    width: 100%;
    height: 65px;
    padding: 15px;
    font-size: 15px;
    margin-top: 3px;
    margin-bottom: 3px;
    @media only screen and (min-width: 1500px) {
    font-size: 20px;
}
}

button > p {
    margin-right:18px;
    margin-left: 15px;
    color: #ffffffa8;
    
    @media only screen and (min-width: 1500px) {
    margin-left: 40px;
    margin-right: 25px;
}
}

button:first-of-type {
    margin-top: 60px;
}

button:hover {
    background-color: #6228df64;
    transform: scale(1.1);
    width: 90%;
}

button:focus {
    background-color: #6228df8f;
    transform: scale(1.1);
    border-left: 2px solid #fafafa8f ;
    width: 90%;
    height: 70px;
}

    
`;