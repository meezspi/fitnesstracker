
function Data() {

    this.UserNames = [];
    
    this.createUser = (userId, password) => {
        if (this.UserNames.some(x=> x.Name == userId)){    
        }
        else {
            this.UserNames.push({ 
                Name: userId, 
                Password: password,
                MyActivity: [],
                MyFriends: []
            })
        }
    }

    this.InputData = (userId, text1, text2, text3) => {
        var currentUser = this.UserNames.find(x=> x.Name == userId);
        currentUser.MyActivity.push({ 
            Person: userId, 
            Type: text1, 
            Duration: text2, 
            Intensity: text3,
            Shareable: false
          });
    }

    this.ShareToFriends = () =>  {
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
        
module.exports = User; 

