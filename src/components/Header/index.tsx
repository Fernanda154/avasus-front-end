import SearchBar from '../SearchBar'
import { Button } from '../shared/styles'
import { CustomHeader, CustomList, CustomListItem, LogoIcon } from './styles'


export default function Header() {
    return (
        <>
            <CustomHeader>
                <LogoIcon />
                <CustomList>
                    <CustomListItem><a href='/'>Início</a></CustomListItem>
                    <CustomListItem><a href='/about'>Sobre Nós</a></CustomListItem>
                    <CustomListItem><a href='/courses/modules'>Cursos</a></CustomListItem>
                    <CustomListItem><a href='/partners'>Parceiros</a></CustomListItem>
                    <CustomListItem><a href='/transparency'>Transparência</a></CustomListItem>
                    <CustomListItem><a href='/contact'>Contato</a></CustomListItem>
                </CustomList>
                <SearchBar />
                <Button>Entrar</Button>
                <Button primary filled>Cadastrar</Button>
            </CustomHeader>
        </>

    )


}