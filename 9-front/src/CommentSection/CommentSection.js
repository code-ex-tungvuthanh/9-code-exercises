import React, {useState, useEffect} from 'react';
import CommentEditor from './CommentEditor';
import CommentList from './CommentList';
import {Container,Col,Row} from 'react-bootstrap'

export default function CommentSection(props) {
  
  const {users} = props;

  const[commentData, setData] = useState([]);

  async function getComment(){
    const response = await fetch("http://localhost:5000/api/comment/getcomment");
    const data = await response.json();
    setData(data);
  }

  useEffect(()=>{
    getComment();
  }, [])

  return (<Container>
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <CommentEditor currentUser={users.currentUser} getComment={getComment}/>
      </Col>
    </Row>
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <CommentList data={commentData}/>
      </Col>
    </Row>
  </Container>)
}