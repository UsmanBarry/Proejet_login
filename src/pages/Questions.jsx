import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom'


const Questions = () => {
    const url = `https://server.joeleprof.com/questions/${sessionStorage.getItem('token')}`;
    // const navigate = useNavigate();
    const [questions, setQuestions] = ([]);

    //Redirectionner pour la page vegetable
    // const onRedirectToQuestion = (id) => {
    //     navigate(`/question/${id}`);
    // }

    const showquestions = () => {
        return questions.map((question) =>
            <div
                // onClick={() => onRedirectToQuestion(data.id)}
                key={question._id}>{question.views}
            </div>)

    }
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(url);
            if (data.success) {



                console.log(data.data)
                setQuestions(data.data)

            }
        }
        getData();
    }, [])


    return (
        <div>
            {/* {showquestions()} */}

        </div>
    )
}

export default Questions
