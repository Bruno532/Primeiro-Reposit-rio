 function contar(){
     var peso = document.getElementById('txtp')
     var altura = document.getElementById('txta')
     var res = document.getElementById('res')
     
     if (peso.value.length == 0 || altura.value.length == 0){
         window.alert('ERRO')
         res.innerHTML = 'Impossível contar'
     }else{
         let p = Number(peso.value)
         let a = Number(altura.value)
         res.innerHTML = `${p/(a*a)} `
     }
        
     }
 