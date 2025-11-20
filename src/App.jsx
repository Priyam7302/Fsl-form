import React from "react";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import Header from "../src/components/Header";
import "./App.css";

const App = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [checked, setChecked] = useState(true);
  const [showPopup, setShowPopup] = useState(false);  // show/hide modal
  const [isAgreed, setIsAgreed] = useState(false);     // user clicked "I Agree"
  const [switchOn, setSwitchOn] = useState(false);     // switch UI

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    parentName: "",
    parentPhone: "",
    localAddress: "",
    permanentAddress: "",
    course: "",
    heardFrom: "",
    role: "student",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setChecked(e.target.checked);
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  function submitForm() {
    setRegister(true);
  }


  // When user toggles switch
  function handleSwitch(e) {
    const isChecked = e.target.checked;
    setSwitchOn(isChecked);

    if (isChecked) {
      setShowPopup(true);       // show popup
    } else {
      setIsAgreed(false);       // disable register again
    }
  }

  // User clicks "I Agree"
  function agreeAndEnable() {
    setIsAgreed(true);
    setShowPopup(false);
  }

  return (

    <>
      <Header />
      <form >
        <div className="form-group-1">
          <div className="section-header">Personal Details</div>

          <div className="row">
            <div className="label">Name</div>
            <div className="field">
              <input type="text" name="name" placeholder="Enter your full name"
                value={formData.name} onChange={handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="label">Email</div>
            <div className="field">
              <input type="email" name="email" placeholder="Enter your email address"
                value={formData.email} onChange={handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="label">Phone</div>
            <div className="field">
              <input type="text" name="phone" placeholder="Enter your phone number"
                value={formData.phone} onChange={handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="label">Gender</div>
            <div className="field gender-group">
              <label><input type="radio" name="gender" value="male"
                checked={formData.gender === "male"} onChange={handleChange} /> Male</label>
              <label><input type="radio" name="gender" value="female"
                checked={formData.gender === "female"} onChange={handleChange} /> Female</label>
              <label><input type="radio" name="gender" value="other"
                checked={formData.gender === "other"} onChange={handleChange} /> Other</label>
            </div>
          </div>

          <div className="row">
            <div className="label">Aadhaar Card</div>
            <div className="field">
              <input type="file" accept="image/*" onChange={handleFileChange} />
              {file && <p>Selected: {file.name}</p>}
              {preview && <img src={preview} alt="Preview" className="preview-img" />}
            </div>
          </div>
        </div>

        <div className="form-group-2">
          <div className="section-header">Parent / Guardian Details</div>

          <div className="row">
            <div className="label">Parent / Guardian Name</div>
            <div className="field">
              <input className="input" type="text" name="parentName"
                placeholder="Enter your parent / guardian name"
                value={formData.parentName} onChange={handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="label">Parent / Guardian Phone</div>
            <div className="field">
              <input className="input" type="tel" name="parentPhone"
                placeholder="Enter your parent / guardian phone number"
                value={formData.parentPhone} onChange={handleChange} />
            </div>
          </div>
        </div>


        <div className="form-group-4">
          <div className="section-header">Educational Details</div>

          {/* ----- ROW: Are you a ----- */}
          <div className="row edu-row">
            <div className="label">Are you a:</div>

            <div className="role-row">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={formData.role === "student"}
                  onChange={handleChange}
                />
                Student
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="professional"
                  checked={formData.role === "professional"}
                  onChange={handleChange}
                />
                Working Professional
              </label>
            </div>
          </div>

          {/* ----- STUDENT FIELDS ----- */}
          {formData.role === "student" && (
            <div className="edu-fields-wrapper">
              <div className="row">
                <div className="label">Last Attained Qualification</div>
                <div className="field">
                  <input type="text" placeholder="Enter your qualification" />
                </div>
              </div>

              <div className="row">
                <div className="label">Year</div>
                <div className="field">
                  <input type="text" placeholder="Enter your completion year" />
                </div>
              </div>

              <div className="row">
                <div className="label">College / University</div>
                <div className="field">
                  <input type="text" placeholder="College / University" />
                </div>
              </div>
            </div>
          )}

          {/* ----- PROFESSIONAL FIELDS ----- */}
          {formData.role === "professional" && (
            <div className="edu-fields-wrapper">
              <div className="row">
                <div className="label">Designation</div>
                <div className="field">
                  <input type="text" placeholder="Enter your designation" />
                </div>
              </div>

              <div className="row">
                <div className="label">Company</div>
                <div className="field">
                  <input type="text" placeholder="Enter your company name" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="form-group-5">
          <div className="section-header">Course Details</div>

          {/* ----- COURSE SELECT ROW ----- */}
          <div className="row">
            <div className="label">Course</div>
            <div className="field">
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select a course</option>
                <option value="advanced-java">Advanced Java</option>
                <option value="android">Android</option>
                <option value="computer-basics">Computer Basics</option>
                <option value="core-java">Core Java</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="full-stack-development">Full Stack Development</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="nodejs">Node JS</option>
                <option value="photoshop">Photoshop</option>
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="react">React JS</option>
                <option value="web-design">Web Design</option>
                <option value="other-course">Other Course</option>
              </select>
            </div>
          </div>

          {/* ----- ENTER COURSE (IF OTHER COURSE) ----- */}
          {formData.course === "other-course" && (
            <div className="row">
              <div className="label">Enter your course</div>
              <div className="field">
                <input type="text" placeholder="Enter the course name" />
              </div>
            </div>
          )}

          {/* ----- HOW DID YOU KNOW ABOUT US ----- */}
          <div className="row">
            <div className="label">How did you come to<br />know about us?</div>

            <div className="field radio-row course-radio-row">
              <label>
                <input
                  type="radio"
                  name="heardFrom"
                  value="Google"
                  checked={formData.heardFrom === "Google"}
                  onChange={handleChange}
                />
                Google
              </label>

              <label>
                <input
                  type="radio"
                  name="heardFrom"
                  value="Linkedin"
                  checked={formData.heardFrom === "Linkedin"}
                  onChange={handleChange}
                />
                Linkedin
              </label>

              <label>
                <input
                  type="radio"
                  name="heardFrom"
                  value="Instagram"
                  checked={formData.heardFrom === "Instagram"}
                  onChange={handleChange}
                />
                Instagram
              </label>

              <label>
                <input
                  type="radio"
                  name="heardFrom"
                  value="College TPO"
                  checked={formData.heardFrom === "College TPO"}
                  onChange={handleChange}
                />
                College TPO
              </label>

              <label>
                <input
                  type="radio"
                  name="heardFrom"
                  value="Friend"
                  checked={formData.heardFrom === "Friend"}
                  onChange={handleChange}
                />
                Friend
              </label>
            </div>
          </div>

          {formData.heardFrom === "Friend" && (
            <div className="row">
              <div className="label">Friend's Name</div>
              <div className="field">
                <input type="text" placeholder="Enter your friend's name" />
              </div>
            </div>
          )}
        </div>


        {/* <Switch
          checked={checked}
          onChange={handleChange}
          slotProps={{ input: { 'aria-label': 'controlled' } }}
        />
        <p>By clicking submit, you agree to our <span>Terms & Conditions</span></p> */}
        {/* <button onClick={submitForm}>Register</button> */}
        {/* Terms & Conditions Switch */}
        <div className="terms-row">
          <Switch checked={switchOn} onChange={handleSwitch} />
          <p>
            By clicking submit, you agree to our <span>Terms & Conditions</span>
          </p>
        </div>

        {/* REGISTER BUTTON */}
        <button
          disabled={!isAgreed}
          className={`register-btn ${!isAgreed ? "disabled-btn" : ""}`}
        >
          Register
        </button>


        {/* ---------- TERMS POPUP ---------- */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-box">
              <div className="popup-header">
                <h2>Terms & Conditions</h2>
                <button className="close-btn" onClick={() => setShowPopup(false)}>
                  ✕
                </button>
              </div>

              <hr />

              <h3>You agree to the following:</h3>

              <p>You have understood the course content.</p>
              <p>You have understood the course duration.</p>
              <p>You have cleared your doubts regarding the course.</p>
              <p>Fees once paid is not refundable.</p>
              <p>
                In case of uninformed leave, you will not be eligible for a
                backup.
              </p>
              <p>
                7 days or more of leave without permission will terminate your
                registration.
              </p>

              <div className="popup-actions">
                <button className="agree-btn" onClick={agreeAndEnable}>
                  I Agree
                </button>
                <button className="close-gray" onClick={() => setShowPopup(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default App;


