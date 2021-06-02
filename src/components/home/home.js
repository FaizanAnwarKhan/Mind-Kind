import '../home/homeStyle.css'
import communicate from '../home/communicate.jpg'
import mentalHealth from '../home/mentalHealth.jpg'
import awareness from '../home/awareness.jfif'
import stars from '../home/stars.jpg'
import universe from '../home/universe.jpg'
import { Link, withRouter } from "react-router-dom";

function Home() {
    return (
        <div className="homemain">
            <div className="header">
                <div className="title">
                    <h1 className='titleName'>Mind Kind</h1>
                </div>
                <div className="buttonDiv">
                    <Link to="/signin" style={{color:"white"}} id='login' className="buttonLogin">SIGN IN</Link>
                    <Link to="/signup" style={{color:"white"}} id='signup' className="buttonLogin">SIGN UP</Link>
                </div>
            </div>
            <section className="container">
                <div className="row">
                    <div className="col s12 l4">
                        <img className="responsive-img" src={mentalHealth} alt="mentalHealth_pic" />
                    </div>
                    <div className="col s12 l6 offset-l2 ">
                        <h2 className="indigo-text text-darken-4">Mental Health</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam provident omnis fuga rerum velit optio eaque explicabo, temporibus quisquam aliquid repellat excepturi nam ullam? Harum iste officia maxime odit incidunt.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 push-l8 ">
                        <img className="responsive-img" src={communicate} alt="communicate_pic" />
                    </div>
                    <div className="col s12 l6 pull-l4 right-align">
                        <h2 className="indigo-text text-darken-4">Communicate</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam provident omnis fuga rerum velit optio eaque explicabo, temporibus quisquam aliquid repellat excepturi nam ullam? Harum iste officia maxime odit incidunt.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4">
                        <img className="responsive-img" src={awareness} alt="awareness_pic" />
                    </div>
                    <div className="col s12 l6 offset-l2">
                        <h2 className="indigo-text text-darken-4">Awareness</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam provident omnis fuga rerum velit optio eaque explicabo, temporibus quisquam aliquid repellat excepturi nam ullam? Harum iste officia maxime odit incidunt.</p>
                    </div>
                </div>
            </section>
            <div className="parallax-container">
                <div className="parallax">
                    <img src={stars} alt="stars_pic" className="responsive-img" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h2 className="indigo-text text-darken-4">Awareness</h2>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eveniet nostrum explicabo nihil architecto sapiente saepe ut incidunt facilis! Omnis vel maxime eum magni assumenda id accusantium odio magnam tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam provident omnis fuga rerum velit optio eaque explicabo, temporibus quisquam aliquid repellat excepturi nam ullam? Harum iste officia maxime odit incidunt.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quam nam corporis eligendi dignissimos. Rerum adipisci odit totam asperiores id necessitatibus quasi quia eos, ut ducimus ea eveniet qui earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni delectus provident reiciendis vel atque id ex illum, minus laborum ducimus adipisci! Odit a iusto ipsam blanditiis id laborum soluta libero?</p>
                    </div>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax">
                    <img src={universe} alt="universe" className="responsive-img" />
                </div>
            </div>
            <footer className="page-footer #1976d2 blue darken-2">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright black">
                    <div class="container center">
                        © 2021 Copyright Harris Maqsood Mir and Faizan Mir
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default withRouter(Home);