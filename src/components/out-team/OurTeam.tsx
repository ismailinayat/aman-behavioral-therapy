import React from "react";
import SectionHeading from "../SectionHeading";
import Link from "next/link";

const team = [
  {
    name: "Dr John Doe",
    position: "Psychiatrist",
    image: "1.webp",
    linkedIn: "https://www.linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Dr. Amelia Sterling",
    position: "Psychiatric Nurse Practitioner",
    image: "2.webp",
    linkedIn: "https://www.linkedin.com",
    twitter: "https://twitter.com",
  },

  {
    name: "Dr. Alexander Grant",
    position: "Counselor",
    image: "3.webp",
    linkedIn: "https://www.linkedin.com",
    twitter: "https://twitter.com",
  },
];

function Team() {
  return (
    <div id="team" className="team">
      <div className="heading">
        <SectionHeading text="Our Team" />

        <div className="heading__primary">
          <h3>The most qualified and talented individuals</h3>
        </div>
      </div>

      <div className="team__members">
        {team.map((member) => (
          <div className="member" key={member.name}>
            <div className="card">
              <div className="img">
                <img
                  src={`/team/${member.image}`}
                  alt={`image of ${member.name}`}
                />
              </div>

              <div className="detail">
                <div className="name">
                  <h3>{member.name}</h3>
                </div>

                <div className="position">
                  <p className="position__text">{member.position}</p>
                </div>
              </div>

              <div className="social">
                <div className="social__link">
                  <Link href={member.linkedIn}>
                    <img src="/icons/linkedin.png" alt="" />
                  </Link>
                </div>
                {/* <div className="social__link">
                  <img src="/icons/discord.png" alt="" />
                </div> */}
                <div className="social__link">
                  <Link href={member.twitter}>
                    <img src="/icons/twitter.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
