function bmiCalculator () {
    var weight=prompt("please enter your weight: ")
    var height=prompt("please enter your height: ")
    var bmi=Math.ceil(weight/(height*height));
    if(bmi<18.5 ){
        alert("your bmi is "+bmi+", so you are underweight")
    }
    else if(bmi>=18.5 && bmi<24.9){
        alert("your bmi is "+bmi+", so you have a normal weight")
    }
    else{
        alert("your bmi is"+bmi+", so you are overweight")
    }
}

bmiCalculator()
