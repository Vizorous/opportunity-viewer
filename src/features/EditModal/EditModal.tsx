import React, { ChangeEvent, ReactElement } from "react";
import { FormControl } from "react-bootstrap";
import { Button, Form, Modal } from "react-bootstrap";
import { TransitionCallbacks } from "react-bootstrap/esm/helpers";

interface Props {
  setEditTitle: Function;
  setEditDescription: Function;
  editTitle: string;
  editDescription: string;
  show: boolean;
  onHide: Function;
  updaterFunc: Function;
  isLoading: boolean;
}

export default function EditModal({
  show,
  onHide,
  editTitle,
  setEditTitle,
  setEditDescription,
  updaterFunc,
  editDescription,
  isLoading,
}: Props): ReactElement {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Details
        </Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          updaterFunc();
        }}>
        <Modal.Body>
          <Form.Group controlId="title">
            <Form.Label>Opportunity Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={editTitle}
              onChange={(e) => setEditTitle(e?.currentTarget?.value)}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Opportunity Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Description"
              value={editDescription}
              onChange={(e) => setEditDescription(e?.currentTarget?.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide as any} variant="secondary">
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
