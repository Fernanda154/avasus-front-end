
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { BreadCrumb, Container, Title } from "../../components/shared/styles"
import { useState, useEffect } from "react"
import { Course } from "../../types";
import { api } from "../../services/api";
import VerticalCardModule from "../../components/Cards/VerticalCardModule";
import ContentPopularContainer from "../../components/ContentPopularContainer";
import { ContentContainer } from "./styles";

export default function SpecialModules() {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        async function initPage() {
            const responseCourses = await api.get('cursos')
            setCourses(responseCourses.data)
        }

        initPage()

    }, [])
    return (<>
        <Header />
        <BreadCrumb>Inicio / Cursos/<b> Módulos</b></BreadCrumb>
        <Container>

            <Title> Módulos Educacionais</Title>
            <ContentContainer>
                {courses.slice(0, 8).map((course: Course) => (<VerticalCardModule key={course.id} course={course} />))}
            </ContentContainer>
        </Container>

        <Footer />

    </>)
}