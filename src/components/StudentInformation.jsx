import React, { Component } from "react";
import "./StudentInformation.css";

export class StudentInformation extends Component {
  render() {
    return (
      <div className="form-container">
        <h2>Student Information</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Roll Number:</label>
          <input type="number" name="rno" placeholder="Enter roll number" required />

          <label>Department:</label>
          <select class="drop" name="dept" required>
            <option value="">-- Select Department --</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
          </select>

          <label>Batch:</label>
          <select class="drop" name="batch" required>
            <option value="">-- Select Batch Year --</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </select>

          <label>Blood Group:</label>
          <select class="drop" name="BloodGroup" required>
            <option value="">-- Select Blood Group --</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <label>Portfolio:</label>
          <input type="url" name="portfolio" placeholder="Enter portfolio link" />

          <label>Skills:</label>
          <input type="text" name="skills" placeholder="Enter skills" />

          <label>Percentage:</label>
          <input type="number" name="percentage" placeholder="Enter percentage" step="0.01" />

          <label>Photo:</label>
          <input type="file" name="photo" accept="image/*" />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default StudentInformation;
