import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { BsPlusLg } from 'react-icons/bs'


function MyVerticallyCenteredModal(props, event) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new  category
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label htmlFor='categoryTitle'></label>
                <input id='categoryTitle' type='text' />
                <button onClick={event}>Add</button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const AddCategoryModal = ({ newEvent }) => {

    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
            <div className='category-card' onClick={() => setModalShow(true)}>
                <div className="card">
                    <div className="card-body p-0 d-flex justify-content-between align-items-center">
                        <BsPlusLg className='m-auto plus' />
                    </div>
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                event={newEvent}
            />
        </>

    )
}

export default AddCategoryModal
