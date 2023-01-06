import React, {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../contexts/AuthProvider";

const ConversationMessages = () => {
    const {user} = useContext(AuthContext);
    const {email: userEmail} = user || {}
    const {conversationId} = useParams() || {}
    const [conversationMessages, setConversationMessages] = useState([])

    const fetchConversationMessages = async () => {
        const response = await axios.get(`http://localhost:5000/conversations/messages/${conversationId}`) || {}

        setConversationMessages(response?.data?.conversationMessages || []);
    }
    useEffect(() => {
        fetchConversationMessages();
    }, []);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const addNewMessage = async (form) => {
        const response = await axios.post("http://localhost:5000/conversations/messages", {
            conversationId,
            message: form.message,
            senderEmail: userEmail
        }) || {}
        console.log(response)
        await fetchConversationMessages()
    }

    return (
        <>
            <h1>Conversation messages</h1>
            <div>
                {
                    conversationMessages.map((conversationMessage) => (
                        <div style={{width: "40vw", margin: "0 auto"}}>
                            <p style={conversationMessage?.createdBy === userEmail ? {textAlign: "right"} : {textAlign: "left"}}>{conversationMessage?.createdBy} {conversationMessage?.message}</p>
                        </div>
                    ))
                }
            </div>

            <form onSubmit={handleSubmit(addNewMessage)}>
                <div className="m-3">
                    <input
                        {...register("message", {required: true})}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Type your message here"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <input
                        className="login-btn form-control mb-2"
                        value="Login"
                        type="submit"
                    />
                </div>
            </form>

        </>
    )
};

export default ConversationMessages;