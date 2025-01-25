import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-resume-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-landing-page.component.html',
  styleUrl: './resume-landing-page.component.scss'
})
export class ResumeLandingPageComponent implements OnInit, AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  resumeJson = {
    "name": "Sivakoti Veeranageswara Rao",
    "contact": {
      "phone": "+91 9515302024",
      "email": "nagusivakoti1995@gmail.com"
    },
    "summary": "Experienced professional seeking a challenging role with a leading Corporate to leverage my exceptional teamwork, communication, and brilliant interpersonal skills. Committed to building a successful career, I aim to contribute my full potential, enhance my existing skill set, and seize growth opportunities within the organization.",
    "experience": [
      {
        "role": "Associate Software Engineer",
        "company": "Dreamstep Software Innovations Pvt",
        "period": "Aug 2022 - Present",
        "responsibilities": [
          "Developed and implemented software solutions, ensuring optimized and flawless operations.",
          "Spearheaded the TSRTC Commercial and Araku Tourism projects.",
          "Streamlined processes and enhanced efficiency by resolving software glitches.",
          "Collaborated with cross-functional teams for innovative solutions.",
          "Utilized various technologies like NodeJs, Express JS, Angular 14-16, ReactJs, and AWS."
        ]
      }
    ],
    "education": [
      {
        "degree": "B-Tech",
        "institution": "Aditya Engineering College",
        "field": "Electrical and Electronic Engineering",
        "grade": "73.10",
        "period": "Jan 2013 - Jan 2017"
      },
      {
        "degree": "Intermediate",
        "institution": "Aditya Junior College - Kakinada",
        "field": "MPC",
        "grade": "90.7",
        "period": "Jun 2011 - Mar 2013"
      },
      {
        "degree": "SSC",
        "institution": "CJ Municipal High School, Rajahmundry",
        "field": "10th",
        "grade": "Top grades",
        "period": "Jun 2010 - Mar 2011"
      }
    ],
    "projects": [
      {
        "name": "Task Management System",
        "period": "Nov 2024 - Present",
        "details": [
          "Designed and developed a comprehensive task management platform for task creation, assignment, and monitoring using Material Angular, TailwindCSS, and DevExtreme Data Grid.",
          "Implemented workflows for assigning tasks between government officials, departments, and the public.",
          "Integrated WhatsApp API and SMS notifications for instant communication.",
          "Incorporated Zoom API for seamless video conferencing.",
          "Developed a robust backend using Node.js and MySQL, hosted on AWS EC2 with S3 for file storage.",
          "Built a cross-platform mobile application using Ionic Angular and Capacitor for Android and iOS.",
          "Delivered a real-time dashboard with analytics and visualizations for task performance."
        ]
      },
      {
        "name": "RTMS (Real-Time Monitoring System)",
        "period": "May 2024 - Nov 2024",
        "details": [
          "Developed a comprehensive video conferencing application for both mobile and browser platforms.",
          "Utilized Angular 17, Capacitor, and Ionic Angular for front-end and mobile app development.",
          "Implemented backend using Node.js, MySQL, and AWS EC2.",
          "Integrated Node Mailer for email notifications and Vegam VC API for video conferencing.",
          "Used S3 Bucket for cloud storage and Visual Studio Code for development."
        ]
      },
      {
        "name": "Easy Polling Application",
        "period": "Mar 2024 - May 2024",
        "details": [
          "Developed a paid news module for the Easy Polling Application.",
          "Implemented scraping posts from Facebook, Instagram, Twitter, and daily newspapers using Puppeteer in Node.js.",
          "Integrated YouTube API to fetch posts using YouTube developer key.",
          "Designed and issued notices for candidates spreading adverse news about district collectors.",
          "Generated reports on candidates and notices using Angular 14 and MySQL.",
          "Utilized AWS servers, S3 Bucket, and data structures for optimized solutions."
        ]
      },
      {
        "name": "Araku Tourism",
        "period": "Oct 2023 - Feb 2024",
        "details": [
          "Streamlined the resort booking process by implementing an online platform.",
          "Developed an email notification system for seamless communication with customers.",
          "Implemented an email subscription feature to keep users informed about resort deals and updates.",
          "Enabled users to leave comments and reviews on the public booking portal.",
          "Created dashboards and reports for administrators on the backend.",
          "Integrated payments with SBI ePay using Node.js, Express.js, Angular 14, React.js, and Next.js.",
          "Hosted the project on AWS and utilized MySQL databases with RDS."
        ]
      },
      {
        "name": "TSRTC Commercial",
        "period": "Aug 2022 - Sep 2023",
        "details": [
          "Generated monthly invoices and expedited payment collection through online platforms.",
          "Designed and executed dashboards for the admin portal, improving data visibility and decision-making.",
          "Implemented a multi-tier ticket approval system, streamlining processes and increasing accountability.",
          "Facilitated secure transactions via vendor and employee applications using Angular 14, Node.js, and MySQL.",
          "Hosted the project on AWS and used RDS MySQL for database management."
        ]
      },
      {
        "name": "Basic Information App",
        "period": "Personal Project",
        "details": [
          "Developed a small information app using HTML, CSS, and JavaScript.",
          "The app allows users to search for various topics and get relevant facts, images, and links from the web.",
          "Implemented a responsive and user-friendly interface."
        ]
      }
    ],
    "technical_skills": [
      "Matlab",
      "Core Java and Advanced Java",
      "C and JavaScript",
      "Python Core",
      "NodeJs and ExpressJs",
      "Angular 11+",
      "ReactJs and NextJs",
      "MySQL",
      "AWS (EC2, S3, CI/CD pipeline)",
      "Ionic Capacitor Angular",
      "Firebase and GitHub",
      "Data Structures and Algorithms",
      "HTML, CSS, and SCSS"
    ],
    "personal_information": {
      "date_of_birth": "4th June 1995",
      "gender": "Male",
      "marital_status": "Unmarried",
      "nationality": "Indian",
      "father_name": "Mr. S. Arjunudu",
      "languages_known": ["English", "Telugu"]
    },
    "interests": [
      "Reading newspapers",
      "Solving puzzles",
      "Interaction with people and making friends",
      "Playing sports",
      "Listening to music"
    ],
    "strengths": [
      "Handling difficult situations",
      "Self-confidence",
      "Hardworking",
      "Positive attitude"
    ],
    socialMedia: [

      {
        name: "facebook",
        link: "https://www.facebook.com/sivakoti.veeranageswara"
      },

      {
        name: "twitter",
        link: "https://www.twitter.com/sivakoti.veeranageswara"
      },
      {
        name: "youtube",
        link: "https://www.youtube.com/sivakoti.veeranageswara"
      },
    ]
  }

  ngOnInit() {
    // ...existing init code...
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.section-content').forEach((section) => {
        observer.observe(section);
      });
    }
  }
}
