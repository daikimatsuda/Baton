import React from 'react'
import axios from '../../libs/axios';
import { Link } from "react-router-dom";
import { BiDesktop } from "react-icons/bi"
import { IconContext } from "react-icons"

export default function Home() {
    return (
        <main>
        <div class="jumbotron-fluid bg-light p-3 p-sm-5 mb-4 border-top mb-0">
    <div class="container d-flex align-items-center">
        <div>
            <h1 class="mb-0">転職成功につなげる</h1>
            <span>BOTON
            </span>
            <a href="contact/index.html" class="btn btn-outline-warning btn-lg text-white rounded-0">お問い合わせ</a>
        </div>
    </div>
</div>

<section id="sec1">
    <div class="container">

        <h2 class="text-center">WORK</h2>
        <p class="lead text-center font-weight-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

       <div class="row">
            <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <img class="card-img-top" src="img/work-image.jpg" alt="画像1"/>
                    <div class="card-body">
                      <h3 class="card-title">WORK TITLE</h3>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <img class="card-img-top" src="img/work-image.jpg" alt="画像2"/>
                    <div class="card-body">
                      <h3 class="card-title">WORK TITLE</h3>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <img class="card-img-top" src="img/work-image.jpg" alt="画像3"/>
                    <div class="card-body">
                      <h3 class="card-title">WORK TITLE</h3>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <img class="card-img-top" src="img/work-image.jpg" alt="画像4"/>
                    <div class="card-body">
                      <h3 class="card-title">WORK TITLE</h3>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <img class="card-img-top" src="img/work-image.jpg" alt="画像5"/>
                    <div class="card-body">
                      <h3 class="card-title">WORK TITLE</h3>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <img class="card-img-top" src="img/work-image.jpg" alt="画像6"/>
                    <div class="card-body">
                      <h3 class="card-title">WORK TITLE</h3>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="sec2">
    <div class="container">

        <h2 class="text-center">OUR VISION</h2>
        <p class="lead text-center font-weight-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <div class="row align-top">
            <div class="col-md-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src="https://kuku-keke.com/wp-content/uploads/2021/03/5091_6.png" alt="OURVISION画像" class="col-md-4 h-100"/>
        </div>

    </div>
</section>

<section id="sec3">
<div class="container">
        <h2 class="text-center">SERVICE</h2>
        <p class="lead text-center font-weight-normal pb-lg-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <div class="row justify-content-start">
            <div class="col-md-4 col-sm-12">
                <figure class="text-center">
                    <IconContext.Provider value={{ color: 'gray', size: '50px' }}>
                        <BiDesktop />
                    </IconContext.Provider>
                </figure>
                <h3 class="text-center">TITLE</h3>
                <p class="text-body text-center mb-5">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="col-md-4 col-sm-12">
                <figure class="text-center">
                    <IconContext.Provider value={{ color: 'gray', size: '50px' }}>
                        <BiDesktop />
                    </IconContext.Provider>
                </figure>
            <h3 class="text-center">TITLE</h3>
            <p class="text-body text-center mb-5">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
                <div class="col-md-4 col-sm-12">
                <figure class="text-center">
                    <IconContext.Provider value={{ color: 'gray', size: '50px' }}>
                        <BiDesktop />
                    </IconContext.Provider>
                </figure>
                <h3 class="text-center">TITLE</h3>
                <p class="text-body text-center mb-5">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
    </div>
</section>

<section id="sec4">
    <div class="container">
        <h2 class="text-center">STAFF</h2>
        <p class="lead text-center font-weight-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div class="row">
            <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <div class="card-body">
                                                <div class="row">
                                                        <div class="col-lg-5 col-sm-12 mb-2">
                            <img src="img/staff-image1.png" alt="人物写真1" class="rounded-circle"/>
                            </div>
                                                        <div class="col-lg-7 col-sm-12 mb-2 px-lg-0 px-md-2">
                                <p class="card-title">ウェブディレクター</p>
                                <p class="card-subtitle">Web Director</p>
                                <h3 class="card-title">植⽥   崇 </h3>
                                <p class="card-subtitle">TAKASHI UEDA</p>
                            </div>
                                                </div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
                        <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <div class="card-body">
                                                <div class="row">
                                                        <div class="col-lg-5 col-sm-12 mb-2">
                            <img src="img/staff-image2.png" alt="人物写真2" class="rounded-circle"/>
                            </div>
                                                        <div class="col-lg-7 col-sm-12 mb-2 px-lg-0 px-md-2">
                                <p class="card-title">ウェブディレクター</p>
                                <p class="card-subtitle">Web Director</p>
                                <h3 class="card-title">植⽥   崇 </h3>
                                <p class="card-subtitle">TAKASHI UEDA</p>
                            </div>
                                                </div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
                        <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <div class="card-body">
                                                <div class="row">
                                                        <div class="col-lg-5 col-sm-12 mb-2">
                            <img src="img/staff-image3.png" alt="人物写真3" class="rounded-circle"/>
                            </div>
                                                        <div class="col-lg-7 col-sm-12 mb-2 px-lg-0 px-md-2">
                                <p class="card-title">ウェブディレクター</p>
                                <p class="card-subtitle">Web Director</p>
                                <h3 class="card-title">植⽥   崇 </h3>
                                <p class="card-subtitle">TAKASHI UEDA</p>
                            </div>
                                                </div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
                        <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <div class="card-body">
                                                <div class="row">
                                                        <div class="col-lg-5 col-sm-12 mb-2">
                            <img src="img/staff-image1.png" alt="人物写真4" class="rounded-circle"/>
                            </div>
                                                        <div class="col-lg-7 col-sm-12 mb-2 px-lg-0 px-md-2">
                                <p class="card-title">ウェブディレクター</p>
                                <p class="card-subtitle">Web Director</p>
                                <h3 class="card-title">植⽥   崇 </h3>
                                <p class="card-subtitle">TAKASHI UEDA</p>
                            </div>
                                                </div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
                        <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <div class="card-body">
                                                <div class="row">
                                                        <div class="col-lg-5 col-sm-12 mb-2">
                            <img src="img/staff-image2.png" alt="人物写真5" class="rounded-circle"/>
                            </div>
                                                        <div class="col-lg-7 col-sm-12 mb-2 px-lg-0 px-md-2">
                                <p class="card-title">ウェブディレクター</p>
                                <p class="card-subtitle">Web Director</p>
                                <h3 class="card-title">植⽥   崇 </h3>
                                <p class="card-subtitle">TAKASHI UEDA</p>
                            </div>
                                                </div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
                        <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card">
                    <div class="card-body">
                                                <div class="row">
                                                        <div class="col-lg-5 col-sm-12 mb-2">
                            <img src="img/staff-image3.png" alt="人物写真6" class="rounded-circle"/>
                            </div>
                                                        <div class="col-lg-7 col-sm-12 mb-2 px-lg-0 px-md-2">
                                <p class="card-title">ウェブディレクター</p>
                                <p class="card-subtitle">Web Director</p>
                                <h3 class="card-title">植⽥   崇 </h3>
                                <p class="card-subtitle">TAKASHI UEDA</p>
                            </div>
                                                </div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                </div>
            </div>
        </div>

                <a class="btn btn-lg btn-block mx-auto text-white btn-outline-warning" href="sample/index.html" role="button">スタッフの採用情報はこちら</a>

        </div>
</section>

<section id="sec5">
    <div class="container">

        <h2 class="text-center">BLOG &amp; NEWS</h2>
        <p class="lead text-center font-weight-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="row">
                        <article class="col-lg-6 mb-4 pl-lg-0">
                                <div class="row bg-white col-md-12 p-0 mx-0">
                <div class="col-md-6 p-0"><img src="img/blog-image1.jpg" alt="写真1"/></div>
                <div class="col-md-6">
                    <header>
                        <h3>BLOG TITLE</h3>
                        <p>2018/09/01  writed by ○○ ○○</p>
                    </header>
                    <p>
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                                </div>
            </article>
            <article class="col-lg-6 mb-4 pr-lg-0">
                                <div class="row bg-white col-md-12 p-0 mx-0">
                <div class="col-md-6 p-0"><img src="img/blog-image2.jpg" alt="写真2"/></div>
                <div class="col-md-6">
                    <header>
                        <h3>BLOG TITLE</h3>
                        <p>2018/09/01  writed by ○○ ○○</p>
                    </header>
                    <p>
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                                </div>
            </article>
                        <article class="col-lg-6 mb-4 pl-lg-0">
                                <div class="row bg-white col-md-12 p-0 mx-0">
                <div class="col-md-6 p-0"><img src="img/blog-image1.jpg" alt="写真3"/></div>
                <div class="col-md-6">
                    <header>
                        <h3>BLOG TITLE</h3>
                        <p>2018/09/01  writed by ○○ ○○</p>
                    </header>
                    <p>
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                                </div>
            </article>
            <article class="col-lg-6 mb-4 pr-lg-0">
                                <div class="row bg-white col-md-12 p-0 mx-0">
                <div class="col-md-6 p-0"><img src="img/blog-image2.jpg" alt="写真4"/></div>
                <div class="col-md-6">
                    <header>
                        <h3>BLOG TITLE</h3>
                        <p>2018/09/01  writed by ○○ ○○</p>
                    </header>
                    <p>
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                                </div>
            </article>
        </div>

    </div>
</section>
</main>
    )
}