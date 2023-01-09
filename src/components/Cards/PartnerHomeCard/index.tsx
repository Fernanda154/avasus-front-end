import { Partner } from "../../../types"
import { Card, CardContent, CardTitle } from "./styles"

interface IPartner {
    partner: Partner
}

export function PartnerHomeCard({ partner }: IPartner) {
    return (
        <>
            <Card>
                <CardTitle>TESTE</CardTitle>
                <CardContent>{partner.titulo}</CardContent>
            </Card>
        </>)
}