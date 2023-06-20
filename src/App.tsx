import React, { FormEvent, useState } from 'react'
import { IMidCreateDTO, midJourneyApi } from './api/midApi'
import './App.css'
import { MurusimaParadoxIcon } from './components/quizz/mutusimaParadoxIcom/murusimaParadoxIcon'



function App() {
  const [prompt, setPropmt] = useState<IMidCreateDTO>({prompt: ""})
  const textaaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPropmt((prev) =>{return {...prev, prompt : e.target.value}})
  }
  const submit = (e: FormEvent) => {
    e.preventDefault()
    midJourneyApi(prompt)
    console.log(prompt)
  }
  
  return (
    <>
     {/* <form onSubmit={(e) => submit(e)}>
      <textarea onChange={textaaHandler} name="prompt"/>
      <button type='submit'>Send</button>
     </form> */}
      <MurusimaParadoxIcon/>
    </>
   
  )
}

export default App
