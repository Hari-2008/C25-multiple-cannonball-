//arrays => imagine them like boxes
//array with the same data-type(numbers, string,object)
var num = [12,45,67];
console.log(num)

//array with multiple data types
var student = ["Hari",13,"blue",8,true]
student.push("Math")
console.log(student[2]) //wil display the value at index number 2 => blue

//array holding list of arrays
var position = [[100,200],[150,210],[200,200]]
position.push([140,500])
for(var i = 0; i < position.length; i++){
    console.log(position[i][0],position[i][1])
}
