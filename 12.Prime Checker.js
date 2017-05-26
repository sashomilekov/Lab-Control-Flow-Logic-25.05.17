function solve(n) {

    let counter = 0;
    for( let i = 2 ; i < n; i++){
        if(n % i == 0 ){
            counter ++;
        }
    }

    if(counter == 0 && n >= 2 ){
        console.log('true');
    }
    else
    {
        console.log('false');

    }

}

solve(8);