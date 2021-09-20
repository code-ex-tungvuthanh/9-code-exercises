import React from 'react'
import {Card, Row, Col, Image} from 'react-bootstrap';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function CommentList(props){

  const {data} = props


  let commentItemList = data.map((value, key)=>{

        const content = convertFromRaw(JSON.parse(value.content));
        const editorState = EditorState.createWithContent(content);

        return (
          <Row key={key}>
            <Col md={{ span: 10, offset: 1 }} >
              <Card className="mt-2">
                  <Row className="align-items-center" md={{offset: 1}}>
                    <Col md={1}>
                      <Image src="https://via.placeholder.com/20" roundedCircle fluid/>
                    </Col>
                    <Col>
                      <h6>{value.username}</h6>
                    </Col>
                  </Row>
                  <Row>
                  <Editor 
                    toolbarHidden  
                    editorState = {editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    readOnly = {true}
                    />
                  </Row>
              </Card>
            </Col>
          </Row>
        )
      })

  return (
    <Card className="mt-4">
      {commentItemList}
    </Card>
  )
}