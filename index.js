let password1=document.getElementById("p1")
let password2=document.getElementById("p2")
let password3=document.getElementById("p3")
let password4=document.getElementById("p4")
    function generateP() {
        var pass = '';
        let passwordlength=12
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';
          
        for (let i = 1; i <= passwordlength; i++) {
            var char = Math.floor(Math.random()
                        * str.length + 1);     
            pass += str.charAt(char)
        }
          
        return pass;
    }
function runPass(){
    password1.textContent=generateP()
    password2.textContent=generateP()
    password3.textContent=generateP()
    password4.textContent=generateP()
}
