import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, PopUp } from 'components/Modal/Modal.styled';

const modal = document.getElementById('backdrop');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // закриває модалку по ескейп

  const handleKeyDown = event => {
    const { code } = event;
    if (code === 'Escape') {
      onClose();
    }
  };

  // закриває модалку по бекдропу

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <PopUp>{children}</PopUp>
    </Backdrop>,
    modal
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   // закриває модалку по ескейп

//   handleKeyDown = event => {
//     const { code } = event;
//     const { onClose } = this.props;
//     if (code === 'Escape') {
//       onClose();
//     }
//   };

//   // закриває модалку по бекдропу

//   handleBackdropClick = e => {
//     const { onClose } = this.props;
//     if (e.currentTarget === e.target) {
//       onClose();
//     }
//   };

//   render() {
//     const { children } = this.props;
//     return createPortal(
//       <Backdrop onClick={this.handleBackdropClick}>
//         <PopUp>{children}</PopUp>
//       </Backdrop>,
//       modal
//     );
//   }
// }
