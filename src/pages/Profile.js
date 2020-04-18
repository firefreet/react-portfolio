import React from "react";

function Profile() {
    return (
        <main id="maincontent" className="row">
            <div className="container py-4 mx-2 mx-sm-3 mx-lg-auto">
                <section className="row">
                    <div className="col py-0 px-1 m-0 border bg-white">
                        <div className="row mt-0 mx-1 pt-3 px-0">
                            <div className="col mx-0 mx-sm-3 mb-0 p-0">
                                <h4 className="mt-3"><b>About Me</b></h4>
                            </div>
                        </div>
                        <div className="row px-1">
                            <div className="col mx-0 mx-sm-3">
                                <hr className="my-2"></hr>
                                <img className="float-left mr-4 mb-1" src="assets/images/IMG_5774.jpg" width="150" alt="profile pic"></img>
                                <p>I was born in a small hamlet in the south of France. Orphaned at the age of 3, I don't remember my
                                real parents. I was raised in a convent by Nuns. The sisters were very kind, but I always felt like I
                                was missing something. I felt no connection of family or country or God. At 17 I decided to leave
                                    France.</p>
                                <p>For many moons I backpacked around Europe, sleeping outside many nights, finding odd jobs for enough
                                money to keep me fed, if not always sheltered. I met some wonderful people, and plenty of the
                                opposite. I spent a lot of time observing groups of families and friends, dissecting what I could of
                                the relationships I saw. After several years of drifting, I came to the decision that I was not
                                    missing anything after all. Turns out I don't much need that after all.</p>
                                <p>Having quenched my wanderlust, and growing weary of Europe, I decided to find new fortunes in the US.
                                I spent some time in England saving up enough money for a plane ride and ended up in New England,
                                which I somehow fell in love with. I got a more permanent job at a machine factory, and started to set
                                    down roots.... and lo.. build a family after all... ...by which I mean me and 3 pups.</p>
                                <p>Of course no one changes, all the while, neither staying the same. At the factory, I began to get
                                close with one of my coworkers. 17 years later, I have a family after all. I'm in love and married and
                                    perhaps I don't dislike people after all. I suppose anything is possible.</p>
                                <br></br>
                                <h5>Check out my
                                        <a href="./assets/pdfs/Jeremy Marotta_Resume_2020-03-21.pdf">...resume!</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Profile;