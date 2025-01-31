/* eslint-disable @next/next/no-img-element */
import { LuChevronRight } from "react-icons/lu";
import SocialShare from "../../../componentNews/SocialShare";
import React from "react";

function ChristmasCelebration() {
  return (
    <>
      <section className="newsLayoutInner">
        <div className="container">
          <div className="rowMainNewsLayoutInnerInner">
            <div className="rowNewsLayoutInnerInner">
              <div className="breadcrumbNewsLayoutInner">
                <a href="/projects" className="description">
                  News and Events
                  <span className="chevronRight">
                    <LuChevronRight />
                  </span>
                </a>

                <p className="description">
                  Spreading Christmas Cheer at Ocean Lifespaces!
                </p>
              </div>
              <h3 className="h3">
                Spreading Christmas Cheer at Ocean Lifespaces!
              </h3>
            </div>
            <div className="row2NewsLayoutInnerInner">
              <div className="author">
                <img className="authorImage" src="/news/in1.png" alt="author" />
                <div className="contentAuthor">
                  <p className="description">
                    <strong>Nettie Stanton</strong>
                  </p>
                  <p className="description">Dec 25, 2024</p>
                </div>
              </div>
              <img className="divider" src="/news/divider.png" alt="divider" />
              <div className="socialShare">
                <SocialShare />
              </div>
            </div>
            <div className="row3NewsLayoutInnerInner">
              <img className="mainImage" src="/news/in2.png" alt="main image" />
            </div>
            <div className="row4NewsLayoutInnerInner">
              <p className="description">
                The holiday spirit was in full swing at Ocean Lifespaces as our
                office transformed into a winter wonderland, celebrating the joy
                and warmth of Christmas with our incredible team.
              </p>
              <p className="description">
                From festive decorations to heartwarming moments, the
                celebrations brought us all together as one big family.
                Laughter, togetherness, and the magic of the season filled our
                workspace, making it a truly memorable occasion.
              </p>
              <p className="description">
                As we embrace the spirit of giving and joy, we extend our
                warmest wishes to everyone for a Merry Christmas filled with
                love, happiness, and prosperity.
              </p>
              <ul className="description">
                <li>Season’s Greetings from all of us at Ocean Lifespaces!</li>
                <li>Event Location: Ocean Lifespaces Office</li>
                <li>Event: Christmas Celebrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChristmasCelebration;
