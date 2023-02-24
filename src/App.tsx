import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "blue" }}>
                Annanya CISC275 with React Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col>
                        <h1>An ABC Show</h1>
                        <img
                            src="https://cdn.britannica.com/82/198682-050-0EB80673/cast-Greys-Anatomy.jpg"
                            alt="Greys Anatomy"
                        />
                        Top Three TV Shows:
                        <ol>
                            <li>Greys Anatomy</li>
                            <li>You</li>
                            <li>How to Get Away with Murder</li>
                        </ol>
                        <div
                            style={{
                                border: "1px solid red",
                                width: "100px",
                                height: "300px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>

                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Hello World
                        </p>
                        <div
                            style={{
                                border: "1px solid red",
                                width: "100px",
                                height: "300px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
