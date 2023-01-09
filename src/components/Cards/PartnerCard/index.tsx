import { Partner } from "../../../types"

interface IPartner {
    partner: Partner
}

export function PartnerCard({ partner }: IPartner) {
    return (
        <>
            <img src={partner.capa} />
            <h1>{partner.titulo}</h1>
            <p></p>
        </>)

}