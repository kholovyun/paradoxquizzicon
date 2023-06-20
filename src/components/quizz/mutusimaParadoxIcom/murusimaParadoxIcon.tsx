import React ,{useState} from 'react'

export const MurusimaParadoxIcon:React.FunctionComponent = ():React.ReactElement => {
    const [open, setOpen] = useState(false)
    const user = {
        rates: {
          math: 32,
          ai: 45,
          games: 20,
          blockchain: 73,
        }
      }
      const result = {
        correct: 7,
        total: 10
      }

      const mitsubishi = (rates: {math: number, ai: number, games: number, blockchain: number}, result: {correct: number, total: number}) => {
        return (
          <div className='total_quiez_con'>  
              <h6 className='outer_title up_left'>math</h6>
              <h6 className='outer_title up_right'>games</h6>
              <h6 className='outer_title low_right'>blockchain</h6>
              <h6 className='outer_title low_left'>AI</h6>
              <div className='quize_box'>
                <div style={open? {rotate: "25deg"}: {}} 
                      className='left box'>
                      <span 
                          style={open? {rotate: "-25deg", transition: "all 0.4s ease-in-out"}: {}} 
                          className='inner_text'>{rates.math}%</span>
                </div>
                <div style={open? {rotate: "25deg"}: {}} className='right box'>
                  <span 
                      style={open? {rotate: "-25deg", transition: "all 0.4s ease-in-out"}: {}} 
                      className='inner_text sec'>{rates.games}%</span></div>
                <div 
                    style={open? {rotate: "25deg"}: {}} 
                    className='down_left box'>
                      <span style={open? {rotate: "-25deg", transition: "all 0.4s ease-in-out"}: {}} 
                      className='inner_text third'>{rates.blockchain}%</span>
                </div>
                <div 
                    style={open? {rotate: "25deg", bottom: "-5%"}: {}} 
                    className='down_right box'>
                      <span style={open? {rotate: "-25deg", transition: "all 0.4s ease-in-out"}: {}} 
                      className='inner_text fouth'>{rates.ai}%</span>
                </div>
                <div className='result_box'>{result.correct+ "/"+result.total}</div>
              </div>
              <h6 className='app_link'>khowleger.org</h6>
            </div>
        )}
  return (
    <div className='container'>
        {mitsubishi(user.rates, result)}
        <button onClick={() => setOpen(!open)}>Open</button>
    </div>
  )
}
