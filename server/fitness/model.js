
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
 
    this.MakeFriend = (userId, friendId) => {
        var currentUser = this.UserNames.find(x=> x.Name == userId);
        if(!currentUser.MyFriends.some(x=> x.Name == friendId)){
            CurrentUser.MyFriends.push(x=> x.Name == friendId);
        } 
    }
 
 }
       
 module.exports = Fitness;