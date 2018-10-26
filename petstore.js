
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    if (numAnimals < 0 || isNaN(numAnimals)===true) {A=-1}
    else if (avgFood < 0 || isNaN(avgFood)===true) {A=-1}
    else {A=numAnimals*avgFood};
    return A;
}

/**
 * Determines which day of the week had the most number of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is 
 * only one most popular day, and an array of the strings containing the names of the 
 * most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    var nullFlag; 
    var temp;
    var name;
    var max;
    var array=[];
    if (week == null ) {nullFlag=1}
    else {temp = week.pop();
    for (;week.length>0;) {
        if (!max) {max = temp.traffic, name = temp.name, array.push(name), temp = week.pop()}
        else if (max > temp.traffic) {temp = week.pop()}
        else if (max < temp.traffic) {array=[], max = temp.traffic, name = temp.name, array.push(name), temp = week.pop()}
        else if (max = temp.traffic) {name = temp.name, array.push(name), temp = week.pop()}
    }}
    if (array === undefined || array.length == 0) {return null}
    else if (nullFlag) {return null}
    else if (array.length>1) {return array}
    else {return array[0]};
}
/* 
var monday = new Weekday('mo',1);
var tuesday = new Weekday('tu',2);
var wednesday = new Weekday('we',3);
var thursday = new Weekday('th',4);
var friday = new Weekday('fi',5);
var array = [monday,tuesday,wednesday,thursday,friday]
mostPopularDays(array)
*/
/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    nameArray = names;
    typesArray= types;
    breedsArray = breeds;
    var nullFlag;
    var array = [];
    if (nameArray == null || typesArray == null  || breedsArray == null ) { nullFlag=1 }
    else if (nameArray.length!=typesArray.length && typesArray.length!=breedsArray.length) { nullFlag=1 }
    else if (nameArray.length==0 || typesArray.length==0 || breedsArray.length==0) { nullFlag=1 }
      else {
          for (;nameArray.length>0;) {N=nameArray.pop(),T=typesArray.pop(),B=breedsArray.pop();
            if(N==null || T==null || B==null) { nullflag=1 }
            else {animal = new Animal(N,T,B);
                  array.push(animal)}
          }
      }
    if (nullFlag) {return []}
    else {return array.reverse()}
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello World!';
}

