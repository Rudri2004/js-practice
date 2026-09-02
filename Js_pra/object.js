

// object literals

const mySym = Symbol("key1")//symbol datatype


const JsUser = {
    name: "rudri",
    "full name": "Rudri joshi",
    [mySym]: "mykey1",// symbol always use [] othervise it consider as string DAYATATYPE 
    age: 18,
    location: "ahemdabad",
    email: "Rudri@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])// acces using []

JsUser.email = "Rudri@chatgpt.com"// when you use freeze object after using this chnages are not done this isnt show error 
// Object.freeze(JsUser)
JsUser.email = "rudri@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());