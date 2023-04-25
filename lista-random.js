var lista = []
        while (lista.length < 64){
            var numero = Math.floor(Math.random() * 64)
            var pode = true
            for(var x = 0; x < lista.length; x++){
                if (numero == lista[x]){
                    pode = false}}
            if (pode == true){
                lista.push(numero)}}
                lista.sort(function(a, b) {
                    return a - b;
                    });
        console.log(lista)