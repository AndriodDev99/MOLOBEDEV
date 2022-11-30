import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";



function Education() {
    return (
        <section className="section bg-gradient-to-b from-gray-800 to-gray" name="Education">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title ">
                        Education
                    </h2>
                </div>
                <div className="flex flex-col items-center justify-center lg:flex-row">
                </div>
                <VerticalTimeline lineColor="#3e497a">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education hover:scale-110 duration-500 "
                        date="2012"
                        iconStyle={{ background: '#3e497a', color: '#fff' }} >
                        <h3 className="vertical-timeline-element-title">
                            University of Johannesburg
                        </h3>
                        <p className='text-xl mt-10 py-2 font-bold '>  National Diploma in IT Software Engineering</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education hover:scale-110 duration-500"
                        date="2016"
                        iconStyle={{ background: "#3e497a", color: "#fff" }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            OD ETDP (Education and Training Development Practitioner) Accredited Skills Development Facilitator
                        </h3>
                        <p> (Registered with CHIETA)</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education hover:scale-110 duration-500"
                        date="2018"
                        iconStyle={{ background: "#3e497a", color: "#fff" }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Master of Business Administration (MBA)
                        </h3>
                        <p>Regenesys Business School</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
        </section>

    );
}

export default Education;

