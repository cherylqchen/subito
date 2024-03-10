import React, { useState } from "react";
import "./SubtitlePage.css"; // Make sure this path is correct based on your project structure

function SubtitlePage() {
  const [videoLink, setVideoLink] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = [
    { label: "Select a course", value: "" },
    { label: "Mathematics", value: "maths" },
    { label: "Biology", value: "biology" },
    { label: "Political Science", value: "poli_sci" },
    { label: "English", value: "english" },
    { label: "Chemistry", value: "chemistry" },
    { label: "Statistics", value: "statistics" },
    { label: "Computer Science", value: "computer_science" },
    { label: "Physics", value: "physics" },
  ];

  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Video Link: ${videoLink}, Course: ${selectedCourse}`);
    // Here you would typically send the data to your backend or another function for processing
  };

  return (
    <div className="subtitlePage">
      <p className="subtitlePage__heading">Subito</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="videoLink">Video Link:</label>
          <input
            type="text"
            id="videoLink"
            value={videoLink}
            onChange={handleVideoLinkChange}
            className="inputField" // Added class for styling the input
          />
        </div>
        <div>
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            value={selectedCourse}
            onChange={handleCourseChange}
            className="selectField" // Added class for styling the select
          >
            {courses.map((course) => (
              <option key={course.value} value={course.value}>
                {course.label}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submitButton">
          Submit
        </button>{" "}
        {/* Added class for styling the button */}
      </form>
    </div>
  );
}

export default SubtitlePage;
