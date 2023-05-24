import headerImg from '../assets/header.JPG'
import Typed from 'react-typed'

function AboutMe() {
    return (
        <>
        <img src={headerImg} alt="Header Img" className="rounded-4 shadow-4 float-end m-4" style={{width: "100px"}}></img>

        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="black" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>     
         
        <Typed className="typed-text"
        strings={["Howdy!"]}
        typeSpeed={60}
        />
        
        <p>
            My name is Mario Sandoval, I am a recent graduate from Texas A&M with a Bachelors in Computer Science
        </p>
        </>
    );
}

export default AboutMe;