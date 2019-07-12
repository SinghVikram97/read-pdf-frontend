import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <form class="uploadForm" action="http://localhost:4444/fileUpload" method="post" enctype="multipart/form-data">
        <label class="control-label">Select File</label>
        <input name="file-name" id="input-1" type="file" class="file"/>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
