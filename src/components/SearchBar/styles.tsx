import styled from 'styled-components'
import {BiSearchAlt} from "react-icons/bi"


export const SearchInput= styled.input`
box-sizing: border-box;
background: #FFFFFF;
border: 2px solid rgba(0, 0, 0, 0.2);
border-radius: 20px;
height:40px;

::placeholder {
   
    padding-left:5px
  }
`

export const SearchIcon = styled(BiSearchAlt)`
position:relative;
left:28px;
color:rgba(0, 0, 0, 0.2)
`