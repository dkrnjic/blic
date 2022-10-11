object1 = {
    a: "str",
};
object2 = {
    a: "str",
    b: 244,
    c: "gfjsgg"
};
object3 = {
    b: 244
};
arrObj = [object1,object2,object3];

function primaArray(arrayObject){
    console.log(...arrayObject);
    for(let i =0;i<arrayObject.lenght;i++)
    {
        
    }
    let lenght = Object.keys(arrayObject[0]).length;
    console.log(lenght);
    if(){
        console.log(arrayObject[0]);
    }
   // Object.keys(arrObj).
}

primaArray(arrObj);
