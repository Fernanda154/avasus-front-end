import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Course } from "../../types"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Container, SubTitle, Title } from "../../components/shared/styles"
import { CourseSession, Cover, CoverContent, CreditImage, CreditItem, CreditList } from "./styles"

export default function DetailCourse() {

    const [course, setCourse] = useState<Course>()
    const { id } = useParams();

    useEffect(() => {
        async function getCourse() {
            console.log(`testando`)
            const responseCourse = await api.get(`cursos/${id}`)
            setCourse(responseCourse.data)
        }
        getCourse()
    }, [])

    return (
        <>
            <Header />

            <Cover image={course?.capa}>
                <CoverContent></CoverContent>

            </Cover>
            <Container>
                <Title>{course?.titulo}</Title>
                <CourseSession>
                    <SubTitle red>Sobre o Curso</SubTitle>
                    <p>{course?.sobre}</p>
                </CourseSession>
                <CourseSession>

                    <SubTitle red>Objetivos</SubTitle>
                    <p>{course?.objetivo_geral}</p>
                </CourseSession>

                <CourseSession>
                    <p style={{ width: "80%" }}>{course?.objetivo_especifico}</p>
                </CourseSession>

                <CourseSession>
                    <SubTitle red>Recursos educacionais</SubTitle>
                    <p style={{ width: "80%" }}>{course?.recursos_educacionais}</p>
                </CourseSession>
                <CourseSession>

                    <SubTitle red>Créditos</SubTitle>

                    <CreditList>
                        {course?.creditos.map((credito) => (
                            <CreditItem key={credito.capa} ><CreditImage src={credito.capa} /></CreditItem>

                        )
                        )}

                    </CreditList >
                </CourseSession>
            </Container>


            <Footer />


        </>
    )

}