import React from 'react';

function Contact() {
    return (
        <main id="maincontent" className="row">
            {/* <!-- another regular container for max content width --> */}
            <div className="container pt-4 mx-2 mx-sm-3 mx-lg-auto">
                <section className="row d-none">
                    <div className="col py-0 px-1 m-0 border bg-white">
                        <div className="row mt-0 mx-1 pt-3 px-0">
                            <div className="col mx-0 mx-sm-3 mb-0 p-0">
                                <h4 className="mt-3"><b>Contact</b></h4>
                            </div>
                        </div>
                        <div className="row px-1">
                            <div className="col mx-0 mx-sm-3">
                                <hr className="my-2" />
                                <br />
                                {/* <!-- form section --> */}
                                <form className="form mb-3">
                                    {/* <!-- Requests user's name --> */}
                                    <div className="form-group">
                                        <label htmlFor="nameField" className="mb-0 col-12 px-0 pb-1">Name</label>
                                        <input type="text" className="input-border form-control-sm rounded-0 w-100 border" id="nameField"
                                            placeholder="John Doe" />
                                    </div>
                                    {/* <!-- Get user's email address --> */}
                                    <div className="form-group">
                                        <label htmlFor="emailField" className="mb-0 col-12 px-0 pb-1">Email</label>
                                        <input type="email" className="input-border form-control-sm rounded-0 border w-100" id="emailField"
                                            placeholder="jdoe@somewhere.something" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="messageField" className="mb-0 col-12 px-0 pb-1">Message</label>
                                        <textarea className="form-control-sm rounded-0 vh-50 w-100" aria-label="With textarea" id="messageField"
                                            placeholder="feel free to share any thoughts, suggestions and questions"></textarea>
                                    </div>
                                    <input type="submit" id="submitbutton" className="rounded-0 py-1 px-3 text-white" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Info Section --> */}
                <section className="row my-4">
                    <div className="col py-0 px-1 m-0 border bg-white">
                        <div className="row mt-0 mx-1 pt-3 px-0">
                            <div className="col mx-0 mx-sm-3 mb-0 p-0">
                                {/* <!-- info section header --> */}
                                <h4 className="mt-3"><b>Contact Info & External Profiles</b></h4>
                            </div>
                        </div>
                        <div className="text-center row px-1">
                            <div className="col mx-0 mx-sm-3">
                                <hr className="my-2" />
                                <br />
                                {/* <!-- Info section details --> */}
                                <section className="row mb-3">
                                    <div className="col-12 col-sm-6">
                                        {/* <!-- email --> */}
                                        <div>
                                            <div htmlFor="nameField" className="mb-0 col-12 px-0 pb-1">Email:
                                                <a href="mailto:firefreet@gmail.com">icefreet@gmail.com</a>
                                            </div>
                                        </div>
                                        {/* <!-- phone # --> */}
                                        <div>
                                            <div htmlFor="emailField" className="mb-0 col-12 px-0 pb-1">Phone #:
                                                <a href="tel:860-867-5309">860-867-5309</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        {/* <!-- Git hub link --> */}
                                        <div>
                                            <div htmlFor="messageField" className="mb-0 col-12 px-0 pb-1">Git Hub:
                                                <a href="https://github.com/firefreet">Profile</a>
                                            </div>
                                        </div>
                                        {/* <!-- LinkedIn link --> */}
                                        <div>
                                            <div htmlFor="messageField" className="mb-0 col-12 px-0 pb-1">LinkedIn:
                                                <a href='https://www.linkedin.com/in/jeremy-marotta-571559141'>Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Contact;