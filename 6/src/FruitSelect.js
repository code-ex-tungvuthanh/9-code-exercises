import React, { useState } from 'react';
import { Nav, Tab, Row, Col } from 'react-bootstrap';

const fruits = ["orange", "apple", "grape"]

export default function FruitSelect() {

    const NavItems = fruits.map((value, index)=>{
        return (
            <Nav.Item key={index}>
                <Nav.Link eventKey={index.toString()}>{value}</Nav.Link>
            </Nav.Item>
        )
    });

    const NavePanes = fruits.map((value,index)=>{
            return (
                <Tab.Pane eventKey={index.toString()} key={index}>
                    fruitsの{value}が選択されました
                </Tab.Pane>
                )      
    })

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                {NavItems}
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                {NavePanes}
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    )
}