/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = "Git is a program that acts as version control. It allows you to save a project as you go, and you can access the previous files if you have made a mistake.";



//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = "Github is an online website that lets you save your repositories. It will push all your versions to be online, and you can access your code on the internet. It makes it very helpful when working in teams, because everyone can see the different versions and access the code.";


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = "Git init allows you to initiate a repository on your computer."; 

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = "Git clone is a way to copy an existing file/repository."; 

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = "Git status is a way to see information about your repository. It will tell you if you have committed a file, and how many changes have been made. "; 

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = "Git add will at your files to git, and allow them to be tracked."; 

let gitAddCode = `git add .`; 


//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = "Git commit is a way to save your changes and add an explanation of what you did from the last commit until now.";

let gitCommitCode = `git commit -m "initial commit"`; 


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = "Git push will push your code online to github. As long as you have done the initalize step and copy and pasted the push from github, `git push` will push that code online.";
 