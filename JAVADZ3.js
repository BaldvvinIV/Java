let person = {
    Name: "John",
    age: 30,
    job: "Developer"
}
person.Name = "Ramzan";
person.location = "Turkey";
delete person.age;
console.log(person);

let Car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue",
}
Car.model = "Corolla";
Car.damaged = "No";
delete Car.brand;
console.log(Car);


function person1 (Name , age , job) {
    this.name = Name;
    this.age = age;
    this.job = job;
}
let person2 = new person1("Nick" , 32 , "Developer");
person2["name"] = "Ali";
person2["location"] = "Istanbul";
delete person2.age;
console.log(person2);

function Car1 (Brand , model , year , color) {
   this.Brand = Brand;
   this.model = model;
   this.year = year;
   this.color = color;
}

let car2 = new Car1("Toyota" , "Camry" , 2022 , "Blue");
car2["year"] = 2020;
car2["damaged"] = "yes";
delete car2.Brand;
console.log(car2);


let Me = {
    name: "Ramzan",
    age: 20,
    SayHello : function () {
        console.log("Hello , my name is " + this.name + "." + " I'm " + this.age + " Years old.");
    }
}
Me.SayHello ();


let Calculator = {
    Add : function (x , y) {
      return x + y;
    },
    Subtract : function (x, y)  {
        return x - y;
    },
    Multiply : function (x , y) {
        return x * y;
    },
    Divide : function (x , y) {
        return x / y;
    },
}
console.log(Calculator.Add(5 , 10));
console.log(Calculator.Subtract(5 , 10));
console.log(Calculator.Multiply(5 , 10));
console.log(Calculator.Divide(5 , 10));

let Engine = {
    Start : function () {
        console.log("The car is started.");
    },
    Stop : function () {
        console.log("The car is stopped.")
    }
}
Engine.Start ();
Engine.Stop ();


let Personality = {
    name: "",
    age: 0,
    SayHello : function () {
        console.log("Hello , my name is " + this.name + "." + " I'm " + this.age + " Years old.");
    }
}
let person4 = Object.create(Personality);

person4.name = "Mukhammad";
person4.age = 22;
person4.SayHello ();
console.log(person4);


let Animal = {
    Type : "",
    WhichType : function () {
        console.log("This animal is " + this.Type);
    }
}
let Pig = Object.create(Animal);
Pig.Type = "Omnivorse";
Pig.WhichType ();

let Shape = {
    Draw : function () {
        console.log("The shape is being drawn.");
    }
}
let rectangle = Object.create(Shape);
rectangle.Draw () ;


let Fruits = ["Apple" , "Orange" , "Banana"];
console.log(Fruits);

let numbers = new Array(1 , 2 , 3 , 4 , 5);
console.log(numbers);

let Arrai = "Ramzan";
let Get = Array.from(Arrai);
console.log(Get);



let Number = [20 , 30 , 40];
Number.push(50);
Number.pop();
Number.unshift(10);
Number.shift();

console.log(Number);

let Numb = [10 , 20 , 30 , 40 , 50];
let Numb1 = Numb.slice(0,3);
console.log(Numb1);

let Words = ["Cats","Dogs","Scorpions","Wolfs","Bears"];
let Words1 = Words.slice(0,3);
let Words2 = Words.slice(2,5);
let Words3 = Words.slice(2,4);
let Words4 = Words.slice(0,2)
console.log(Words1);
console.log(Words2);
console.log(Words3);
console.log(Words4);
let words = "abcdef";
let words1 = words.slice(2,4);
console.log(words1);
let objects = [{name : "Ramzan"} , {Age : 19} , {Job : "Developer"}];
let objects1 = objects.slice(0,2);
console.log(objects1);



let numb = [5 , 10 , 15 , 20 , 25, 30];
numb.splice(0,1)
console.log(numb);

let word = ["Banana" , "Apple" , "Watermelon" , "Mandaline"] ;
word.splice(0,1);
console.log(word);

let word1 = ["Banana" , "Apple" , "Watermelon" , "Mandaline"] ;
word1.splice(1,1);
console.log(word1);

let symbols = "abcdef";
let symbols1 =symbols.slice(0,3);
console.log(symbols1);

let objects2 = [{name : "Ramzan"} , {Age : 19} , {Job : "Developer"}];
objects2.splice(0,1);
console.log(objects2);


let Numera = [1,2,3,4,5];
let Numera2 = [10,11,12,13,14];
let CombineNumera = Numera.concat(Numera2);
console.log(CombineNumera);

let string = "Sky";
let string1 = "scraper";
let CombineStrings = string.concat(string1);
console.log(CombineStrings);

let Strings = ["Apple" , "Banana"];
let Strings1 = ["Cherry" , "Watermelon"];
let combinestrings = Strings.concat(Strings1);
console.log(combinestrings);

let stringa = "Abc";
let stringa1 = "def";
let CombineStringsa = stringa.concat(stringa1);
console.log(CombineStringsa);

let arr = [1 , "Two" , 3 , "Four"];
let arr1 = [5,6,7];
let CombineArr = arr.concat(arr1);
console.log(CombineArr);

let Maps = [1,2,3];
let MapsIncrease = Maps.map(function(one) {
    return one + 1;
})
console.log(MapsIncrease);

let MapString = ["Apple","Banana","Peach","Cherry"];
let MapStringUp = MapString.map(function(Stringas){
    return Stringas.toUpperCase () ;
})
console.log(MapStringUp);

let persons = [{name : "Ramzan" , age : 18} , {name : "Mukhammad" , age : 19}];
let personsFull = persons.map(function(persona) {
    return {
        fullName: persona.name + " (" + persona.age + ")"
    }; 
});
console.log(personsFull);

let Numer = [2,3,4,5,6];
let square = Numer.map(function(num) {
    return num ** 2
})
console.log(square);

let MapString1 = ["APPLE","BANANA","PEACH","CHERRY"];
let MapStringdown = MapString1.map(function(Stringas){
    return Stringas.toLowerCase () ;
})
console.log(MapStringdown);

let numBers = [1,2,3,4,5,6,7,8];
let EvennumBers = numBers.filter(function(Number) {
    return Number % 2 === 0 ;
})
console.log(EvennumBers);

let sTrings = ["App" , "Mandaline" , "Watermelon" , "Peach"];
let sTringsCheck = sTrings.filter(function(String) {
    return String.length >= 5;
})
console.log(sTringsCheck);

let things = [{ name : "Peach" , price : 1200} , {name : "Cherry" , price : 200} , {name : "Apple" , price : 1400}];
let thingscheck = things.filter(function(Thing){
    return Thing.price >= 1000;
})
console.log(thingscheck);

let array = [1,2,3,4,5,6,7];
let arraysum = array.reduce(function(x,z) {
    return x + z;
}, 0)
console.log(arraysum);

let sTrings1 = ["App" , "Mandaline" , "Watermelon" , "Peach"];
let sTrings1Split = sTrings.reduce(function(x,z){
      return x + z
})
console.log(sTrings1Split);

let array1 = [1,2,3,4,5,6,7];
let arraysum1 = array1.reduce(function(x,z) {
    return x - z;
}, )
console.log(arraysum1);

let persons1 = [{name : "Ramzan" , age : 15} , {name : "Mukhammad" , age : 20} , {name : "Ali" , age : 25} , ];
let TotalAge = persons1.reduce(function(Acc , curr) {
    return Acc + curr.age
},0)

let AverageAge = TotalAge / persons1.length;
console.log(AverageAge);

let Humbers = [1,2,3,4,5,6,7,8,9,10];
let HumbersCheck = Humbers.reduce(function(x,z) {
    if ( z % 2 === 0) {
        return x + z;
    } else {
        return x;
    }
}, 0)
console.log(HumbersCheck);

let Chisla = [9,8,7,6,5,4,3,2,1];
Chisla.sort();
console.log(Chisla);

let Letter = ["Cherry","Banana","Apple"];
Letter.sort();
console.log(Letter);

let persons11 = [{name : "Ramzan" , age : 30} , {name : "Mukhammad" , age : 40} , {name : "Ali" , age : 25} ];
persons11.sort(function(x,z) {
    return x.age - z.age
});
console.log(persons11);

let Chisla1 = [1,2,3,4,5,6,7,8,9];
Chisla1.sort(function(x,z) {
    return z - x
});
console.log(Chisla1);

let Letter1 = ["Apple" , "Banana" , "Cherry"];
Letter1.sort(function(x,z) {
    return z.localeCompare(x)
});
console.log(Letter1);

let cHisla = [1,2,3,4,5,6,7];
cHisla.forEach(function(Number) {
    console.log(Number);
})
let Letter12 = ["Apple" , "Banana" , "Cherry"];
Letter12.forEach(function(Strings) {
        console.log(Strings);
})
let persons112 = [{name : "Ramzan" , age : 30} , {name : "Mukhammad" , age : 40} , {name : "Ali" , age : 25} ];
persons112.forEach(function(numbers) {
    console.log(numbers)
})

let Chisla12 = [1,2,3,4,5,6,7,8,9];
Chisla12.forEach(function(x , z) {
    console.log(x+z)
})

let Chisla123 = [1,2,3,4,5,6,7,8,9];
let summary = 0;
Chisla123.forEach(function(Number) {
    summary += Number;
})
console.log(summary);

let Letter123 = ["Apple" , "Banana" , "Cherryq"];
Letter123.forEach(function(Number) {
    console.log(Number.length);
})

let Chisla1234 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let FindChisla = Chisla1234.find(function(Number){
    return Number > 10;
})
console.log(FindChisla);

let strIngs = ["ccc" , "bbb" , "ddd" , "aaa"];
let findA = strIngs.find(function(string) {
    return string.includes("a") ;
})
console.log(findA);

let persons1121 = [{name : "Ramzan" , age : 30} , {name : "Mukhammad" , age : 40} , {name : "Ali" , age : 25} ];
let findpersonalr = persons1121.find(function(numbers) {
    return numbers.age > 30;
})
console.log(findpersonalr);

let Chisla12345 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let FindChislaa = Chisla12345.find(function(Number){
    return Number % 2 === 0;
})
console.log(FindChislaa);

let Letter1234 = ["Apple" , "Banana" , "Cherryq"];
let FindLetterA = Letter1234.find(function(number) {
    return number.charAt(0) === "A";
})
console.log(FindLetterA);





