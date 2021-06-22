function numeroALetras(n){
  var num = parseInt((n*100)+'');

  var centavos = num%100;
  var numero = parseInt(n+'');

  var respuesta = '';

  if (numero > 999) {
      if ((numero+'').length > 6) {
          
          var residuo  = parseInt((numero + ''))%1000000;
          var x  = parseInt(numero/1000000);
  
          if (x == 1) {
              respuesta = ' un millon ' + numeroALetras(residuo);
          } else {
              respuesta = numeroALetras(x) + ' millones ' + numeroALetras(residuo);
          }
      }else if ((numero+'').length > 3) {
          var residuo  = parseInt((numero + ''))%1000;
          var x  = parseInt(numero/1000);
  
          if (x == 1) {
              respuesta = ' mil' + numeroALetras(residuo);
          } else {
              respuesta = numeroALetras(x) + ' mil ' + numeroALetras(residuo);
          }
      }        
  } else {
      if (numero == 100) {
          respuesta = 'cien';
      }else if (numero > 100) {
          var cen = parseInt(numero/100);
          var dec = numero % 100;

          respuesta = ' ' + centenas_nal(cen) + ' ' + numeroALetras(dec);
      }else{
          var dec = numero % 100;

          if (dec < 20) {
              respuesta = ' ' + unidades_nal(dec);
          } else {
              var unis = dec%10;
              var ddec = parseInt(dec/10);

              if (unis != 0) {
                  respuesta = ' ' + decenas_nal(ddec) + ' y ' + unidades_nal(unis);
              } else {
                  respuesta = ' ' + decenas_nal(ddec);
              }
          }
      }
  }

  return respuesta;
}

///////////////////////////

function unidades_nal(n){
  if (n + '' == '1') {
      return 'uno'
  }
  if (n + '' == '2') {
      return 'dos'
  }
  if (n + '' == '3') {
      return 'tres'
  }
  if (n + '' == '4') {
      return 'cuatro'
  }
  if (n + '' == '5') {
      return 'cinco'
  }
  if (n + '' == '6') {
      return 'seis'
  }
  if (n + '' == '7') {
      return 'siete'
  }
  if (n + '' == '8') {
      return 'ocho'
  }
  if (n + '' == '9') {
      return 'nueve'
  }

  
  if (n + '' == '10') {
      return 'diez'
  }
  if (n + '' == '11') {
      return 'once'
  }
  if (n + '' == '12') {
      return 'doce'
  }
  if (n + '' == '13') {
      return 'trece'
  }
  if (n + '' == '14') {
      return 'catorce'
  }
  if (n + '' == '15') {
      return 'quince'
  }
  if (n + '' == '16') {
      return 'dieciseis'
  }
  if (n + '' == '17') {
      return 'diecisiete'
  }
  if (n + '' == '18') {
      return 'dieciocho'
  }
  if (n + '' == '19') {
      return 'diecinueve'
  }

  return '';
}

function decenas_nal(n){
  if (n + '' == '1') {
      return 'diez'
  }
  if (n + '' == '2') {
      return 'veinte'
  }
  if (n + '' == '3') {
      return 'treinta'
  }
  if (n + '' == '4') {
      return 'cuarenta'
  }
  if (n + '' == '5') {
      return 'cincuenta'
  }
  if (n + '' == '6') {
      return 'sesenta'
  }
  if (n + '' == '7') {
      return 'setenta'
  }
  if (n + '' == '8') {
      return 'ochenta'
  }
  if (n + '' == '9') {
      return 'noventa'
  }
  
  return '';
}

function centenas_nal(n){
  if (n + '' == '1') {
      return 'ciento'
  }
  if (n + '' == '2') {
      return 'docientos'
  }
  if (n + '' == '3') {
      return 'trecientos'
  }
  if (n + '' == '4') {
      return 'cuatrocientos'
  }
  if (n + '' == '5') {
      return 'quinientos'
  }
  if (n + '' == '6') {
      return 'seiscientosd'
  }
  if (n + '' == '7') {
      return 'setecientos'
  }
  if (n + '' == '8') {
      return 'ochocientos'
  }
  if (n + '' == '9') {
      return 'novecientos'
  }
  
  return '';
}


