import LogoUFRN from '../../assets/LogoUFRN.svg';
import LogoLais from '../../assets/LogoLAIS.svg';
import { RiTwitterFill, RiFacebookFill, RiInstagramLine } from "react-icons/ri";


import { Realization, RealizationIcons, RealizationIcon, FooterLinks, ListLinkItem, ListLinks, CopyRight, SimpleLink } from './styles'
export default function Footer() {
    return (
        <footer>
            <Realization>
                <h3>Realização</h3>
                <RealizationIcons>
                    <RealizationIcon src={LogoLais} alt="Logotipo do Laboratório de Inovação Tecnológica em Saúde" />
                    <RealizationIcon src={LogoUFRN} alt="Logotipo do Laboratório da Universidade Federal do Rio Grande do Norte" />
                </RealizationIcons>
            </Realization>
            <FooterLinks>
                <div>
                    <img src={LogoLais} style={{ width: '121px' }} alt="Logotipo do Laboratório de Inovação Tecnológica em Saúde" />
                    <p style={{ color: "white", maxWidth: "200px" }}>Laboratório de Inovação Tecnológica em Saúde.</p>
                </div>
                <div>
                    <h4>Links Úteis</h4>
                    <ListLinks>
                        <ListLinkItem><SimpleLink href="/">Início</SimpleLink></ListLinkItem>
                        <ListLinkItem><SimpleLink href="/about">Sobre Nós</SimpleLink></ListLinkItem>
                        <ListLinkItem><SimpleLink href="/courses/modules">Módulos</SimpleLink></ListLinkItem>
                        <ListLinkItem><SimpleLink href="/partners">Parceiros</SimpleLink></ListLinkItem>
                        <ListLinkItem><SimpleLink href="/transparency">Transparência</SimpleLink></ListLinkItem>
                    </ListLinks>
                </div>
                <div>
                    <h4>Redes Sociais</h4>
                    <ListLinks type='horizontal'>
                        <ListLinkItem><RiFacebookFill size={26} /></ListLinkItem>
                        <ListLinkItem> <RiTwitterFill size={26}></RiTwitterFill></ListLinkItem>
                        <ListLinkItem><RiInstagramLine size={26}></RiInstagramLine> </ListLinkItem>
                    </ListLinks>
                </div>
            </FooterLinks>
            <CopyRight>
                2022 © LAIS (HUOL). Todos os direitos reservados
            </CopyRight>
        </footer>


    )
}