import React from 'react'
import About from '../../Components/Sections/AbtSec';
import Education from '../../Components/Sections/EducSec';
import Experience from '../../Components/Sections/ExpSec';
import Certificates from '../../Components/Sections/CertSec';
import Seminars from '../../Components/Sections/SemSec';
import Contact from '../../Components/Sections/ContSec';
import './Home.css'

function Home() {
  return (
    <div>
      <About abtPic = "https://res.cloudinary.com/karlstorage/image/upload/v1645085917/free-img/yl9e8xfoxnuw64uqwnwp.png"/>
      <Education educPic = "https://res.cloudinary.com/karlstorage/image/upload/v1645319392/free-img/o6wx3lbvstnp3pwbzjzx.png"/>
      <Experience 
        proj1 = "https://res.cloudinary.com/karlstorage/image/upload/v1645340966/free-img/nziwtrbdmyqo2mhdulmz.jpg"
        proj2 = "https://res.cloudinary.com/karlstorage/image/upload/v1645340966/free-img/z5e7dkn3l3ihguc5d26h.jpg"
        work1 = "https://res.cloudinary.com/karlstorage/image/upload/v1645403518/free-img/ftq7hgsxsvoca2romz5x.png"
        reactjs = "https://res.cloudinary.com/karlstorage/image/upload/v1645936967/free-img/zysal4e3zznyh4k9rjh0.png"
        js = "https://res.cloudinary.com/karlstorage/image/upload/v1645936966/free-img/bbvbgudabtrudzwb53pr.png"
        java = "https://res.cloudinary.com/karlstorage/image/upload/v1645936967/free-img/aawvsvxjjabet6d8imjg.png"
        mongo = "https://res.cloudinary.com/karlstorage/image/upload/v1645936967/free-img/ftiix9igzsgy0qxa0kpm.png"
        python = "https://res.cloudinary.com/karlstorage/image/upload/v1645936967/free-img/rod1jg4mr3cdlmbbi5ia.png"
        php = "https://res.cloudinary.com/karlstorage/image/upload/v1645936967/free-img/jsapdfpkqxlwcp8dtdbq.png"
        node = "https://res.cloudinary.com/karlstorage/image/upload/v1645936967/free-img/zwggn3vtrlkmyuqj2cf5.png"
        mysql = "https://res.cloudinary.com/karlstorage/image/upload/v1645936966/free-img/pffpg6skgexzk0rtjbuk.png"
      />
      <Certificates 
        cert1 = "https://res.cloudinary.com/karlstorage/image/upload/v1645404453/free-img/r9mebfwdmmb4xdcn9ow4.jpg"
        cert2 = "https://res.cloudinary.com/karlstorage/image/upload/v1645873741/free-img/g7cvqkhkoziqswygck73.png"
      />
      <Seminars sem1 = "https://res.cloudinary.com/karlstorage/image/upload/v1645405411/free-img/ru0d7zebdpqvdbzqrpcl.png" />
      <Contact link = "https://res.cloudinary.com/karlstorage/image/upload/v1645935941/free-img/mqabzkto4kkwzzmcfghv.png"/>
    </div>
  )
}

export default Home