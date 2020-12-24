
        //let pass = document.getElementById("pass");
        let myInput = document.getElementById("myInput");
        function passwordGenerator(){
            var a;
            var b = [];
            var r;
            var i;
            var x = Math.round(Math.random()*10) ; 
            
            for(i=0;i<x;i++){
                a = Math.round(Math.random() * (90 - 65) + 65);
                console.log(a);
                b[i] = String.fromCharCode(a);
            }
            x= x + Math.round(Math.random()*10);
            for(i;i<x;i++){
                a = Math.round(Math.random()*10);
                b[i]=a;
            }
            x= x + Math.round(Math.random()*10);
            for(i;i<x;i++){
                a = Math.round(Math.random() * (122 - 97) + 97);
                console.log(a);
                b[i] = String.fromCharCode(a);
            }
            r = b.join("");
            //pass.innerText=r;
            myInput.value=r;
            console.log(b);
            console.log(a);
         
        }
        function copyText(){
            var text = myInput;
            text.select();
            text.setSelectionRange(0,100)
            document.execCommand('copy');
        }
    