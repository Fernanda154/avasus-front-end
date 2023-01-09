import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Img1 from '../../assets/Carrousel.svg'
import ContentPopularContainer from "../../components/ContentPopularContainer";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { Course, Partner } from "../../types";
import { Container, PartnersList } from "./styles";
import { PartnerCard } from "../../components/Cards/PartnerCard";
import { PartnerHomeCard } from "../../components/Cards/PartnerHomeCard";
import { ContainerTitle } from "../../components/ContentPopularContainer/styles";

export default function Home() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [partners, setPartners] = useState<Partner[]>([]);

    useEffect(() => {
        async function initPage() {
            const responseCourses = await api.get('cursos')
            setCourses(responseCourses.data)
            const responsePartners = await api.get('parceiros')
            setPartners(responsePartners.data)

        }

        initPage()

    }, [])

    return (
        <>
            <Header />

            <img src={Img1} alt="Jovem segurando um notebook" style={{ width: "100%" }} />

            <ContentPopularContainer courses={courses} />


            <Container>
                <ContainerTitle> Parceiros </ContainerTitle>
                <PartnersList>
                    {partners.slice(0, 4).map((partner: Partner) => (
                        <PartnerHomeCard key={partner.id} partner={partner} />
                    ))}

                </PartnersList>
            </Container>
            <Footer />

        </>
    )
}