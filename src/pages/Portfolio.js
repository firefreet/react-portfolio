import React from 'react';
import Project from '../components/Project'


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
                                <Project />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Portfolio;