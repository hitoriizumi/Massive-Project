import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl, Container } from "react-bootstrap";

function CrudBiotalaut() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [textWeight, setTextWeight] = useState("");
  const [textEating, setTextEating] = useState("");
  const [textSize, setTextSize] = useState("");
  const [textDepth, setTextDepth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container className="my-5">
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Text Weight</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter text weight"
                value={textWeight}
                onChange={(e) => setTextWeight(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Text Eating</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter text eating"
                value={textEating}
                onChange={(e) => setTextEating(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Text Size</Form.Label>
                <InputGroup>
                <InputGroup.Text>px</InputGroup.Text>
                <FormControl
                    type="number"
                    placeholder="Enter text size"
                    value={textSize}
                    onChange={(e) => setTextSize(e.target.value)}
                />
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Text Depth</Form.Label>
                <FormControl
                type="text"
                placeholder="Enter text depth"
                value={textDepth}
                onChange={(e) => setTextDepth(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
    
  );
}

export default CrudBiotalaut;