import React from 'react'
import PropTypes from 'prop-types'
import { Modal,
        ModalHeader, 
        ModalBody, 
        ModalFooter } from 'reactstrap'

const AppModal = (props) => {
    
  return (
    <div>
        {console.log('modal was rendered')}
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





// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Modal,
//     Button, 
//         ModalHeader, 
//         ModalBody, 
//         ModalFooter } from 'reactstrap'

// export default class AppModal extends Component {
//   static propTypes = {
//     modal_state: PropTypes.bool,
//     modal_toggler: PropTypes.func,
//     modal_title: PropTypes.string,
//     modal_body: PropTypes.any,
//     modal_footer: PropTypes.element
//   }

//   constructor(props) {
//     super(props)
  
//   }
  

//   render() {
//     return (
//         <div>
//             <Modal isOpen={this.props.modal_state} toggle={this.props.modal_toggler} className="modal-dialog-centered">
                
//                 <ModalHeader toggle={this.props.modal_toggler}>{this.props.modal_title}</ModalHeader>
                
//                 <ModalBody>
//                     {this.props.modal_body}
//                 </ModalBody>
            
//                 <ModalFooter>
//                 {/* <Button color="primary" onClick={this.props.modal_toggler}><i className="fa fa-plus-circle fa-lg"></i></Button> */}
//                     {this.props.modal_footer}
//                 </ModalFooter>
            
//             </Modal>
//         </div>
//     )
//   }

// }//@end



