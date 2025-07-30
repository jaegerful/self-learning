import React from "react";
import { useLazyQuery, gql } from '@apollo/client'

export default function User() {
    const [getUser, { loading, error, data }] = useLazyQuery(gql`
        query getUser($id: ID!) {
            user(id: $id) {
                name
                age
                nationality
                hobby
            }
        }
    `);

    const [userId, setUserId] = React.useState(null);

    if (loading) {
        return <p>loading...</p>;
    }

    if (error) { // an error only gets thrown if validation for the "type" structure fails.
        return <p>{error.message}</p>;
    }

    return <div>
        <form>
            <input type = "number" placeholder = "User ID" onChange = {e => setUserId(e.target.value)}/>
            <button type = "submit" onClick = {() => getUser({ variables: { id: userId } })}>Search</button>
        </form>
        {data?.user && JSON.stringify(data.user)}
    </div>;
}