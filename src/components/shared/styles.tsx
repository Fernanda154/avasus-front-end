import styled from "styled-components"

export interface IButtonProps {
    primary?: boolean,
    bigger?: boolean,
    filled?: boolean,

}

export const Button = styled.button`
    border-style:none;
    color:var(--white);
    margin:15px;
    border-radius:20px;
    padding:20px;
    height:40px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 0.9em;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content:center;
    padding-left:33px;
    padding-right:33px;
    ${(props: IButtonProps) => props.primary
        ? "background-color:var(--grey)"
        : `background-color:var(--white);
         border:1px solid var(--grey);
         color:grey
         `
    }
    ${(props: IButtonProps) => props.bigger ? "width:350px;" : ""}

`

export const Container = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
align-items:center;
margin-top:114px
`

export const BreadCrumb = styled.small`
display:flex;
align-items:left;
justify-content:left;
background-color:gray


`

interface ITitleProps {
    red?: boolean
}

export const Title = styled.h4`
   color: var(--red);
   text-align:center;
   

`

export const SubTitle = styled.h2`
font-size:1.3em;
margin-bottom:5px;
${(props: ITitleProps) => props.red ? "color:var(--red)" : ""}
`