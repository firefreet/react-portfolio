import React from 'react';

function Portfolio() {
    return (
        <main id="maincontent" className="row">
            <div className="container py-4 mx-2 mx-sm-3 mx-lg-auto">
                <section className="row">
                    <div className="col py-0 px-1 m-0 border bg-white">
                        <div className="row mt-0 mx-1 pt-3 px-0">
                            <div className="col mx-0 mx-sm-3 mb-0 p-0">
                                <h4 className="mt-3"><b>Portfolio</b></h4>
                            </div>
                        </div>
                        <div className="row px-1">
                            <div className="col mx-0 mx-sm-3 p-3">
                                <hr className="my-2" />
                                <br />
                                <div className="row">
                                    <div className="col-md-6 mb-5">
                                        <a href="https://github.com/firefreet/super-duper-guacamole" className="card">
                                            <img src="assets/images/burger-app.png" alt="" className="img-fluid card-img" />
                                            <div className="card-img-overlay px-0">
                                                <p className="card-text fixed-card-text text-white text-center p-2">Burger App</p>
                                            </div>
                                        </a>
                                        <a className="d-flex justify-content-center"
                                            href="https://github.com/firefreet/super-duper-guacamole">Git Hub Repo</a>
                                        <a className="d-flex justify-content-center" href="https://infinite-waters-23370.herokuapp.com">Heroku deployed app</a>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <a href="https://github.com/ShaneKeney/TestPrep" className="card">
                                            <img src="assets/images/test.png" alt="" className="img-fluid card-img" />
                                            <div className="card-img-overlay px-0">
                                                <p className="card-text fixed-card-text text-white text-center p-2">Test Prep App</p>
                                            </div>
                                        </a>
                                        <a className="d-flex justify-content-center" href="https://github.com/ShaneKeney/TestPrep">Git Hub Repo</a>
                                        <a className="d-flex justify-content-center" href="https://test-prep-prod.herokuapp.com">Heroku deployed app</a>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <a href="https://firefreet.github.io/calendar/index.html" className="card">
                                            <img src="assets/images/calendarScreenshot.png" alt="" className="img-fluid card-img" />
                                            <div className="card-img-overlay px-0">
                                                <p className="card-text fixed-card-text text-white text-center p-2">Calendar</p>
                                            </div>
                                        </a>
                                        <a className="d-flex justify-content-center" href="https://github.com/firefreet/calendar">Git Hub Repo</a>
                                        <a href="https://firefreet.github.io/calendar/" className="d-flex justify-content-center">Git Hub Pages deployed app</a>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <a href="https://firefreet.github.io/weather-app" className="card">
                                            <img src="assets/images/weatherScreenshot.png" alt="" className="img-fluid card-img" />
                                            <div className="card-img-overlay px-0">
                                                <p className="card-text fixed-card-text text-white text-center p-2">Weather Dashboard</p>
                                            </div>
                                        </a>
                                        <a className="d-flex justify-content-center" href="https://github.com/firefreet/weather-app">Git Hub Repo</a>
                                        <a href="https://firefreet.github.io/weather-app/" className="d-flex justify-content-center">Git Hub Pages deployed app</a>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <a href="https://github.com/pjpetro/JubilantCouscous" className="card">
                                            <img src="assets/images/foodScreenshot.png" alt="" className="img-fluid card-img" />
                                            <div className="card-img-overlay px-0">
                                                <p className="card-text fixed-card-text text-white text-center p-2">Restaurant Finder</p>
                                            </div>
                                        </a>
                                        <a className="d-flex justify-content-center" href="https://github.com/pjpetro/JubilantCouscous">Git Hub Repo</a>
                                        <a href="https://pjpetro.github.io/JubilantCouscous/" className="d-flex justify-content-center">Git Hub Pages deployed app</a>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <a href="https://github.com/firefreet/templateEngine" className="card">
                                            <img src="assets/images/screenshot.png" alt="" className="img-fluid card-img" />
                                            <div className="card-img-overlay px-0">
                                                <p className="card-text fixed-card-text text-white text-center p-2">Template Engine</p>
                                            </div>
                                        </a>
                                        <a className="d-flex justify-content-center" href="https://github.com/firefreet/templateEngine">Git Hub Repo</a>
                                        <a className="d-flex justify-content-center">Command line app</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Portfolio;