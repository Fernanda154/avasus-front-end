import styled from "styled-components";

export const Realization = styled.div`
    margin-top:130px;
    height:228px;
    background-color:#D2202C;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center
`

export const RealizationIcons = styled.div`
    
    padding-top:20px;
    display:flex;
    justify-content:space-evenly;
    width:60%


`


export const RealizationIcon = styled.img`
`

export const SimpleLink = styled.a`
    color:white;
    text-decoration:none
`

export const FooterLinks = styled.div`
    display:flex;
    justify-content:center;
    background-color:var(--bold-grey);
    padding:60px;
    justify-content:space-around;
    flex-wrap:wrap
`


interface IGenericListProps {
    type?: string
}


export const ListLinks = styled.ul.attrs((props: IGenericListProps) => ({
    type: props.type

}))`
    list-style:none;
    display:flex;
    padding-top:15px;
   ${props =>
        props.type === 'horizontal'
            ? `
            flex-direction:row;
            justify-content:space-between;

        `: 'flex-direction:column'
    }
`

export const ListLinkItem = styled.li`
    color:var(--white);
    font-style: normal;
    font-weight: 100;
    font-size: 18px;
    line-height: 35px;
 
`

export const CopyRight = styled.div`
    background-color:var(--soft-grey);
    display:flex;
    justify-content:center;
    color:var(--white);
    padding:27px;
`