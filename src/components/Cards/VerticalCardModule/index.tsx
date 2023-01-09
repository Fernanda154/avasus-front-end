import { Course } from "../../../types";
import { Card, CardContent, CardData, CardImage, CardSubtitle, CardTitle } from "./styles";
import { HiUsers } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import { handleAvaliation } from "../../../utils";
interface IPropsCourse {
    course: Course
}

export default function VerticalCardModule({ course }: IPropsCourse) {
    return (
        <>
            <a href={`/courses/${course.id}`}>
                <Card>
                    <CardImage src={course.capa}></CardImage>
                    <CardTitle>{course.titulo}</CardTitle>
                    <CardSubtitle>{course.parceiros}</CardSubtitle>
                    <CardData>
                        <HiUsers color={"#F6303F"}></HiUsers><p>{course.matriculados}</p>
                        <AiFillClockCircle color={"#F6303F"}></AiFillClockCircle><p>{course.duracao}</p>
                        {handleAvaliation(course.avaliacao)}<p>{course.avaliacao}</p>
                    </CardData>
                    <CardContent>
                        {course.resumo}
                    </CardContent>
                </Card >
            </a>
        </>
    )
}