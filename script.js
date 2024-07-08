document.getElementById('formularioFibonacci').addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let inputN = +event.target.inputN.value;
    let h1 = document.getElementById('h1');
    h1.textContent = `Los primeros ${inputN} numeros de la sucesión de fibonacci son: ${fibonacci(inputN)}`;
}

function fibonacci(n){
    if(n === 1) return 0;
    else if(n === 2) return [0, 1];
    else{
        let x = 0;
        let y = 1;
        let z;
        let fibo = []; 
        for(let i = 0; i < n; i++){
            fibo.push(x);
            z = x + y;
            x = y;
            y = z;
        
        }
        return fibo;
    }


}