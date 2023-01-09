import styled from "styled-components";

export const Card = styled.div`
width:320px;
`


export const CardImage = styled.img`
size:1em;
border-radius:20px;

`

export const CardTitle = styled.h2`
font-size:1.3em;
`

export const CardSubtitle = styled.h3`
font-size:1;
color:var(--red)
`


export const CardData = styled.div`
display:flex;
font-weight: 600;
font-size:13px
`

export const CardContent = styled.p`
font-style: normal;
font-weight: 400;
max-height:500px;
overflow-y:hidden;
font-size: 20px;
line-height: 18px;
display: flex;
align-items: center;
color: var(--black);

`