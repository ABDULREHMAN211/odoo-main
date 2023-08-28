import React, { Component } from "react";
import Reqeditor from "./Reqeditor";
import Styles from "../public/css/qform.module.css";
import Capch from "./Capch";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div>
          <br />
          <h5 className="text-center">Get A Quote</h5>
          <br />
          <div className="row align-items-center">
            <div className="col-lg-12 single-contact-info">
              <form className={Styles.frm}>
                
                <div class="mb-3">
                  <label ><strong>Number of Low Complexity Test Cases</strong></label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInput"
                    placeholder="0"
                  />
                </div>
                <div class="mb-3">
                <label ><strong>Number of Low Complexity Test Cases</strong></label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInput"
                    placeholder="0"
                  />
                </div>
                <div class="mb-3">
                <label ><strong>Number of Low Complexity Test Cases</strong></label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInput"
                    placeholder="0"
                  />
                </div>
                <div className= "mb-3">
                    <Dragger {...props}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit
                        from uploading company data or other band files
                      </p>
                    </Dragger>
                </div>
                <Reqeditor />
                <br />
                <br />
                <br />
                <Capch />
                <br />
                <div className={Styles.sbmtd}>
                  &nbsp; &nbsp;
                  <button type="submit" className={`${Styles.sbmt} btn`}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
