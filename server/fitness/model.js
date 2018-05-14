function Fitness() {

    this.UserNames = [];

    this.login = (userId, password) => {
        if (this.UserNames.some(x=> x.Name == userId)) {
            let currentUser = this.UserNames.find(x=> x.Name == userId);
            if (currentUser.Password == password){
                return { currentuser: currentUser.Name };
            }
        }
    }

    this.register = (userId, password) => {
        if (this.UserNames.some(x=> x.Name == userId)){
        }
        else {
            this.UserNames.push({ 
                Name: userId,
                Password: password,
                MyFriends:[],
                MyActivity:[]
             });
            return { success: true };
        }
    }
 
    this.InputFitness = ( person, activity, duration, intensity, share) => {
        if(this.UserNames.some(x=> x.Name == person)){
        var currentUser = this.UserNames.find(x=> x.Name == person);
        var newactivity = {
            Type: activity,
            Duration:duration,
            Intensity:intensity,
            Shareable:share
        };
        currentUser.MyActivity.push(newactivity);
    }
    }
 
    this.ShareToFriends = (userId) =>  {
        var currentUser = this.UserNames.find(x=> x.Name == userId);
        currentUser.Shareable = true;
    }
 
    this.MakeFriend = (myName, newFriend) => {
        var currentUser = this.UserNames.find(x=> x.Name == myName);
        var newFriend = this.UserNames.find(x=> x.Name == newFriend);
        if(!currentUser.MyFriends.some(x=> x.Name == friendId)){
            currentUser.MyFriends.push(newFriend);
        } 
    }

    this.GetActivity = (userId) => {
        return this.UserNames.find(x=> x.Name == userId);
    }

    this.GetUsers = (userId) => {
        return this.UserNames.find(x=> x.Name == userId);
    }
 
 }
       
 module.exports = Fitness;