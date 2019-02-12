import React from 'react';
import cn from 'classnames';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: true,
    };
  }

  openWindow() {
    this.setState({
      isOpenModal: true,
    });
  }

  closeWindow() {
    this.setState(
      {
        isOpenModal: false,
      },
    );
  }

  render() {
    const { isOpenModal } = this.state;
    const { textDescr, buttonVal } = this.props;
    return (
      <div>
        <div
          className={cn('modal-overlay', {
            closed: !isOpenModal,
          })}
          id="modal-overlay"
        />
        <div
          className={cn('modal', {
            closed: !isOpenModal,
          })}
          id="modal"
          aria-hidden="true"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          role="dialog"
        >
          {textDescr}
          <button
            onClick={this.closeWindow.bind(this)}
            type="button"
            className="close-button"
            id="close-button"
            title={buttonVal}
          >
            {buttonVal}
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
