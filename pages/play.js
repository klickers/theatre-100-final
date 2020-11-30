import React from 'react'
import Head from 'next/head'

//import { Fade } from "react-awesome-reveal"

const Play = () => (
    <>
        <Head>
            <title>The Making of a Play</title>
        </Head>
        
        <section className="hero" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/03/10/17/01/stage-1248769_1280.jpg')" }}>
            <div className="hero-overlay">
                <h1>The Making of a Play</h1>
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

        <section className="full" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/07/02/10/40/writing-828911_1280.jpg')" }}>
            <div className="full-content bg-maroon text-white">
                <div className="content">
                    <h2>The Playwright</h2>
                    <p>Here's something!</p>
                    <p>I also remember naother thing.</p>
                    <p>I also remember naother thing.</p>
                    <p>I also rememr thing.</p>
                    <p>I also remember naother thing.</p>
                    <p>I also remember naoth.</p>
                </div>
            </div>
        </section>

        <section className="full bg-gray text-white">
            <div className="full-content">
                <div className="content">
                    <h2>The Director</h2>
                    <p>Here's something!</p>
                </div>
            </div>
        </section>

        <section className="full" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645_1280.jpg')" }}>
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

        <section className="full" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/02/19/11/08/sign-1209593_1280.jpg')" }}>
            <div className="full-content bg-gray text-white">
                <div className="content">
                    <h2>The Crew</h2>
                    <p>Here's something!</p>
                    <p>I also remember naother thing.</p>
                    <p>I also remember naother thing.</p>
                    <p>I also rememr thing.</p>
                    <p>I also remember naother thing.</p>
                    <p>I also remember naoth.</p>
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

export default Play
