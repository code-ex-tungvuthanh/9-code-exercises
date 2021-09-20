import React, {useState} from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function App() {

  const [editorCurrentState, changeState] = useState(EditorState.createEmpty())

  async function uploadCallback(file){
    console.log(file)
    return {data: {link: "dummy"}}
  }

  function onEditorStateChange(e){
    console.log('change')
    changeState(e)
    let content = JSON.stringify(convertToRaw(e.getCurrentContent()))
    console.log(convertToRaw(e.getCurrentContent()))
    console.log(content)
  }

  return (
    <div>
      <Editor
      editorState = {editorCurrentState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image:{
          previewImage: true,
          urlEnabled: true,
          uploadEnabled: true,
          uploadCallback: uploadCallback,
        }
      }}
      />
    </div>
  );
}

export default App;
