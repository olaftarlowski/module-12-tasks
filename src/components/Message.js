import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { messageActions } from "../store/messages/messages";
import { MessageWrapper } from "../styled-components/styled-components";

const Message = () => {
  const dispatch = useDispatch();
  const messageText = useSelector((state) => state.message.message);
  const messageType = useSelector((state) => state.message.type);

  const dispatchMessage = useCallback(() => {
    dispatch(
      messageActions.addMessage({
        message: null,
        type: null,
        isActive: false,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatchMessage();
    }, 4000);

    return () => clearTimeout(timer);
  }, [dispatchMessage]);

  const closeHandler = () => {
    dispatchMessage();
  };

  return (
    <MessageWrapper className={messageType}>
      <span onClick={closeHandler}>X</span>
      <p>{messageText}</p>
    </MessageWrapper>
  );
};

export default Message;
