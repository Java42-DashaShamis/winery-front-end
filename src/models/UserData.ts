import Address from "./Address";

type UserData = {
    username: string;
    isAdmin: boolean;
    displayName: string;
    name?: String;
    surname?: String;
    address?: Address;
    email?: string;
    phone_number?: number;
    birthdate?: Date
}
export default UserData;