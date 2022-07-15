import React from 'react';
import axios from 'axios';
const url="http://localhost/HRMS/Visters/Visters.php";
const Signup = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const formData = new FormData();
  const handleSubmit =async (event) => {
    event.preventDefault()

    formData.append("file", selectedFile);
    
    try {
      const response = await axios.post(url,formData,{headers:{ "Content-Type": "multipart/form-data" }});
      console.log("response",response);
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  console.log("formData",formData,"selectedFile",selectedFile);
  return (

    <form onSubmit={handleSubmit}>
      <br/>
      <input type="file" onChange={handleFileSelect} name="file"/><br/>
      <input type="submit" value="Upload File" />
    </form>
  )
};

export default Signup;