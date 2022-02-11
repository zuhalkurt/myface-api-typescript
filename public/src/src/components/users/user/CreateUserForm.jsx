import React, {useState} from "react";
import { createUser } from "../../../clients/myFaceClients";


export function CreateUserForm() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [coverImageUrl, setCoverImageUrl] = useState("");
    const [profileImageUrl, setProfileImageUrl] = useState("");

    return <form onSubmit={e => {
        
        e.preventDefault();
        createUser(name, username, email, coverImageUrl, profileImageUrl);
        
    }}>
        <p>Name: {name}, Username:{username}, Email:{email}, CoverImageUrl:{coverImageUrl}, ProfileImageUrl:{profileImageUrl}</p>
        <label for="name">Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            onChange={e=> setName(e.target.value)}        
        />
        <label for="username">Username:</label>
        <input
            type="text"
            id="username"
            name="username"
            onChange={e => setUsername(e.target.value)}
        />
        <label for="email">Email:</label>
        <input
            type="email"
            id="email"
            name="email"
            onChange={e=> setEmail(e.target.value)}        
        />
        <label for="coverImageUrl">CoverImageUrl:</label>
        <input
            type="text"
            id="coverImageUrl"
            name="coverImageUrl"
            onChange={e=> setCoverImageUrl(e.target.value)}        
        />
        <label for="profileImageUrl">ProfileImageUrl:</label>
        <input
            type="text"
            id="profileImageUrl"
            name="profileImageUrl"
            onChange={e=> setProfileImageUrl(e.target.value)}        
        />
        <input type="submit" value="Submit" />
    </form>
}