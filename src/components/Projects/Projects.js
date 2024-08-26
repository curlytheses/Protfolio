import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import health from "../../Assets/Projects/health.png";
import aptos from "../../Assets/Projects/aptos.png";
import todo from "../../Assets/Projects/todo.png";
import oudyo from "../../Assets/Projects/oudyo.jpeg";
import dns from "../../Assets/Projects/dns.jpeg";
import dnsmal from "../../Assets/Projects/dnsmal.png";
import malfile from "../../Assets/Projects/malfile.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malfile}
              isBlog={false}
              title="Novel Approach to Detect Malicious Files in Our Devices"
              description="Recently I got an Oportunity to work on Robotics and Machine Intelligence Lab in DTU. Under supervision of Dr. Rahul Thakur I studied various deep learning algorithms in depth and developed a novel approach to detect all malicious files present in our device with its md5 and hash values. We used dataset direct from Virustotal and CIS and I also have plan to publish a research paper about this work."
              ghLink="https://github.com/curlytheses/DTU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dnsmal}
              isBlog={false}
              title="Filter Malicious DNS from Network Firewall Using Deep Learning"
              description="Recently I applied for Some Summer Internship in the very end of my Bachelor studies to get some hands-on lab experience and also some external lab experience and I was shortlisted in SRIP program in IISER Bhopal under Dr. Kuntal Roy in ECE Department Quantum Lab. There I became familiar with some Qunatum Deep Learning Algorithms, Quantum ML packages and I successully completed this internship with submitting a detail project report."
              ghLink="https://github.com/curlytheses/IISERB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aptos}
              isBlog={false}
              title="Aptos"
              description="Our ReactJS-based app for blockchain and Web3 enables secure authentication, wallet integration, portfolio management, DApp browsing, transaction handling, real-time market data, notifications, and community engagement, providing users a comprehensive decentralized finance experience."
              ghLink="https://github.com/curlytheses/Aptos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oudyo}
              isBlog={false}
              title="Oudyo"
              description="The Flutter-based music player app project, inspired by Spotify, offers a sleek interface for streaming music. It features user authentication, personalized playlists, search functionality, audio playback controls, offline mode, social sharing, and seamless integration with music libraries."
              ghLink="https://github.com/curlytheses/oudyo/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="HealthTracker"
              description="The Flutter-based health and exercise tracker is a comprehensive app designed to help users monitor and improve their fitness levels. It includes features such as user profiles, goal setting, workout tracking, calorie counting, progress visualization, personalized recommendations and social sharing."
              ghLink="https://github.com/curlytheses/PersonalProjects/tree/main/healthtracker"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Work Reminder"
              description="The Flutter-based Daily Routine tracker is an efficient app designed to organize and optimize users' daily activities. It offers features like customizable task lists, reminders, progress tracking, habit formation, time management tools, statistics visualization, and user-friendly interface, facilitating productivity and habit-building."
              ghLink="https://github.com/curlytheses/PersonalProjects/tree/main/todoapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dns}
              isBlog={false}
              title="Malicious DNS Detection"
              description="Using advanced machine learning algorithms and real-time data analysis, the Malicious DNS Detection project aims to identify and neutralize potentially harmful domain name system activities, enhancing cybersecurity measures and safeguarding network integrity."
              ghLink="https://github.com/curlytheses/Malicious-DNS-Detection"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
