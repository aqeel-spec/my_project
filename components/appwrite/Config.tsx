import {Client , Account , Databases} from "appwrite";

const client = new Client();

client.setEndpoint('http://localhost/v1')
.setProject("644fb2fd7f6dc51f0c95");

export const account = new Account(client);

export const database = new Databases(client);