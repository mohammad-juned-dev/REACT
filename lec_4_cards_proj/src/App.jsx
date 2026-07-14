import React from "react";
import Card from "./components/Card.jsx"
import User from "./components/User.jsx"

const jobOpenings = [
  {
    id: 1,
    companyName: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    position: "Software Engineer",
    postedAt: "2 days ago",
    tag1: "Senior",
    tag2: "Full-time",
    pay: 95,
    location: "Hyderabad, India"
  },
  {
    id: 2,
    companyName: "NVIDIA",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    position: "AI Research Engineer",
    postedAt: "5 hours ago",
    tag1: "Senior",
    tag2: "Full-time",
    pay: 120,
    location: "Bengaluru, India"
  },
  {
    id: 3,
    companyName: "Microsoft",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    position: "Cloud Architect",
    postedAt: "1 day ago",
    tag1: "Mid-Level",
    tag2: "Full-time",
    pay: 85,
    location: "Noida, India"
  },
  {
    id: 4,
    companyName: "Amazon",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    position: "Frontend Developer",
    postedAt: "3 days ago",
    tag1: "Junior",
    tag2: "Full-time",
    pay: 60,
    location: "Chennai, India"
  },
  {
    id: 5,
    companyName: "Meta",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    position: "Product Designer",
    postedAt: "6 hours ago",
    tag1: "Senior",
    tag2: "Full-time",
    pay: 110,
    location: "Remote"
  },
  {
    id: 6,
    companyName: "Apple",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    position: "UI/UX Designer",
    postedAt: "4 days ago",
    tag1: "Mid-Level",
    tag2: "Full-time",
    pay: 90,
    location: "Bengaluru, India"
  },
  {
    id: 7,
    companyName: "Netflix",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    position: "Software Engineer",
    postedAt: "2 weeks ago",
    tag1: "Senior",
    tag2: "Full-time",
    pay: 130,
    location: "Remote"
  },
  {
    id: 8,
    companyName: "Tesla",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    position: "Embedded Systems Intern",
    postedAt: "1 day ago",
    tag1: "Junior",
    tag2: "Internship",
    pay: 25,
    location: "Pune, India"
  },
  {
    id: 9,
    companyName: "IBM",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    position: "Data Scientist",
    postedAt: "5 days ago",
    tag1: "Mid-Level",
    tag2: "Full-time",
    pay: 70,
    location: "Gurugram, India"
  },
  {
    id: 10,
    companyName: "Intel",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VhcqMLyFRVvQpy8wNCPnauJNehZohwotow8YEKdcSA&s=10",
    position: "Hardware Engineer",
    postedAt: "2 days ago",
    tag1: "Senior",
    tag2: "Full-time",
    pay: 85,
    location: "Bengaluru, India"
  }
];
function App() {
  return (
    <div className="parent">
  {jobOpenings.map(function(elem){
return <Card company={elem.companyName} logo={elem.companyLogo} daysago={elem.postedAt} position={elem.position}
tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
  })}
    </div>
  
  )
}

export default App;
