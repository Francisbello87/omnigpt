import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { images } from "../../constants";

const ChatMessage = ({ message }) => {
  const { user, logOut, googleSignIn } = UserAuth();
  return (
    <div className={`chat-message ${message.user === "gpt" && "omnigpt"}  border-b-2 py-6 flex "`}>
      <div className="chat-message-center flex max-w-[766px] ml-auto mr-auto">
        <div className={`avatar ${message.user === "gpt" && "omnigpt"} "w-8 h-8 mr-3"`}>
          <img src={message.user === "gpt" && images.GPT} alt="User profile pic" />
        </div>
        <div className="message ">
          <p className="max-w-[700px] font-Poppins text-base">
            {message.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
