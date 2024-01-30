function exampleFunction(){
    if(true){
        var functionScopedVar="I am function-scoped";
    }
    
    console.log(functionScopedVar);
    

    }
    exampleFunction();
    console.log(functionScopedVar);