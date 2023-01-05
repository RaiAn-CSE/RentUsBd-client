import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Table } from 'react-bootstrap';
import Loading from '../../Shared/Loading/Loading';

const FeedBack = () => {

    const {
        data: allFeedback = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                const res = await fetch(
                    "https://home-rent-server-raian-cse.vercel.app/feedback",
                    {
                        headers: {},
                    }
                );
                const data = await res.json();
                return data;
            } catch (error) { }
        },
    });

    const handleDelete = (id) => {
        console.log(id);
        const agree = window.confirm(`Are you sure you want to delete :${id} `);
        if (agree) {
            console.log("Deleting user with id:", id);
            fetch(`https://home-rent-server-raian-cse.vercel.app/feedback/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        refetch();
                    }
                    console.log(data);
                });
        }
    };

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2>This Is Feedback Page{allFeedback.length}</h2>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr style={{ backgroundColor: "#7065f0", color: "white" }}>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>FeedBack</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allFeedback.map((feedback, i) => (
                            <tr key={feedback._id}>
                                <th>{i + 1}</th>
                                <td>{feedback.name}</td>
                                <td>{feedback.email}</td>
                                <td>{feedback.message}</td>
                                <td>
                                    <button
                                        className="btn btn-outline  form-control dashboard-btn w-50 btn-xs mr-3 mb-5"
                                        onClick={() => handleDelete(feedback._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default FeedBack;