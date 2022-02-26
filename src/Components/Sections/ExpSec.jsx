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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor feugiat sapien, in malesuada dolor molestie at. 
                                    Curabitur imperdiet laoreet dui vel maximus. Cras pulvinar libero sit amet dui fringilla pharetra. 
                                    Maecenas nisi diam, sodales et bibendum ac, placerat sit amet lorem. Integer euismod nec erat nec tincidunt. 
                                    Nullam sit amet mauris congue, consequat mi vitae, rhoncus ligula. Ut ac odio turpis. Ut ac nisl orci. Vivamus tincidunt sem non mauris dapibus consequat. 
                                    Praesent pellentesque, sem eget vestibulum porta, augue quam scelerisque erat, a porta lorem ex eu mauris.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor feugiat sapien, in malesuada dolor molestie at. 
                                Curabitur imperdiet laoreet dui vel maximus. Cras pulvinar libero sit amet dui fringilla pharetra. 
                                Maecenas nisi diam, sodales et bibendum ac, placerat sit amet lorem. Integer euismod nec erat nec tincidunt. 
                                Nullam sit amet mauris congue, consequat mi vitae, rhoncus ligula. Ut ac odio turpis. Ut ac nisl orci. Vivamus tincidunt sem non mauris dapibus consequat. 
                                Praesent pellentesque, sem eget vestibulum porta, augue quam scelerisque erat, a porta lorem ex eu mauris.
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor feugiat sapien, in malesuada dolor molestie at. 
                                    Curabitur imperdiet laoreet dui vel maximus. Cras pulvinar libero sit amet dui fringilla pharetra. 
                                    Maecenas nisi diam, sodales et bibendum ac, placerat sit amet lorem. Integer euismod nec erat nec tincidunt. 
                                    Nullam sit amet mauris congue, consequat mi vitae, rhoncus ligula. Ut ac odio turpis. Ut ac nisl orci. Vivamus tincidunt sem non mauris dapibus consequat. 
                                    Praesent pellentesque, sem eget vestibulum porta, augue quam scelerisque erat, a porta lorem ex eu mauris.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor feugiat sapien, in malesuada dolor molestie at. 
                                Curabitur imperdiet laoreet dui vel maximus. Cras pulvinar libero sit amet dui fringilla pharetra. 
                                Maecenas nisi diam, sodales et bibendum ac, placerat sit amet lorem. Integer euismod nec erat nec tincidunt. 
                                Nullam sit amet mauris congue, consequat mi vitae, rhoncus ligula. Ut ac odio turpis. Ut ac nisl orci. Vivamus tincidunt sem non mauris dapibus consequat. 
                                Praesent pellentesque, sem eget vestibulum porta, augue quam scelerisque erat, a porta lorem ex eu mauris.
                            </p>
                        </div>
                    </div>
                </div>

                <div className = "work-exp">
                    <img src = {props.work1} alt = "work-icon" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor feugiat sapien, in malesuada dolor molestie at. 
                        Curabitur imperdiet laoreet dui vel maximus. Cras pulvinar libero sit amet dui fringilla pharetra. 
                        Maecenas nisi diam, sodales et bibendum ac, placerat sit amet lorem. Integer euismod nec erat nec tincidunt. 
                        Nullam sit amet mauris congue, consequat mi vitae, rhoncus ligula. Ut ac odio turpis. Ut ac nisl orci. Vivamus tincidunt sem non mauris dapibus consequat. 
                        Praesent pellentesque, sem eget vestibulum porta, augue quam scelerisque erat, a porta lorem ex eu mauris.
                    </p>
                </div>
            </div>
        </Container>
    </>
  )
}

export default ExpSec