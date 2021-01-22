import React, { Component } from "react";
import ModalContainer from "./ModalStyled";
import PropTypes from "prop-types";

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    e.code === "Escape" && this.props.closeModal();
  };

  handleOverlayClick = (e) => {
    e.target === e.currentTarget && this.props.closeModal();
  };

  render() {
    return (
      <ModalContainer className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={this.props.largeImage} alt="" />
        </div>
      </ModalContainer>
    );
  }
}
