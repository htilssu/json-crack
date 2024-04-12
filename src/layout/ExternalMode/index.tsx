import React from "react";
import { Anchor, Button, Group, Modal, Text } from "@mantine/core";
import styled from "styled-components";
import { VscCode } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

const StyledAlert = styled.div`
  position: fixed;
  bottom: 36px;
  right: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-weight: 500;
  overflow: hidden;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.TEXT_POSITIVE};
  flex: 1;
  font-weight: 700;

  &::after {
    background: ${({ theme }) => theme.TEXT_POSITIVE};
    height: 1px;

    content: "";
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-left: 4px;
    opacity: 0.6;
  }
`;

const ExternalMode = () => {
  const [isExternal, setExternal] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname.includes("widget")) return setExternal(false);
      if (window.location.host !== "jsoncrack.com") return setExternal(true);
      return setExternal(false);
    }
  }, []);

  const closeModal = () => setOpen(false);

  if (!isExternal) return null;

  return (
    <></>
  );
};

export default ExternalMode;
