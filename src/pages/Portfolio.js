import React from 'react';
import apps from '../data/projects.js';


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
                                    {apps.map(v=>{
                                        return(
                                            <div className="col-md-6 mb-5">
                                            <a href={v.gitHref} className="card">
                                                <img src={v.imgSrc} alt="" className="img-fluid card-img" />
                                                <div className="card-img-overlay px-0">
                                                    <p className="card-text fixed-card-text text-white text-center p-2">{v.appName}</p>
                                                </div>
                                            </a>
                                            <a className="d-flex justify-content-center" href={v.gitHref}>Git Hub Repo</a>
                                            <a className="d-flex justify-content-center" href={v.deployHref}>{v.deployText}</a>
                                        </div>
                                        )
                                    })}
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