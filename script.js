/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
 let Morethan50 = arr.filter((mark) => mark.marks > 50).map((students) =>students.name);
    console.log( Morethan50);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
   arr.forEach((morethan50) =>{
        if(morethan50.marks > 50){
            console.log(morethan50.name);
        }
    });
}

function addData() {
  //Write your code here, just console.log
   let newarr ={id:4,name:"shubham",age:"24",marks:80};
    arr.push(newarr);
    console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter((mark) => mark.marks >=50);
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 =[
        {id:5,name:"pankaj",age:"23",marks:95},
        {id:6,name:"sana",age:"22",marks:75},
        {id:7,name:"susan",age:"20",marks:45}
    ];
    arr = arr.concat(arr1);
    console.log(arr);
}
