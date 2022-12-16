import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'John',
            image: 'https://images.freeimages.com/images/large-previews/2b1/labrador-retriever-1332487.jpg',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
}

export default Users;