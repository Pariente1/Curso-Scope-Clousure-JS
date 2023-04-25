/* function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins; 
    //Esto es igual a saveCoins = saveCoins + coins;
    console.log(`MoneyBox: ${saveCoins}`);


}

moneyBox(5);
moneyBox(5);

El resultado fue 5 en las dos opciones, la siguiente usaremos clousure para buscar que se sumen.
*/

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(10);
myMoneyBox(5);

//Que pasaria si quisiera agregar a mas usuarios?

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(2);
moneyBoxAna(1);
