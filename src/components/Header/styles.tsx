import styled from 'styled-components'
import AvasusLogo from '../../assets/AvasusLogo.svg'

export const CustomHeader = styled.header`
height:100px;
background: #FFFFFF;
width:100%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 0.9em;
display:flex;
justify-content:center;
align-items:center

`

export const CustomList = styled.ul`
list-style:none;
display:flex;
justify-content:space-between

`
export const CustomListItem = styled.li`
margin-left:36px;

a{
  color:#2F2E41;
  text-decoration:none;
}

`

export const LogoIcon = styled.img.attrs({
  src: `${AvasusLogo}`
})`

height:36px

`