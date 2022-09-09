function Input(){
    while(true){
        var x = prompt('Enter your age')
    if(x.length <= 0 || x.indexOf(' ') >= 0){
        alert('Enter correct age')
    }
    else if(isNaN(x)){
        alert('Enter number')
    }
    else if(x < 18){
        alert('Enter correct number')
    }
    else{
        alert('You registered successfully')
        break;
    }
    }
    function Show() {
        var value = document.getElementById("inp").value;
        console.log(value);
    }
}
function Show() {
    var value = document.getElementById("inp").value;
    console.log(value);
    var x = value.slice(1,2)
    if (x<4) {
        if (x==1) {
            document.body.style.backgroundColor = "Blue"
        }
        if (x==2) {
            document.body.style.backgroundColor = "Pink"
        }
        if (x==3) {
            document.body.style.backgroundColor = "Red"
        }
        if (x==0) {
            alert("This group doesnt exist")
        }
    }
}