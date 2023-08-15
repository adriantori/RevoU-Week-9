//user data
interface User {
    name: string;
    email: string;
    password: string;
}

const users: User[] = [
    { name: "admin", email: "admin@dev.com", password: "$2a$10$/7l.mzRSR0TYIZJmzo7DJuD5iSYksSrAz.bXIV0vypnbL1Goxeuly"},
    { name: "adri", email: "adri@dev.com", password: "$2a$10$fNeQwmeGiePzlMnhPRc9Eee3pjgZ.pt.G/XrOcMVPRLg0Q8cohJqe"},
]

export default users;