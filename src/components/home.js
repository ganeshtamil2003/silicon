import Navbar from "../components/navbar";
import "../assets/style.css"
import education from "../assets/images/education.jpg"

function Home() {
    return (
        <>
            <Navbar /> 
            <div>
                <div className="bg-container">
                    <h1 className="content-bg">
                        Manage IT Services you can Trust
                    </h1>
                </div>
            </div>

            <div className="container-1">
                <div className="left-data">
                    <h2>
                        Welcome to Silicon Software Services
                    </h2>
                    <p>
                        The organization takes pride in having instructors who are engrossed beyond Fifteen Years in enjoying as
                        a trainer for Various Verticles of Educationon. With that, they offer the foremost Classroom And Online
                        training As per trade standard. And assert as one of the fastest-growing network training institutions
                        in the world and has a monopoly in the region. The Institute’s strong placement cell has magnified its
                        network amidst corporates over the years and is leveraged to realize nearly 100% placements of its
                        students.
                    </p>
                    <button className="read-more">
                        Read More
                    </button>
                </div>

                <div className="right-data">
                    <img src={education} alt="education" />
                </div>
            </div>

            <div className="container-2">
                <div className="container-data">
                    <h2 className="content-data">
                        Why Choose Us
                    </h2>
                    <p>
                        Not everyone can teach technology as it is intended to. People who have worked extensively on that
                        technology and have a passion for technology can dive deep into technology, dismantle and explain the
                        nuts and bolts of a technology.
                    </p>
                </div>

                {/* <!-- card --> */}
                <div className="card-container">
                    <div className="bg-grey">
                        <h2>50+</h2>
                        <h4>Classroom</h4>
                    </div>
                    <div className="bg-orange">
                        <h2>1500+</h2>
                        <h4>Career made</h4>
                    </div>
                    <div className="bg-grey">
                        <h2>29+</h2>
                        <h4>Total Mentors</h4>
                    </div>
                    <div className="bg-orange">
                        <h2>1000+</h2>
                        <h4>Online/Offline</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
