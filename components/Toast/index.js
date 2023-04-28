import { useEffect } from "react";
import styled from "styled-components";
import useToastStore from "../../stores/toastStore";

const StyledToast = styled.div`
  position: absolute;
  top: 65vh;
  right: 0;
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

export default function Toast() {
  const countSubmits = useToastStore((state) => state.countSubmits);
  const toasts = useToastStore((state) => state.toasts);
  const deleteToasts = useToastStore((state) => state.deleteToasts);

  function handleDeleteToast() {
    deleteToasts();
  }
  useEffect(() => {
    let interval;
    if (countSubmits) {
      interval = setTimeout(() => handleDeleteToast(), 3000);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [countSubmits]);

  return (
    <>
      {toasts.map((toast) => (
        <StyledToast key={toast.id} borderColor={toast.borderColor}>
          <span role="image" aria-label={toast.ariaLabel}>
            {toast.emoji}
          </span>
          <span>{toast.title}</span>
          <DeleteButton onClick={() => handleDeleteToast()}>x</DeleteButton>
          <Progress />
        </StyledToast>
      ))}
    </>
  );
}
