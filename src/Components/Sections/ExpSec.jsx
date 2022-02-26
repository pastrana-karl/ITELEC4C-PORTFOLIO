import React from 'react';
import { Container } from 'react-bootstrap';
import './Sections.css';

function ExpSec(props) {
  return (
    <>
        <Container>
            <div className = "exp-main" id = "experience">
                <h3>EXPERIENCE</h3>
                <a rel="noreferrer" href = "https://smartctzen.herokuapp.com/" target = "_blank" >
                    <div className = "proj-banner-dskt">
                        <div className = "proj-desc">
                            <div className = "proj-text">
                                <h3>SmartCTzen Portal Project</h3>
                                <p>
                                    SmartCTzen Portal aims to help an Non-Government Organization (NGO) called SmartCT to provide participatory portal to their partner LGUs and municipalities. 
                                    As a result, this portal provides a platform for citizens to report incidents in their locality to their LGU. 
                                    Furthermore, provides a platform where citizens can post their suggestions in solving problems in their locality to their LGU. 
                                    Lastly, a platform where LGU can post updates of events, project status, and announcements to inform their citizens.
                                    <br/><br/>
                                    Tools used for development: Mongo Db, Express, React Js, and Node Js (MERN Stack)
                                </p>
                            </div>
                        </div>
                        <img src = {props.proj1} alt = "proj1-banner" />
                    </div>
                </a>

                <div className = "proj-banner-mbl">
                    <a rel="noreferrer" href = "https://smartctzen.herokuapp.com/" target = "_blank" >
                        <img src = {props.proj1} alt = "proj1-banner" />
                    </a>
                    <div className = "proj-desc">
                        <div className = "proj-text">
                            <h3>SmartCTzen Portal Project</h3>
                            <p>
                                SmartCTzen Portal aims to help an Non-Government Organization (NGO) called SmartCT to provide participatory portal to their partner LGUs and municipalities. 
                                As a result, this portal provides a platform for citizens to report incidents in their locality to their LGU. 
                                Furthermore, provides a platform where citizens can post their suggestions in solving problems in their locality to their LGU. 
                                Lastly, a platform where LGU can post updates of events, project status, and announcements to inform their citizens.
                                <br/><br/>
                                Tools used for development: Mongo Db, Express, React Js, and Node Js (MERN Stack)
                            </p>
                        </div>
                    </div>
                </div>

                <a rel="noreferrer" href = "https://e-baz.herokuapp.com/" target = "_blank" >
                    <div className = "proj-banner-dskt">
                        <div className = "proj-desc">
                            <div className = "proj-text">
                                <h3>E-commerce Ordering System Project</h3>
                                <p>
                                    E-Commerce Ordering System aims to help brick and mortar merchants to migrate their store on the web and have their own online Identity. 
                                    As a result, this web based ordering system provides a platform where merchants can share their products to their customers and manage it. 
                                    Furthermore, it provides a platform where customers can place orders and merchants can manage and update the customer on their order status. 
                                    Lastly, a platform where customers can leave their comments or reviews to the merchant's products and services.
                                    <br/><br/>
                                    Tools used for development: PHP and MySQL
                                </p>
                            </div>
                        </div>
                        <img src = {props.proj2} alt = "proj2-banner" />
                    </div>
                </a>

                <div className = "proj-banner-mbl">
                    <a rel="noreferrer" href = "https://e-baz.herokuapp.com/" target = "_blank" >
                        <img src = {props.proj2} alt = "proj2-banner" />
                    </a>
                    <div className = "proj-desc">
                        <div className = "proj-text">
                            <h3>E-commerce Ordering System Project</h3>
                            <p>
                                E-Commerce Ordering System aims to help brick and mortar merchants to migrate their store on the web and have their own online Identity. 
                                As a result, this web based ordering system provides a platform where merchants can share their products to their customers and manage it. 
                                Furthermore, it provides a platform where customers can place orders and merchants can manage and update the customer on their order status. 
                                Lastly, a platform where customers can leave their comments or reviews to the merchant's products and services.
                                <br/><br/>
                                Tools used for development: PHP and MySQL
                            </p>
                        </div>
                    </div>
                </div>

                <div className = "work-exp">
                    <img src = {props.work1} alt = "work-icon" />
                    <p>
                        Being one of the upcoming IT professional, I know that I won't learn everything in college thus, I applied an internship for Accenture, Inc. 
                        I have been engage in different groups of people learning from them and my own practical experience during my internship. 
                        In Accenture, I've been given the chance to be part of a group that handles IT service management for their various clients. 
                        Lastly, I have been given the chance to maintain and enhance platforms to ensure the quality of service of the IT service management. 
                    </p>
                </div>
            </div>
        </Container>
    </>
  )
}

export default ExpSec