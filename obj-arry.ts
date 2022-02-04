// const person : {
//   name : string;
//   age : number;
//   hobbies : string[];
//   role : [number,string];
// }= {
//   // const person={
//   name : "maryam",
//   age : 30,
//   hobbies :['Sports','Cooking'],
//   role :[2,'author']
// };

// const ADMIN =0;
// const READ_ONLY =1;
// const AUTHOR = 2;
// start upper case 
// if don't whant to start with zero
// can use my own numbers
enum Role{ ADMIN = 5,READ_ONLY =100,AUTHOR}; 

  const person = {
  name : "maryam",
  age : 30,
  hobbies :['Sports','Cooking'],
  role :Role.ADMIN
};

// person.role.push('admin');
// person.role[1] =10;
// person.role =[0, 'admin','user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name);


for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());

}
if(person.role === Role.ADMIN){
  console.log(' is admin')
}
