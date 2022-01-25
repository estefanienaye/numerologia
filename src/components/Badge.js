import React from 'react';

import './styles/Badge.css';

class Badge extends React.Component {
  
  render() {

    var diaF = (this.props.dia).trim();
    var mesF = (this.props.mes).trim();
    var anioF = (this.props.anio).trim();
    
    let date = diaF + mesF + anioF;
    
    var  escencia, personalidad, don;
    
    /**validacion dia */
      var nDia;
      if(diaF[1] == null)
        nDia = '0'+ diaF
      else
        nDia = diaF;

    /**validacion mes */
      var nMes;
      if(mesF[1] == null)
        nMes = '0' + mesF;
      else
        nMes = mesF;

      if(anioF[3] == null)
        anioF = '0'
        
    /*escencia*/
      if(diaF)
      {
        if(diaF[1] == null) 
          escencia = diaF[0];
        else
          escencia = parseInt(diaF[0]) + parseInt(diaF[1]);
      }
      else
        escencia = '0';
      
    /*personalidad*/
     if(mesF)
     {
      if(mesF[1] == null) 
        personalidad = mesF[0];
      else
        personalidad = parseInt(mesF[0]) + parseInt(mesF[1]);
     }
     else
      personalidad = '0';

     /*don*/ 
     var nDon, numDon;
     let arrayDon;
     nDon = parseInt(anioF[2]) + parseInt(anioF[3]);
     
     if(nDon)
     {
        if(nDon > 9 )
        {
            if(nDon == 11)
              arrayDon = nDon
            else
            {
                numDon = nDon.toString();
                if (numDon[1] == 0)
                    arrayDon = numDon[0];
                else
                  arrayDon = parseInt(numDon[0]) + parseInt(numDon[1]);  
            }  
        }
        else
            arrayDon = parseInt(nDon);
     }
     else
      arrayDon = '0';
        
      
    /**VIDAS PASADAS */
     var nVidas, numVida;
     let arrayVidas;
      nVidas = parseInt(anioF[0]) + parseInt(anioF[1]) + parseInt(anioF[2]) + parseInt(anioF[3]);

      if(nVidas)
      {
          if(nVidas > 9 )
          {
            if(nVidas == 11 || nVidas == 22)
            {
              arrayVidas = nVidas;
            }
            else{
              numVida = nVidas.toString();
                if (numVida[1] == 0)
                {
                  arrayVidas = numVida[0];
                }
                else{
                  arrayVidas = parseInt(numVida[0]) + parseInt(numVida[1]);  
                }
            } 
          }
          else
            arrayVidas = nVidas;
      }
      else
        arrayVidas = '0';   
        


    /**mision */
      let nMision,mision, anioDestino;

      if(mesF) 
        anioDestino = parseInt(diaF) + parseInt(mesF) + parseInt(anioF); 
      else
        anioDestino = '0';
        

      nMision = parseInt(nDia[0]) +  parseInt(nDia[1]) + parseInt(nMes[0]) + parseInt(nMes[1]) + parseInt(anioF[0]) + parseInt(anioF[1]) + parseInt(anioF[2]) + parseInt(anioF[3]);

      if(nMision)
      {
        if(nMision > 9 )
        {
          if(nMision == 11 || nMision == 22 || nMision == 33 ||nMision == 44)
          {
            mision = nMision;
          }
          else{
            nMision = nMision.toString();
              if (nMision[1] == 0)
              {
                mision = nMision[0];
              }
              else{
                mision = parseInt(nMision[0]) + parseInt(nMision[1]);  
              }
          }  
        }
        else
          mision = nMision;
      }
      else{
        mision = '0';
      }
      


        
    return (
      <div className="Badge">

        <div className="frmGeneral">  
          <div className="badge_aspectos">
              <h1><div className="form-numero">Escencia</div>
                  {escencia}
              </h1>

              <h1><div className="form-numero">Personalidad</div>
                    {personalidad} 
                </h1>    
          </div>

          <div className="badge_aspectos">           
              <h1><div className="form-numero">Don</div>
                {arrayDon}  
              </h1>

              <h1><div className="form-numero">Vidas Pasadas</div>
                  {arrayVidas} 
              </h1>        
          </div>
        </div>

        <div className="Badge__section-anio">
          <h1>
            Misión: {mision}  
          </h1>
          <h1>
              Año destino: {anioDestino}  
            </h1>
        </div>

        <div className="Badge__section-dia">
              <h1>Fecha de Nacimiento: </h1>
              <br/><h1> {nDia} / {nMes} / {anioF} </h1>       
        </div>

        
        <div className="Badge__section-resultado">

        </div>

      </div>
    );
  }
}

export default Badge;
