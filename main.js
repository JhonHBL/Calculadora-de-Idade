class calculoIdade {

    calculaIdade(dataNascimento, dataAtual){
        var dataNasc = dataNascimento.split("/");
        var ano = dataNasc[2];
        var mes = dataNasc[1];
        var dia = dataNasc[0];

        var dataAtu = dataAtual.split("/");
        var anoAtual = dataAtu[2];
        var mesAtual = dataAtu[1];
        var diaAtual = dataAtu[0];

        if  (anoAtual >= ano) 
        {
            if ( mesAtual >= mes ) 
            {
                if (diaAtual >= dia) 
                {
                    var idade = anoAtual - ano;
                    var idadeMes = mesAtual - mes;
                    var idadeDia = diaAtual - dia;

                    return idade+' Anos, '+idadeMes+' Meses e '+idadeDia+ ' Dias.';
                }        
                else 
                {
                    if ( mesAtual > mes )
                    {
                        var idade = anoAtual - ano;
                        var idadeMes = mesAtual - mes;
                        idadeMes--;
                        var idadeDia = diaAtual - dia; 
                        if (mesAtual==1){
                            idadeDia += this.calculaDiasMes(12,anoAtual);
                        } 
                        else{
                            idadeDia += this.calculaDiasMes(mesAtual-1,anoAtual);
                        }
                        return idade+' Anos, '+idadeMes+' Meses e '+idadeDia+ ' Dias.';                      
                    }
                    else
                    {
                        if (anoAtual > ano){
                            var idade = anoAtual - ano;
                            idade --;
                            var idadeMes = mesAtual - mes;
                            idadeMes+=12-1;
                            var idadeDia = diaAtual - dia; 
                            if (mesAtual==1){
                                idadeDia += this.calculaDiasMes(12,anoAtual);
                            } 
                            else{
                                idadeDia += this.calculaDiasMes(mesAtual-1,anoAtual);
                            }
                            return idade+' Anos, '+idadeMes+' Meses e '+idadeDia+ ' Dias.';                           
                            
                        }
                        else 
                        {
                            return 'Não nasceu ainda??!!';
                        }
                    }
                
                }
            }
            else
            {

                if (anoAtual > ano)
                {
                    if (diaAtual >= dia) 
                    {
                        var idade = anoAtual - ano;
                        idade--;
                        var idadeMes = mesAtual - mes;
                        idadeMes +=12;
                        var idadeDia = diaAtual - dia;

                        return idade+' Anos, '+idadeMes+' Meses e '+idadeDia+ ' Dias.';                     
                    } 
                    else 
                    {
                        var idade = anoAtual - ano;
                        idade --;
                        var idadeMes = mesAtual - mes;
                        idadeMes+=12-1;
                        var idadeDia = diaAtual - dia; 
                        if (mesAtual==1){
                            idadeDia += this.calculaDiasMes(12,anoAtual);
                        } 
                        else{
                            idadeDia += this.calculaDiasMes(mesAtual-1,anoAtual);
                        }

                        return idade+' Anos, '+idadeMes+' Meses e '+idadeDia+ ' Dias.';                  
                    }                           
                }
                else
                {
                    return 'Não nasceu ainda??!!';
                }                
            }

        }
        else
        {
            return 'Não nasceu ainda??!!';
        }
    
    }

    calculaDiasMes(mesRecente,anoRecente){
        if (mesRecente==2){
            if((anoRecente % 4)==0){
                return 29;
            }
            else
            {              
                return 28;
            }
        }
        if ( (mesRecente=1) || (mesRecente=3) || (mesRecente=5) || (mesRecente=7) || (mesRecente=8) || (mesRecente=10) || (mesRecente=12) )
        {
            return 31;
        }
        if ( (mesRecente=4) || (mesRecente=6) || (mesRecente=9) || (mesRecente=11) )
        {
            return 30;
        }        
    }
}

const date2 = new Date();
var hoje = new Intl.DateTimeFormat('pt-BR').format(date2);
var objCalculoIdade = new calculoIdade;
var textoIdade = objCalculoIdade.calculaIdade('04/10/2001',hoje);

console.log(textoIdade);
document.write('Idade calculada: '+textoIdade);