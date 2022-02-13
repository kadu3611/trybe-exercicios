let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
  
 /* console.log('Bem vinda, ' + info.personagem)

  for(let key in info){
      console.log(key)

  }

  for(let key in info){
      console.log(info[key])

  }
/*Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
*/

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  if(info.recorrente == 'Sim' && info2.recorrente == 'Sim'){
    info.recorrente = '';
    info2.recorrente = 'Ambos recorrentes';
    console.log(info.recorrente + info2.recorrente)
  }
  for(let key in info2,info){
      
    console.log(info[key] + ' e ' + info2[key])
    
  }
