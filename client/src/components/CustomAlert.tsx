import React from "react";
import styled from "styled-components";

export type AlertType = "success" | "info" | "warning" | "error";

interface AlertProps {
  message: string;
  type: AlertType;
  onClose: () => void;
}

const AlertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--c-black);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

const AlertContainer = styled.div<{ type: AlertProps["type"] }>`
  position: relative;
  width: 50%;
  max-width: 600px;
  padding: 2em;
  border-radius: 5px;
  background-color: ${({ type }) =>
    type === "success"
      ? "var(--c-malachite)"
      : type === "info"
      ? "teal"
      : type === "warning"
      ? "var(--c-dune)"
      : type === "error"
      ? "var(--c-burnt-sienna)"
      : "#FFFFFF"};
  color: ${({ type }) =>
    type === "success"
      ? "#008000"
      : type === "info"
      ? "var(--c-azure)"
      : type === "warning"
      ? "#9B870C"
      : type === "error"
      ? "var(--c-shy-tomato)"
      : "#000000"};
`;

const AlertCloseButton = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  padding: 0.5em;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CustomAlert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  return (
    <AlertOverlay>
      <AlertContainer type={type}>
        <AlertCloseButton onClick={onClose}>Close</AlertCloseButton>
        <h2 style={{ paddingBottom: "2rem" }}>{type.toUpperCase()}</h2>
        <p style={{ fontSize: "1.6rem", lineHeight: "2.5rem" }}>{message}</p>
      </AlertContainer>
    </AlertOverlay>
  );
};
export default CustomAlert;
