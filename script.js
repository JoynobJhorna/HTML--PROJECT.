let number = prompt("Enter your number")

if(number >= 90 && number <=100 ){
    document.write("Your grade is A+")
}
else if(number >= 85 && number <=89){
    document.write("your grade is A")
}

else if(number >= 80 && number <=84){
    document.write("your grade is B+")
}
else if(number >= 75 && number <=79){
    document.write("your grade is B")
}
else if(number >= 70 && number <=74){
    document.write("your grade is C+")
}
else if(number >= 65 && number <=69){
    document.write("your grade is C")
} 
else if(number >= 60 && number <=64){
    document.write("your grade is D+")
}
else if(number >= 50 && number <=59){
    document.write("your grade is D")
}
else if(number >=0 && number<=49){
    document.write("your grade is F")
}
else{
    document.write("invalid grade")
}
