
interface Params {
    lessonId: string
}


export default function Lesson({params} : { params: Params}) {
    console.log('params', params.lessonId)
    return <h1>Lesson</h1>
}