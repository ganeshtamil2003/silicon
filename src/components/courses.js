
import Navbar from "../components/navbar";
import "../assets/style.css"
import ai from "../assets/images/Ai.png"
import ml from "../assets/images/machine_learning.png"
import dl from "../assets/images/deep-learning.png"

const Courses = () => {
    return (
        <>
            <Navbar />
            <div className="card-container">
                <div className="card-wrapper">
                    <div className="card">
                        <img src={ai} alt="" />
                        <h3 className="card-title">Artificial Intelligence</h3>
                        <ul className="card-topics">
                            <li>Machine Learning</li>
                            <li>Deep Learning</li>
                            <li>Data Science</li>
                            <li>Computer Vision</li>
                        </ul>
                    </div>

                    <div className="card">
                        <img src={ml} alt="" />
                        <h3 className="card-title">Machine Learning</h3>
                        <ul className="card-topics">
                            <li>Supervised Learning Algorithms</li>
                            <li>Unsupervised Learning Algorithms</li>
                            <li>Semi-supervised Learning Algorithms</li>
                            <li>Q-learning</li>
                        </ul>
                    </div>

                    <div className="card">
                        <img src={dl} alt="" />
                        <h3 className="card-title">Deep Learning</h3>
                        <ul className="card-topics">
                            <li>SLP</li>
                            <li>MLP</li>
                            <li>CNN</li>
                            <li>BPN</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courses;
