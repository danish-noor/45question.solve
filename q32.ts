//Q32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//Array of Current User
let current_users:string[] = ["usman","ali","areeba","zain","osama"]

//Array of New User
let new_users:string[] = ["danish","asas","ali","humdan","areeba"]

// Loop through the new_users to cheak of cheak for usernames availablity.
new_users.forEach(newUser =>{
     
    //Making a condition for username already exist and save in our_condition variable
    let ourCondition = current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())

    //Print Different messages using If-Else statements
    if (ourCondition){
        console.log(`Sorry ${newUser} is already taken! `);
        
    }else{
        console.log(`This username ${newUser} is available `);
        
    }
});

