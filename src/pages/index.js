import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import images from "../../static/img/img.jpg";
// css
import styles from "./index.module.css";
import "../css/bootstrap-grid.min.css";
import "../css/bootstrap-utilities.css";
import "../css/style.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            learn - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row margin-top--md">
            <h1>About</h1>
            <h4>MINI MVC PHP</h4>
            <div className="col-3 col-md">
              <img
                src={images}
                className="img-thumbnail image-small rounded float-start"
                alt="profile"
              />
            </div>
            <div className="col">
              <p>
                Hi, I'm yuki that's my username in internet I am creator at this
                project. I from Indonesia.
              </p>

              <p>
                mini mvc php acctually is my personal project and while I'am
                under gradute from cs degree, and I'm still Working Intership to
                be PHP Developer at Jakarta city. This project for student,
                that's student it's me. I build this because In my unvercity,
                you cannot use laravel or code igniter for complete your final
                exam. and then I think okay, and that I make this, learning by
                doing from 2017 to 2022. keep learn and grow up. I want keep use
                MVC in final exam, but I develop at windows used xampp for
                envirotment and php. so if not working at linux my code not
                ready for linux. i need maintenance at linux envirotment and run
                some test.
              </p>
              <p>
                this project also for training my skill learning without forgot
                the fundamental
              </p>
            </div>
          </div>
          <div className="row margin-top--md">
            <h1>Feature</h1>
            <div className="col mt-5 mb-5">
              <div className="card card-small">
                <div className="card-body">
                  <h1 className="text-center mt-3 card-title">MVC</h1>
                  <p className="card-text">
                    for architecture i am use Model View Controller
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mb-5">
              <div className="card card-small">
                <div className="card-body">
                  <h1 className="text-center mt-3 card-title">OOP</h1>
                  <p className="card-text">for coe i am use Object Oriented</p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mb-5">
              <div className="card card-small">
                <div className="card-body">
                  <h1 className="text-center mt-3 card-title">Composer</h1>
                  <p className="card-text">
                    for package I used composer for support autoloading
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
