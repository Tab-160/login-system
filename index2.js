/**
 * @link https://github.com/Tab-160/login-system
 *
 * @version 1.0.0
 * @author Greenup, Rab [tab160.com@gmail.com]
 * @copyright Greenup, Rab 2019
 */

var username;
var password;
var confirmPassword;
var usernames = ['bobby', 'suszan', 'greg'];
var salts = ['1Fmh_DDTP-svFtrsN@-rjWBhS*7CP9NC', 'ujX$TtYh#r_K&Qo2HJV$S%MraQV+^K36', "m7#xGa19H&jjOxlN&A$^X?Hbz2Jo8%bn"];
var passwords = ['98ac7e1d9535867fbdcadf5e2bb6185a71d5bbe5737ab6dcc2e8e981dc9b01f30c00d057b093eb00dbe0431586b0ab3521c85e8c1a5c51a92334574be555d8e2', '98c564abba00cdbb70046c382674924227399c418c1638bbdaa52b8e8d0cd171dafa67750ae114a2ab95b583831ae2e2aec8f07e5f6d59548737f64990850703', "70de9508b8db92d5d370c7a46057c1e86208b0e058e361d56198da53288e2d46d7b78e0437ee3071aa1f02dcf947a3efe8269464f90c428e05cac6cd96f08c69"];
var usernameTrue;
var passwordTrue;

function signIn2() {

	username = document.getElementById('logon_input_username').value;
	password = document.getElementById('logon_input_password').value;
  
	usernameTrue = usernames.indexOf(username);
  if(usernameTrue != -1){
    
    password = sha3_512(password + salts[usernameTrue]);
	  passwordTrue = passwords.indexOf(password);
  	if (usernameTrue == passwordTrue) {

	  	window.location.href = 'page.html';
  	} else {
	  	window.alert('Incorrect Username or Password');
      window.alert(username);
      window.alert(password);
      window.alert(usernameTrue);
      window.alert(passwordTrue);
	  }
  } else {
    window.alert('Incorrect Username or Password');
  }
  
  
}

function createAccount() {
  //TODO: Add salt
  username = document.getElementById('createAccount_input_username').value;
  password = document.getElementById('createAccount_input_password').value;
  confirmPassword = document.getElementById('createAccount_input_confirmPassword').value;
  usernameTrue = usernames.indexOf(username);
  if (password == confirmPassword) {
    if (usernameTrue == -1) {
      password = sha3_512(password);
      usernames.push(username);
      passwords.push(password);
      window.location.href = "index.html";
      window.alert("succed");
    } else {
      window.alert("fail");
      document.getElementById("error").innerHTML = "Choose a new Username";
    }
  } else {
    window.alert("fail, password");
    document.getElementById("error").innerHTML = "Passwords don\'t match";
  }
}
/**
  *TODO: 
  *     Move to seperate database
  *     Update createAccount to current system
  *     Make a change password function
  *     
*/
