import React from 'react';
import { Container } from 'react-bootstrap';
import TextDesc from '../reusable/txtDesc';
import DeskProj from '../reusable/dskProjectDesc';
import MblProj from '../reusable/mblProjectDesc';
import './Sections.css';

function ExpSec(props) {
  return (
    <>
        <Container>
            <div className = "exp-main" id = "experience">
                <h3>EXPERIENCE</h3>
                <DeskProj 
                    link = "https://smartctzen.herokuapp.com/"
                    project = "SmartCTzen Portal Project"
                    desc = "SmartCTzen Portal aims to help an Non-Government Organization (NGO) called SmartCT to provide participatory portal to their partner LGUs and municipalities. As a result, this portal provides a platform for citizens to report incidents in their locality to their LGU. Furthermore, provides a platform where citizens can post their suggestions in solving problems in their locality to their LGU. Lastly, a platform where LGU can post updates of events, project status, and announcements to inform their citizens."
                    tools = "Tools used for development: Mongo Db, Express, React Js, and Node Js (MERN Stack)"
                    img = {props.proj1}
                />

                <MblProj 
                    link = "https://smartctzen.herokuapp.com/"
                    project = "SmartCTzen Portal Project"
                    desc = "SmartCTzen Portal aims to help an Non-Government Organization (NGO) called SmartCT to provide participatory portal to their partner LGUs and municipalities. As a result, this portal provides a platform for citizens to report incidents in their locality to their LGU. Furthermore, provides a platform where citizens can post their suggestions in solving problems in their locality to their LGU. Lastly, a platform where LGU can post updates of events, project status, and announcements to inform their citizens."
                    tools = "Tools used for development: Mongo Db, Express, React Js, and Node Js (MERN Stack)"
                    img = {props.proj1}
                />
                
                <DeskProj 
                    link = "https://e-baz.herokuapp.com/"
                    project = "E-commerce Ordering System Project"
                    desc = "E-Commerce Ordering System aims to help brick and mortar merchants to migrate their store on the web and have their own online Identity. As a result, this web based ordering system provides a platform where merchants can share their products to their customers and manage it. Furthermore, it provides a platform where customers can place orders and merchants can manage and update the customer on their order status. Lastly, a platform where customers can leave their comments or reviews to the merchant's products and services."
                    tools = "Tools used for development: PHP and MySQL"
                    img = {props.proj2}
                />

                <MblProj 
                    link = "https://e-baz.herokuapp.com/"
                    project = "E-commerce Ordering System Project"
                    desc = "E-Commerce Ordering System aims to help brick and mortar merchants to migrate their store on the web and have their own online Identity. As a result, this web based ordering system provides a platform where merchants can share their products to their customers and manage it. Furthermore, it provides a platform where customers can place orders and merchants can manage and update the customer on their order status. Lastly, a platform where customers can leave their comments or reviews to the merchant's products and services."
                    tools = "Tools used for development: PHP and MySQL"
                    img = {props.proj2}
                />

                <div className = "work-exp">
                    <TextDesc
                        img = {props.work1}
                        txt = "Being one of the upcoming IT professional, I know that I won't learn everything in college thus, I applied an internship for Accenture, Inc. I have been engage in different groups of people learning from them and my own practical experience during my internship. In Accenture, I've been given the chance to be part of a group that handles IT service management for their various clients. Lastly, I have been given the chance to maintain and enhance platforms to ensure the quality of service of the IT service management."
                    />
                </div>
                
                <div className = "tools-sec">
                    <h3>TOOLS I USE</h3>
                    <div className = "tool-disp">
                        <img src = {props.reactjs} alt = "tool-icon" />
                        <img src = {props.js} alt = "tool-icon" />
                    </div>
                    <div className = "tool-disp">
                        <img src = {props.mongo} alt = "tool-icon" />
                        <img src = {props.mysql} alt = "tool-icon" />
                    </div>
                    <div className = "tool-disp">
                        <img src = {props.php} alt = "tool-icon" />
                        <img src = {props.node} alt = "tool-icon" />
                    </div>
                    <div className = "tool-disp">
                        <img src = {props.java} alt = "tool-icon" />
                        <img src = {props.python} alt = "tool-icon" />
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default ExpSec