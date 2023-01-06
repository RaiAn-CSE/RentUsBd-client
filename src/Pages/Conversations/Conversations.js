import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsPersonCircle } from "react-icons/bs";

import { AuthContext } from "../../contexts/AuthProvider";

import "./Conversation.css";

const Conversations = () => {
  const { propertyId } = useParams() || {};
  const { user } = useContext(AuthContext);
  const { email: userEmail } = user || {};
  const [conversations, setConversations] = useState([]);

  const fetchConversations = async () => {
    const response =
      (await axios.post(`http://localhost:5000/conversations`, {
        email: userEmail,
        propertyId,
      })) || {};
    setConversations(response?.data?.conversations || []);
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  const getReceiverParticipant = (participants = []) => {
    const participantInfo = participants.find(
      (participant) => participant.email !== userEmail
    );

    return participantInfo;
  };

  const { register, handleSubmit } = useForm();

  const addNewMessage = async (form) => {
    const response =
      (await axios.post("http://localhost:5000/conversations/messages", {
        conversationId: form.conversationId,
        message: form.message,
        senderEmail: userEmail,
      })) || {};
    await fetchConversations();
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">Conversation</h2>
        <div className="row">
          <div className="col-3 message">
            <ul>
              <h3>User 1</h3>
              <h3> User 2</h3>
              <h3> User 3</h3>
              <h3> User 4</h3>
              <h3> User 5</h3>
            </ul>
          </div>
          <div className="col-9">
            {conversations.map((conversation) => (
              <div className="message-container mb-4">
                <div className="contact-info mb-3 border-bottom">
                  <h3>
                    <BsPersonCircle />{" "}
                    {getReceiverParticipant(conversation?.participants)?.name}
                  </h3>
                  <span>
                    Email:{" "}
                    {getReceiverParticipant(conversation?.participants)?.email}
                  </span>
                </div>

                <div className="feedback">
                  {conversation?.conversationMessages.map(
                    (conversationMessage) => (
                      <p
                        style={
                          conversationMessage?.createdBy === userEmail
                            ? { textAlign: "right" }
                            : {}
                        }
                      >
                        <span className=" message w-50">
                          {conversationMessage?.message}
                        </span>
                      </p>
                    )
                  )}
                </div>

                <div className="delete-btn">
                  <form onSubmit={handleSubmit(addNewMessage)}>
                    <input
                      {...register("conversationId", { required: true })}
                      type="text"
                      hidden={true}
                      value={conversation._id}
                      style={{ display: "none" }}
                    />
                    <input
                      {...register("message", { required: true })}
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
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat frontend design */}
      </div>
    </>
  );
};

export default Conversations;
