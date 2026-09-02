
    // premitive type 
        var name = "Rudri";
        console.log(name);

       
        let age = 22;
        age = 23;
        console.log(age);

        // tyep conversion in data type
        //let score = "33";
        let score = "33abc";// you cant change string value to number it shows NAN 
       

        console.log(typeof(score));

        let valueInNumber = Number(score);
        console.log(typeof valueInNumber );
        console.log(valueInNumber);


   
        const country = "India";
        console.log(country);


    
        let city = "Ahmedabad";
        console.log(city);


       
        let price = 500;
        console.log(price);


    
        let isStudent = true;
        console.log(isStudent);


     
        let product = null;
        console.log(product);



        let address;
        console.log(address);



        let id = Symbol("userId");
        console.log(id);


      
        let bigNumber = 12345678901234567890n;
        console.log(bigNumber);


        // non - premitive type - object ,array,function
        //object
       let student = {
            name: "Rudri",
            age: 22
        };

        console.log(student);
        console.log(student.name);


       
        let fruits = ["Apple", "Mango", "Banana"];

        console.log(fruits);
        console.log(fruits[0]);


      
        function greet() {
            console.log("Hello Rudri");
        }

        greet();
