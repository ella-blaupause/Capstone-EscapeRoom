import { useEffect } from "react";
import styled from "styled-components";

const StyledToast = styled.div`
  position: absolute;
  bottom: 25px;
  right: 20px;
  background-color: white;
  overflow: hidden;
  padding: 20px 35px 20px 16px;
  box-shadow: 0 5px 10px grey;
  border-left: 6px solid ${(props) => props.borderColor};
  animation: toast-in-right 0.4s;

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Progress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: #ddd;
  &:before {
    content: "progress";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: darkblue;
    animation: progress 3s linear forwards;
  }

  @keyframes progress {
    100% {
      right: 100%;
    }
  }
`;

export default function Toast({ toasts, onDeleteToast, isSubmit }) {
  useEffect(() => {
    let interval;
    if (isSubmit) {
      interval = setTimeout(() => onDeleteToast(), 3000);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [isSubmit]);

  return (
    <>
      {toasts.map((toast) => (
        <StyledToast key={toast.id} borderColor={toast.borderColor}>
          <span>{toast.emoji}</span>
          <span>{toast.title}</span>
          <DeleteButton onClick={() => onDeleteToast()}>x</DeleteButton>
          <Progress />
        </StyledToast>
      ))}
    </>
  );
}
