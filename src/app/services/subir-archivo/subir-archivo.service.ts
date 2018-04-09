import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class SubirArchivoService {

  constructor() { }

  subirArchivo( archivo: File, tipo: string , id: string ) {

    return new Promise((resolve, reject ) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();
       let img = 200;
     formData.append( 'imagen', archivo, archivo.name );

     xhr.onreadystatechange = function() {
      // console.log(xhr);

      if (xhr.readyState === 4 ) {

          if ( xhr.status === 200 ) {
            console.log('Imagen subida' );
            console.log(xhr.response);
            resolve( JSON.parse (xhr.response) );
          } else {
            console.log( 'Fallo la subida');
            // console.log(archivo);
            reject( xhr.response );
          }
        }
     };

     let url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;

     xhr.open('PUT', url, true);
     xhr.send( formData );

  });

}

}
