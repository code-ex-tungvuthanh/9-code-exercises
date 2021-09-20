import React, {useState} from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function CommentEditor(props){

  const [editorCurrentState, changeState] = useState(EditorState.createEmpty())

  const {currentUser, getComment} = props;

  async function uploadImageCallback(file){
    let formData = new FormData(); 
    formData.append("Image", file);
    const response = await fetch("http://localhost:5000/api/comment/uploadimage", 
    {
      method: 'post',
      body: formData,
    });

    const data = await response.json()
    const {imageUrl} = data;

    return {data: {link: imageUrl}}
  }
  
  async function onEditorStateChange(newEditorState){
    changeState(newEditorState);
    // const content = JSON.stringify(convertToRaw(newEditorState.getCurrentContent()))

  }

  async function SubmitComment(){
    const content = JSON.stringify(convertToRaw(editorCurrentState.getCurrentContent()))
    const uploadData = {
      Content: content,
      UserId: currentUser.id
    };

    const response = await fetch("http://localhost:5000/api/comment/uploadcomment",
    {
      headers: {
        'Content-Type': "application/json;charset=utf-8"
      },
      method: 'post',
      body: JSON.stringify(uploadData),
    });

    if(response.status == 200){
      console.log(response.status);
      changeState(EditorState.createEmpty())
      getComment();
    }
  }

  if(currentUser == null){
    return null;
  }

  return (
    <Card className="mt-2">
      <Row>
        <Col>
          <Card.Text>
            Edit Comment
          </Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Editor 
          editorStyle={{ height:"150px", lineHeight: '50%', borderBottom: "1px solid rgba(0,0,0,.125)" }}    
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
              uploadCallback: uploadImageCallback,
            }
          }}
          />
        </Col>
      </Row>
      <Row className="mt-1">
        <Col md={2}>
          <Button onClick={SubmitComment}>Save Change</Button>
        </Col>
      </Row>
    </Card>
  )
}