import { Button } from "../shared/styles";
import { Course } from "../../types";
import { ContainerTitle, Container, HorizontalCard, CardList, CardImage, CardTitle, CardPatners, CourseData, CourseDataItem } from "./styles";
import { HiUsers } from 'react-icons/hi';
import { AiFillClockCircle } from 'react-icons/ai'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

interface IContentProps {
    courses: Course[]
}


export default function ContentPopularContainer({ courses }: IContentProps) {

    const handleAvaliation = function (avaliation: string) {
        return (
            <>
                <BsStarFill color={"#F6303F"} />
                <BsStarFill color={"#F6303F"} />
                <BsStarFill color={"#F6303F"} />
                <BsStarFill color={"#F6303F"} />
                <BsStarFill color={"#F6303F"} />
            </>

        )
    }

    return (<>
        <Container>

            <ContainerTitle> Módulos Educacionais </ContainerTitle>
            <CardList>
                {Array.from(courses).slice(0, 5).map((course) => (
                    <HorizontalCard key={course.id}>
                        <CardImage src={course.capa}></CardImage>
                        <div>
                            <CardTitle>{(course.titulo.length > 49) ? course.titulo.substring(0, 49) + "..." : course.titulo}</CardTitle>
                            <CardPatners>{(course.parceiros.length > 29) ? course.parceiros.substring(0, 29) + "..." : course.parceiros}</CardPatners>
                        </div>

                        <CourseData>
                            <CourseDataItem><HiUsers color={"#F6303F"}></HiUsers><p>{course.matriculados}</p></CourseDataItem>
                            <CourseDataItem><AiFillClockCircle color={"#F6303F"}></AiFillClockCircle><p>{course.duracao}</p></CourseDataItem>
                            <CourseDataItem>{handleAvaliation(course.avaliacao)}<p>{course.avaliacao}</p></CourseDataItem>
                            <Button primary>Ver mais</Button>
                        </CourseData>
                    </HorizontalCard>)
                )
                }
            </CardList>
            <Button primary>Ver mais</Button>
        </Container>
    </>)
}