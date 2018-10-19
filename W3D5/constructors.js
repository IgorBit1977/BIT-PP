function User(userUsername, userPassword){
    // var this = {}; === JS sam ovo radi

    this.username = userUsername;
    this.password = userPassword;
    this.changePassword = function(newPassword){
        this.password = newPassword;
    };

    // return this;===JS sam ovo radi 
}

var misa = new User("Misa", "123456");

console.log(misa.username);
console.log(misa.password);