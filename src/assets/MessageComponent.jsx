import { Modal, Button } from 'react-bootstrap';

export default function MessageComponent({ show, handleClose, message, variant }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={`alert alert-${variant}`} role="alert">
          {message}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

