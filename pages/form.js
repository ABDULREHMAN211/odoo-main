import React, { Component } from "react";
class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div>
          <br />
          <h5 style={{ textAlign: "center" }}>Job Application</h5>
          <br />
          <div className="row align-items-center">
            <div className="col-lg-12 single-contact-info">
              <form style={{ marginLeft: "30px", marginRight: "30px" }}>
                <div
                  class="mb-3 "
                  style={{
                    padding: "80px",
                    borderStyle: "dotted",
                    borderWidth: 1.5,
                  }}
                >
                  <label
                    for="files"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h6>UPLOAD CV/RESUME</h6>
                  </label>
                  <input
                    id="files"
                    style={{ visibility: "hidden" }}
                    type="file"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="First Name * "
                    style={{ height: "2.9rem" }}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Last Name *"
                    style={{ height: "2.9rem" }}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Email *"
                    style={{ height: "2.9rem" }}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Phone *"
                    style={{ height: "2.9rem" }}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Address *"
                    style={{ height: "2.9rem" }}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="City *"
                    style={{ height: "2.9rem" }}
                  />
                </div>
                <div class="mb-3">
                  <select
                    name="gender"
                    id="gender"
                    class="form-control"
                    style={{ height: "2.9rem" }}
                  >
                    <option>Gender *</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div class="mb-3 ">
                  <select
                    name="skill"
                    id="skill"
                    class="form-control"
                    style={{ height: "2.9rem" }}
                  >
                    <option>Select Skills *</option>
                    <option value="Male">Python</option>
                    <option value="Female">Django</option>
                    <option value="Male">Java Script</option>
                    <option value="Female">React Js</option>
                  </select>
                </div>
                <div class="mb-3">
                  <select
                    name="source"
                    id="source"
                    class="form-control"
                    style={{ height: "2.9rem" }}
                  >
                    <option>Select Source *</option>
                    <option value="Male">Referal</option>
                    <option value="Female">Company Web Site</option>
                    <option value="Male">Job Board</option>
                    <option value="Female">Social Media</option>
                  </select>
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Source Detail"
                    style={{ height: "2.9rem" }}
                  />
                </div>
                {/* lines */}
                <div class="row">
                  <div>
                    
                  </div>
                  <div class="mb-3 col-lg-3">
                    <select
                      name="source"
                      id="source"
                      class="form-control"
                      style={{ height: "2.9rem" }}
                    >
                      <option>Employer *</option>
                      <option value="Male">3D Modeling</option>
                      <option value="Female">3Soft USA</option>
                      <option value="Male">4 Pulse Technologies</option>
                      <option value="Female">7 Vals</option>
                    </select>
                  </div>

                  <div class="mb-3 col-lg-3">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Title"
                      style={{ height: "2.9rem" }}
                    />
                  </div>
                  <div class="mb-3 col-lg-2">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Start"
                      style={{ height: "2.9rem" }}
                    />
                  </div>
                  <div class="mb-3 col-lg-2">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="End"
                      style={{ height: "2.9rem" }}
                    />
                  </div>
                  <div class="mb-3 col-lg-2">
                    <strong>Present:</strong>&nbsp;
                    <input
                      type="checkbox"
                      id="exampleInputPassword1"
                      placeholder="Source Detail"
                    />
                  </div>

                  <div class="mb-3 col-lg-3">
                    <select
                      name="source"
                      id="source"
                      class="form-control select"
                      style={{ height: "2.9rem" }}
                    >
                      <option>Institute *</option>
                      <option value="Male">Punjab University</option>
                      <option value="Female">Virtual University</option>
                      <option value="Male">
                        University Of Engineering And Technology
                      </option>
                      <option value="Female">Superior University</option>
                    </select>
                  </div>

                  <div class="mb-3 col-lg-3">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Major"
                      style={{ height: "2.9rem" }}
                    />
                  </div>
                  <div class="mb-3 col-lg-2">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Start"
                      style={{ height: "2.9rem" }}
                    />
                  </div>
                  <div class="mb-3 col-lg-2">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="End"
                      style={{ height: "2.9rem" }}
                    />
                  </div>
                  <div class="mb-3 col-lg-2">
                    <strong>Present:</strong>&nbsp;
                    <input
                      type="checkbox"
                      id="exampleInputPassword1"
                      placeholder="Source Detail"
                    />
                  </div>
                </div>

                <br />
                <div style={{ float: "right", paddingRight: "24px" }}>
                  <button
                    type="cancel"
                    class="btn"
                    style={{
                      backgroundColor: "#D3D3D3",
                      borderColor: "#D3D3D3",
                    }}
                  >
                    Cancel
                  </button>
                  &nbsp; &nbsp;
                  <button
                    type="submit"
                    class="btn"
                    style={{
                      backgroundColor: "#8f00ff",
                      borderColor: "#8f00ff",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
