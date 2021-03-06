import React from 'react'
import Head from 'next/head'

const Resources = () => (
    <>
        <Head>
            <title>Educational Resourcs</title>
        </Head>
        
        <section className="hero" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/09/28/19/57/shakespeare-and-company-1701307_1280.jpg')" }}>
            <div className="hero-overlay" style={{ background: 'rgba(96, 102, 111, 0.7)' }}>
                <h1>Educational Resources</h1>
            </div>
        </section>

        <section className="full">
            <div className="full-content">
                <div className="content">
                    <p>Have you ever wondered about how a play is put together?</p>
                    <p>TODO:  Include anchor links to each of the sections below.</p>
                    <div className="menu-links">
                        <a href="#!">The Playwright</a>
                        <a href="#!">The Director</a>
                        <a href="#!">Plays</a>
                        <a href="#!">The Cast</a>
                        <a href="#!">The Crew</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="full full-overlay" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/07/02/10/40/writing-828911_1280.jpg')" }}>
            <div className="full-content bg-maroon text-white">
                <div className="content">
                    <img src="https://cdn.pixabay.com/photo/2012/10/26/00/22/william-shakespeare-62936_640.jpg" />
                    <h2>The Playwright</h2>
                    <p>The playwright.</p>
                </div>
            </div>
        </section>

        <section className="full bg-gray text-white">
            <div className="full-content">
                <div className="content">
                    <h2>The Director</h2>
                    <p>The director . . . play concept.</p>
                </div>
            </div>
        </section>

        <section className="full full-overlay" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645_1280.jpg')" }}>
            <div className="full-content bg-beige">
                <div className="content">
                    <h2>Plays</h2>
                    <p>Here's something!</p>
                    <p>I also remember naother thing.</p>
                    <p>I also remember naother thing.</p>
                    <p>I also rememr thing.</p>
                    <p>I also remember naother thing.</p>
                    <p>I also remember naoth.</p>
                </div>
            </div>
        </section>

        <section className="full bg-maroon text-white">
            <div className="full-content">
                <div className="content">
                    <h2>The Cast</h2>
                    <p>Here's something!</p>
                </div>
            </div>
        </section>

        <section className="full full-overlay" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/02/19/11/08/sign-1209593_1280.jpg')" }}>
            <div className="full-content bg-gray text-white">
                <div className="content">
                    <h2>The Crew</h2>
                    <p>Actors are what [main focus we see on stage], but the role of the set designers, lighting crew, costume and makeup designers, etc. are all very important!</p>
                </div>
            </div>
        </section>

        <section className="full">
            <div className="full-content">
                <div className="content">
                    <p>Have you ever wondered about how a play is put together?</p>
                    <p>TODO:  Include anchor links to each of the sections below.</p>
                </div>
            </div>
        </section>
    </>
)

export default Resources
