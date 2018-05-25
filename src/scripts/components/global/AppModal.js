import React from 'react'
import PropTypes from 'prop-types'
import { Modal,
        ModalHeader, 
        ModalBody, 
        ModalFooter } from 'reactstrap'

const AppModal = (props) => {
    
  return (
    <div>
        <Modal isOpen={props.modal_state} toggle={ props.modal_toggler } className="modal-dialog-centered">
            
            <ModalHeader toggle={ props.modal_toggler}>{props.modal_title}</ModalHeader>
            
            <ModalBody>
                {props.modal_body}
            </ModalBody>
          
            <ModalFooter>
                {props.modal_footer} 
            </ModalFooter>
        
        </Modal>
    </div>
  )
}

AppModal.propTypes = {
    modal_state: PropTypes.bool,
    modal_toggler: PropTypes.func,
    modal_title: PropTypes.string,
    modal_body: PropTypes.any,
    modal_footer: PropTypes.element
}

export default AppModal