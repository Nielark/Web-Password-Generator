document.addEventListener("DOMContentLoaded", function(){
    // Arrays specific characters
    const specCharArr = ";,:.+-*/%><=!~^&|[]{}()";
    const numArr = "0123456789";
    const lowercaseArr = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Getting the ID of checkboxes
    var specChar = document.querySelector("#special-char");
    var numbers = document.querySelector("#numbers");
    var lowercase = document.querySelector("#lowercase-letters");
    var uppercase = document.querySelector("#uppercase-letters");
    var passwordComb = "";
    var passwordCompLen = 0;

    // Input the length for the password to be generated
    var passwordLen = document.querySelector("#number-characters");
    passwordLen.addEventListener("wheel", function(e){
        e.preventDefault(); // Prevent the default scroll behavior
        
        if(e.deltaY < 0){
            // Scrolling up
            passwordLen.value++;
        } 
        else if(e.deltaY > 0){
            // Scrolling down
            passwordLen.value--;
        }
    
        // Ensure the value stays within the minimum value of 8)
        if(passwordLen.value < 8){
            passwordLen.value = 8;
        }
    });

    // Generate button (the logic starts here)
    var btnGenerate = document.querySelector("#generate");
    var password = document.querySelector("#password");
    btnGenerate.addEventListener("click", function(){
        document.querySelector("#ctn-msg").style.display = "none";
        password.value = ""

        if(passwordLen.value >= 8){
            if(specChar.checked == true && numbers.checked == false && lowercase.checked == false && uppercase.checked == false){
                passwordComb = specCharArr;
                passwordCompLen = passwordComb.length;  
            }
            else if(specChar.checked == false && numbers.checked == true && lowercase.checked == false && uppercase.checked == false){
                passwordComb = numArr;
                passwordCompLen = passwordComb.length;
            }
            else if(specChar.checked == false && numbers.checked == false && lowercase.checked == true && uppercase.checked == false){
                passwordComb = lowercaseArr;
                passwordCompLen = passwordComb.length;
            }
            else if(specChar.checked == false && numbers.checked == false && lowercase.checked == false && uppercase.checked == true){
                passwordComb = uppercaseArr;
                passwordCompLen = passwordComb.length;
            }
            else if(specChar.checked == true && numbers.checked == true && lowercase.checked == false && uppercase.checked == false){
                passwordComb = specCharArr + numArr;
                passwordCompLen = passwordComb.length
            }
            else if(specChar.checked == true && numbers.checked == false && lowercase.checked == true && uppercase.checked == false){
                passwordComb = specCharArr + lowercaseArr;
                passwordCompLen = passwordComb.length
            }
            else if(specChar.checked == true && numbers.checked == false && lowercase.checked == false && uppercase.checked == true){
                passwordComb = specCharArr + uppercaseArr;
                passwordCompLen = passwordComb.length
            }
            else if(specChar.checked == false && numbers.checked == true && lowercase.checked == true && uppercase.checked == false){
                passwordComb = numArr + lowercaseArr;
                passwordCompLen = passwordComb.length
            }
            else if(specChar.checked == false && numbers.checked == true && lowercase.checked == false && uppercase.checked == true){
                passwordComb = numArr + uppercaseArr;
                passwordCompLen = passwordComb.length;
            }
            else if(specChar.checked == false && numbers.checked == false && lowercase.checked == true && uppercase.checked == true){
                passwordComb = lowercaseArr + uppercaseArr
                passwordCompLen = passwordComb.length
            }
            else if(specChar.checked == true && numbers.checked == true && lowercase.checked == true && uppercase.checked == false){
                passwordComb = specCharArr + numArr + lowercaseArr;
                passwordCompLen = passwordComb.length
            }
            else if(specChar.checked == true && numbers.checked == true && lowercase.checked == false && uppercase.checked == true){
                passwordComb = specCharArr + numArr + uppercaseArr;
                passwordCompLen = passwordComb.length
            }
            else if(specChar.checked == true && numbers.checked == false && lowercase.checked == true && uppercase.checked == true){
                passwordComb = specCharArr + lowercaseArr + uppercaseArr;
                passwordCompLen = passwordComb.length
            }
            else if(specChar.checked == false && numbers.checked == true && lowercase.checked == true && uppercase.checked == true){
                passwordComb = numArr + lowercaseArr + uppercaseArr;
                passwordCompLen = passwordComb.length
            }
            else if(specChar.checked == true && numbers.checked == true && lowercase.checked == true && uppercase.checked == true){
                passwordComb = specCharArr + numArr + lowercaseArr + uppercaseArr;
                passwordCompLen = passwordComb.length
            }
            else if(specChar.checked == false && numbers.checked == false && lowercase.checked == false && uppercase.checked == false){
                document.querySelector(".msg").textContent = "Please select on the checkboxes below";
                document.querySelector("#ctn-msg").style.display = "block";
            };

            // Loop for displaying the generated password in the text box
            for(let x = 0; x < passwordLen.value; x++){   
                password.value += passwordComb.charAt(Math.floor(Math.random() * passwordCompLen));
            }
        }
        else{
            document.querySelector(".msg").textContent = "Number of characters must be 8 above";
                document.querySelector("#ctn-msg").style.display = "block";
        }

        passwordComb = "";      // Clears the generated password
        passwordCompLen = 0;    // Initialized the password length back to 0
    });

    // Clears the generated password in text box
    var btnClear = document.querySelector("#clear");

    btnClear.addEventListener("click", function(){  
        password.value = "";
    });
});