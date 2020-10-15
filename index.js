let readlineSync = require('readline-sync');

function start() {let userName = readlineSync.question("What is your name stranger?\n");
    console.log("Greetings " + userName + "!");

    paths = ['Warrior', 'Dark Mage', 'Healer'];
    index = readlineSync.keyInSelect(paths, 'Which path shall you take?\n');

//Warrior
if(index === 0){
    console.log('You have chosen the path of the ' + paths[index] + '.')
    console.log('This path grants you +10 Dexterity')
    yesOrNo = ['Yes', 'No',];
    index = readlineSync.keyInSelect(yesOrNo, 'Are you sure this is the path you wish to take?');

    // user selects yes
    if (index === 0){
        console.log('Your chosen destiny is the path of the Warrior.')
        console.log( 'You feel stronger and in control of your weapons!')
        console.log(`${userName}... Your jourey now begins...`) 
    }
    
    //user selects no
    else if(index === 1){
        start()

    }
} 
//Dark Mage
else if( index === 1){ 
    console.log('You have chosen the path of the ' + paths[index] + '.')
    console.log('This path grants you +10 Mana')
    yesOrNo = ['Yes', 'No',];
    index = readlineSync.keyInSelect(yesOrNo, 'Are you sure this is the path you wish to take?');

    // user selects yes
    if (index === 0){
        console.log('Your chosen destiny is the path of the Dark Mage.')
        console.log( 'You feel a surge of magical power enter your body!')
        console.log(`${userName}... Your jourey now begins...`) 
    }
    
    //user selects no
    else if(index === 1){
            start()
    }
}

//Healer
else if( index === 2){ 
    console.log('You have chosen the path of the ' + paths[index] + '.')
    console.log('This path grants you +10 Item Power.')
    yesOrNo = ['Yes', 'No',];
    index = readlineSync.keyInSelect(yesOrNo, 'Are you sure this is the path you wish to take?');
    

    // user selects yes
    if (index === 0){
        console.log('Your chosen destiny is the path of the Healer.')
        console.log( 'You feel immense power emmiting from your held items!')
        console.log(`${userName}... Your jourey now begins...`) 
    }
    
    //user selects no
    else if(index === 1){
            start()
    }
}

//Cancel
else if( index === 3){
    start()
};

}

start();


