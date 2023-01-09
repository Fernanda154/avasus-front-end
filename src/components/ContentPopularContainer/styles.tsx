import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    margin-top:114px
`

export const ContainerTitle = styled.h2`
    color:#D2202C;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
`

export const CardList = styled.ul`

    list-style:none;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column

`

export const HorizontalCard = styled.li`
    padding:20px;
    height:160px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:var(--mate-white);
    margin-top:10px;
    border-radius: 20px;
`

export const CardImage = styled.img`
    border-radius: 20px;
    width:120px;
    height:80px;
    

`

export const CardTitle = styled.h5`
    font-size: 20px;
    width:300px
`

export const CardPatners = styled.p`

color: red;
font-weight:600
`

export const CourseData = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between
`

export const CourseDataItem = styled.div`
display:flex;
padding:5px
`


