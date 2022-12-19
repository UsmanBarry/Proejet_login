import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Question = () => {
    const url = `https://server.joeleprof.com/questions/${sessionStorage.getItem('token')}`
    const { id } = useParams();
    const [question, setQuestion] = useState('')
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${url}${id}`);
            if (data.success)
                return;

            if (data.data === undefined)
                return setQuestion("N'existe pas");
            setQuestion(data.data.name);


        }


        getData();
    }, [id])


    // POST https://server.joeleprof.com/questions/:id/create-answer/:token

    return (

        <div>
            {question}
        </div>
    )
}

export default Question
