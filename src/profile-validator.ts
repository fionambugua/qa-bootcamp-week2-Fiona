
type UserProfile = {
    id: number;
    username: string;
    settings?: {
        notifications?: boolean;
    };
};

// Test users
const user1: UserProfile = {
    id: 1,
    username: "Fiona",
    settings: {
        notifications: true
    }
};

const user2: UserProfile = {
    id: 2,
    username: "James"
};

const user3: UserProfile = {
    id: 3,
    username: "Mary",
    settings: {}
};

// Notification validator
function isNotified(user: UserProfile): boolean {
    return user.settings?.notifications ?? false;
}

// Print results
console.log(`${user1.username}: ${isNotified(user1)}`);
console.log(`${user2.username}: ${isNotified(user2)}`);
console.log(`${user3.username}: ${isNotified(user3)}`);
