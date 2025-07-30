import React from "react";
import { useMutation, gql } from '@apollo/client'

export default function CreateUser() {
    // "useMutation" is already lazy.
    const [createUser, { loading, error, data }] = useMutation(gql`
        mutation createUser($input: CreateUserInput!) {
            createUser(input: $input) {
                id
                name
                age
                nationality
                hobby
            }
        }
    `);

    const [name, setName] = React.useState(null);
    const [age, setAge] = React.useState(null);

    if (loading) {
        return <p>loading...</p>;
    }

    if (error) { // an error only gets thrown if validation for the "input" structure fails.
        return <p>{error.message}</p>;
    }

    return <div>
        <form>
            <input type = "text" placeholder = "Name" onChange = {e => setName(e.target.value)}/>
            <input type = "number" placeholder = "Age" onChange = {e => setAge(parseInt(e.target.value, 10))}/>
            <button type = "submit" onClick = {() => createUser({ variables: { input: { name, age } } })}>Create</button>
        </form>
        {data?.createUser && JSON.stringify(data.createUser)}
    </div>;
}