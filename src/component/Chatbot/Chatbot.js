import { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [theme,setTheme] = useState(false)

    const background = {
      color1 : 'linear-gradient(239.26deg, #C7E9FF 63.17%, #F0F8FF 94.92%)',
      color2 : 'linear-gradient(239.26deg, #E6F7E2 63.17%, #F0FFF0 94.92%)',
      color3 : 'linear-gradient(239.26deg, #FFD1DC 63.17%, #FFF0F5 94.92%)',
      color4 : 'linear-gradient(239.26deg, #FFFACD 63.17%, #FFFFE0 94.92%)',
      color5 : 'linear-gradient(239.26deg, #E6E6FA 63.17%, #F8F8FF 94.92%)'
    }

    const bubbleColor = {
      color1 : '#eddceb',
      color2 : '#e0e0f5',
      color3 : '#dbb7db',
      color4 : '#e1e9b6'
    }

    const handleColors = () => {
      setTheme(prevTheme => {
        if(prevTheme === 'color1'){
          return 'color2'
        }else if(prevTheme === 'color2'){
          return 'color3'
        }else if(prevTheme === 'color3'){
          return 'color4'
        }else {
          return 'color1'
        }
      })
    }
  return (
    <div className='chatbot-container' style = {{background : background[theme]}}>
        <div className='chatbot-switch'><span onClick={handleColors}>Switch Component</span></div>
        <div className='chatbox-wrap'>
            <div className='chatbot-box' style={{ backgroundColor: bubbleColor[theme]}}><span>Hi there!</span></div>
            <div className='chatbot-box3' style={{ backgroundColor: bubbleColor[theme] }}><span>I'm Wysa-an AI chatbot built by therapist.</span></div>
            <div className='chatbot-box3' style={{ backgroundColor: bubbleColor[theme] }}><span>I'm here to understand your concerns and connect you with the best resources available to support you.</span></div>
            <div className='chatbot-box' style={{ backgroundColor: bubbleColor[theme] }}><span>Can I help?</span></div>
        </div>
    </div>
  )
}

export default Chatbot