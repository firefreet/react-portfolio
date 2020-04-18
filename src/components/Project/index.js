import React from 'react';
import apps from '../../data/projects';

function Project() {
    return (
        <div className="row">
            {apps.map((v,i) => {
                return (
                    <div key={i} className="col-md-6 mb-5">
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
    )
}

export default Project;