import React from 'react';

const UserList = ({ users, handleClick }) => {

    let renderList = users.map((user) => {
        return (
            <tr onClick={() => handleClick(user.id)}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
            </tr>
        );
    });
    return (
        <div className="container">
            <h1>Employee List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id </th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>{renderList}</tbody>
            </table>
        </div>
    );
};

export default UserList;
