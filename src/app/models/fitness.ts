export class Fitness {
    UserNames: User[] = [];
}

export class User {
    Name: string;
    MyActivity: Activity[] = [];
    MyFriends: User[] = [];
    Password: string;
}

export class Activity {
    Type: string;
    Duration: string;
    Intensity: string;
    Shareable: string;
}







