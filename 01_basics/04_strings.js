 const name = "Abhishek";
 const age = 30;
 const city = "Delhi";

 console.log(`Hi! My name is ${ name} and I am ${ age} old lives in ${city}`)

 // Declaring a "String"
 const gameName = new String("Apex Legends");
 console.log(gameName);

 // Strings Methods
 console.log(gameName[0]);
 console.log(gameName.length);
 console.log(gameName.__proto__);
 console.log(gameName.toUpperCase);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(0));
 console.log(gameName.indexOf("e"));
 
 const newGame = gameName.substring(0, 4);
 console.log(newGame);

 const latestGame = gameName.slice(-8, 6);
 console.log(latestGame);

 const newString = "    Abhishek    ";
 console.log(newString);
 console.log(newString.trim());

 const url = "https://code.js/adyant%design"
 console.log(url.replace("%", "/"));
 console.log(url.includes("adyant")); //boolean - true
 console.log(url.includes("ui")); // boolean - false