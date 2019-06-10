/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};




       initialize: function() {  
        this.bindEvents();  
    },  
     
    bindEvents: function() {  
        var takePhoto = document.getElementById('takePhoto'); 
        //instanciamos función tomarFoto al hacer click en el botón takePhoto 
        takePhoto.addEventListener('click', app.takePhoto, false);  
        //Lo mismo para enviar la foto capturada a un servicio web
        var sendPhoto = document.getElementById('sendPhoto');  
        sendPhoto.addEventListener('click', app.sendPhoto, false); 
       
    }

//función que se ejecuta al pulsar el botón de tomar foto:
     takePhoto: function(){  
        //podemos precisar la calidad de la foto para no tomar fotos muy pesadas, si lo que        //queremos es enviarla a un servicio web o red social.
//Así mismo definiremos una función en caso de tomar la imagen satisfactoriamente o no
        navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20,   
            allowEdit: true, destinationType: navigator.camera.DestinationType.DATA_URL });  
     },  
  
//Está función se ejecuta al tomar satisfactoriamente la foto.
    onPhotoDataSuccess: function(imageData) {
       //Instancia un objeto del html para poder mostar en el la foto recién capturada.       
      var photo = document.getElementById('uploadedFile');    
      photo.style.display = 'block';    
//Añade a la propiedad src la imagen para poder mostrarla en la interface.
      photo.src = "data:image/jpeg;base64," + imageData;    
      
      
    },
//Esta función se ejecuta en caso de que la cámara falle o se haya cancelado por el usuario. 
   onFail: function(message) {  
      alert('Fallo al poner en funcionamiento la camara: ' + message);  

    }  