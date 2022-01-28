import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { endpoint } from '../../helpers/Url';
import { CssJContainer, Text } from '../../styles/HomeStyles';
import { Form, Imagen, Question } from '../../styles/Preguntas';


export const Html = ()=>{
    const [question, setQuestion] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        axios.get(endpoint + "html")
            .then(res =>{
                setQuestion(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }
    const {id, pregunta, respuesta1, respuesta2, respuesta3} = question[0]
    
    console.log(question[0]);

    return(
        <>
    {
            <div key={id}>
            <CssJContainer>
                <div>
                    <Imagen src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/Property_1_3_y1jwbp.png' alt="avatar" />
                </div>
                <Text>
                    {pregunta}
                </Text>
            </CssJContainer>
            <Form>
                <Question>
                    <label>{respuesta1}</label>
                    <input type="checkbox"></input>
                </Question>
                <Question>
                    <label>{respuesta2}</label>
                    <input type="checkbox"></input>
                </Question>
                <Question>
                    <label>{respuesta3}</label>
                    <input type="checkbox"></input>
                </Question>

                <button> comprobar</button>
            </Form>
            </div>
    }
        </>
    )
}

// export const Html1 = ()=>{
//     const [question, setQuestion] = useState([]);

//     useEffect(()=>{
//         getData()
//     },[])

//     const getData = ()=>{
//         axios.get(endpoint + "html")
//             .then(res =>{
//                 setQuestion(res.data)
//             })
//             .catch(error =>{
//                 console.log(error);
//             })
//     }
//     const {id, pregunta, respuesta1, respuesta2, respuesta3} = question[1]
    
//     return(
//         <>
//     {
       
//             <div key={id}>
//             <CssJContainer>
//                 <div>
//                     <Imagen src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/Property_1_3_y1jwbp.png' alt="avatar" />
//                 </div>
//                 <Text>
//                     {pregunta}
//                 </Text>
//             </CssJContainer>
//             <Form>
//                 <Question>
//                     <label>{respuesta1}</label>
//                     <input type="checkbox"></input>
//                 </Question>
//                 <Question>
//                     <label>{respuesta2}</label>
//                     <input type="checkbox"></input>
//                 </Question>
//                 <Question>
//                     <label>{respuesta3}</label>
//                     <input type="checkbox"></input>
//                 </Question>

//                 <button> comprobar</button>
//             </Form>
//             </div>
//     }
//         </>
//     )
// }
// export const Html2 = ()=>{
//     const [question, setQuestion] = useState([]);

//     useEffect(()=>{
//         getData()
//     },[])

//     const getData = ()=>{
//         axios.get(endpoint + "html")
//             .then(res =>{
//                 setQuestion(res.data)
//             })
//             .catch(error =>{
//                 console.log(error);
//             })
//     }
//     const {id, pregunta, respuesta1, respuesta2, respuesta3} = question[2]
    
//     return(
//         <>
//     {
       
//             <div key={id}>
//             <CssJContainer>
//                 <div>
//                     <Imagen src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/Property_1_3_y1jwbp.png' alt="avatar" />
//                 </div>
//                 <Text>
//                     {pregunta}
//                 </Text>
//             </CssJContainer>
//             <Form>
//                 <Question>
//                     <label>{respuesta1}</label>
//                     <input type="checkbox"></input>
//                 </Question>
//                 <Question>
//                     <label>{respuesta2}</label>
//                     <input type="checkbox"></input>
//                 </Question>
//                 <Question>
//                     <label>{respuesta3}</label>
//                     <input type="checkbox"></input>
//                 </Question>

//                 <button> comprobar</button>
//             </Form>
//             </div>
//     }
//         </>
//     )
// }
