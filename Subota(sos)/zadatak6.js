//Write a function that replaces the elements of the given array between two positions with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]


function doubleSomeElements(array){
        var deoNiza = [];
        deoNiza =  array.splice(2,5);
        console.log(deoNiza);
        var duplo = [];
        for(var i=0; i<deoNiza.length; i++ ){
            duplo.push((deoNiza[i])*2);
        }
        var r=duplo.join(',');
        console.log(r);
        var n;
        n+= parseInt(r);
        deoNiza.splice(2,0,n);
        
        console.log(deoNiza);
}
doubleSomeElements([3, 5, 1, 8, 90, -4, 23, 1, 67])