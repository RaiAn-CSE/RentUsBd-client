import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import "./Conversation.css";

const Conversations = () => {
  const { user } = useContext(AuthContext);
  const { email: userEmail } = user || {};
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response =
        (await axios.get(`http://localhost:5000/conversations/${userEmail}`)) ||
        {};

      setConversations(response?.data?.conversations || []);
    }
    fetchData();
  }, []);

  const getParticipantName = (participants = []) => {
    const participantInfo = participants.find(
      (participant) => participant.email !== userEmail
    );

    return participantInfo?.name;
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">Conversation</h2>

        {/* Chat frontend design */}
        <div className="message-container mb-4">
          <div className="contact-info mb-3 border-bottom">
            <h3>
              <BsPersonCircle /> Name
            </h3>
            <span>Email: robi@gmail.com</span>
          </div>
          <div className="feedback">
            <p>
              <span className=" message w-50">Hi</span>
            </p>
            <p style={{ textAlign: "right" }}>
              <span className=" message w-50">Hello</span>
            </p>

            {/* <p style={conversationMessage?.createdBy === userEmail ? {textAlign: "right"} : {textAlign: "left"}}>{conversationMessage?.createdBy} {conversationMessage?.message}</p> */}
          </div>
          <div className="delete-btn">
            <input
              // {...register("message", {required: true})}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Type your message here"
            />
            <input
              className="login-btn form-control ms-2 w-25"
              value="Send"
              type="submit"
            />
          </div>
        </div>

        <div></div>

        <ul className="list-group">
          {conversations.map((conversation) => (
            <Link
              className="list-group-item"
              to={`/conversation-messages/${conversation?._id}`}
            >
              {getParticipantName(conversation?.participants)}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Conversations;
