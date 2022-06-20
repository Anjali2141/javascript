let number=3;

try {
   number.toPrecision(500);
    // let userError = new Error("throws")
    // throw userError;


} catch (error) {
    console.log("error occured");

    console.log(error.name);
    console.log(error.message);
}
finally {
    console.log("executed finally");
} 
