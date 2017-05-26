function solve(r , h) {
    let volume = Math.PI* r * r * h * (1/3);
    let area = Math.PI * r * Math.sqrt(r * r + h * h) + (Math.PI * r * r);

    console.log('volume = '+ volume);
    console.log('area = '+ area);
}
solve(3 , 5);