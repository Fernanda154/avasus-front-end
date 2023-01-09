import styled from "styled-components";

export const CreditList = styled.ul`
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    flex-wrap:wrap
`;


export const CreditItem = styled.li`

`

export const CreditImage = styled.img`
max-width:200px

`
interface ICoverProps {
    image?: string
}

export const Cover = styled.div`
height:200px;
background-size:cover;
width:100%;
${(props: ICoverProps) => props.image ? `background-image:url(${props.image}) ` : ""}
`

export const CoverContent = styled.div`
    height:200px;
    width:100%;
    position:absolute;
    background-color:rgba(0,0,0,0.5);
`

export const CourseSession = styled.section`
    margin:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:80%;
    flex-wrap:wrap
`