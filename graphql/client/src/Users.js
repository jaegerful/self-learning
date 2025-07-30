import React from "react";
import { useQuery, gql } from '@apollo/client'

export default function Users() {
    const { loading, error, data } = useQuery(gql`
        query {
            users {
                ...LiteUser
            }
        }

        fragment LiteUser on User {
            name
            age
            nationality
            hobby
        }
    `);

    // fragments are used by clients to share a subset of fields across queries/mutations.

    if (loading) {
        return <p>loading...</p>;
    }

    if (error) { // an error only gets thrown if validation for the "type" structure fails.
        return <p>{error.message}</p>;
    }

    return <div>
        {data?.users && JSON.stringify(data.users)}
    </div>;
}