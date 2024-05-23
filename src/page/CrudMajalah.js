import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function CrudMajalah() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [textDetail, setTextDetail] = useState("");

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
                <Form.Label>Text Detail</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter text detail"
                value={textDetail}
                onChange={(e) => setTextDetail(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
    
  );
}

export default CrudMajalah;