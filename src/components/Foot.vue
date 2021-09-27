<template>
    <div>
        <div class="purchase">
            <div class="text" >CONTRATA CON HELPSMART
        </div>
        </div>   
        <footer>
            <div class="main-content">
                <div class="left box">
                    <h2>Nosotros</h2>
                    <div class="content">
                        <br>
                        <p>Empresa dedica al desarrollo de Software de sensores aplicados al sector salud  ....</p> 
                        <div>
                        <br>
                    </div> 
                </div>
            </div>

                <div class="center box">
                <h2>  Productos</h2>
                <div class="content">
                    <div class="place">
                    <br>
                    <span class="text">Sensor de Temperatura</span>
                    </div>
                    <div class="phone">
                    <br>
                    <span class="text">Sentor de Humedad</span>
                    </div>
                    <div class="email">
                    <br>
                    <span class="text">Multisensor para planta electrica</span>
                    </div>
                </div>
                </div>

                <div class="right box">
                <h2>Contacto</h2>
                <div class="content">
                    <form action="#">
                    <div class="email">
                        <div class="text">Nombre *</div>
                        <input type="text" required>
                    </div>
                    <div class="email">
                        <div class="text">Celular *</div>
                        <input type="tel" required>
                    </div>
                    <div class="email">
                        <div class="text">Email *</div>
                        <input type="email" required>
                    </div>
                    <div class="msg">
                        <div class="text">Mensaje *</div>
                        <textarea rows="2" cols="25" required></textarea>
                    </div>
                    <p>
                    <button  type="submit" class="boton ">ENVIAR</button> 
                    </p>
                    </form>
                </div>
                </div>
            </div>
            <div class="bottom text-center">
                <span class="credit">Desarrollado por 
                <a target="_blank" href="https://www.helpmedica.com">HELPMEDICA</a> | </span>
                <span>2021</span>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .purchase {
    background-color: #2463a7;
    border-color: #ffc107;
    border-radius: 0;
    color: #212529;
    display: block;
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    font-weight: 300;
    max-width: 100%;
    padding: 40px;
    text-align: center;
    width: 100%;
    transition: all 1.5s ease;
    }
    .purchase:hover{
    background-color: #6ab23c;
    }
    *{
    margin: 0;
    padding: 0;
    color: #fafafa;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    }
    .content1{
    position: relative;
    margin: 130px auto;
    text-align: center;
    
    }
/**LETRA ARRIBA */
.content1 .text{
  font-size: 2.5rem;
  font-weight: 600;
  color: #0b5014;
}
.content1 .p{
  font-size: 2.1875rem;
  font-weight: 600;
  color: #2463A7;
}
/**COLOR DEL FOOTER */
footer{
  bottom: 0px;
  width: 100%;
  background: #333333;
  padding: 0 2PX;
}
.main-content{
  display: flex;
}
.main-content .box{
  flex-basis: 50%;
  padding: 10px 20px;
}
.box h2{
  font-size: 1.23rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 30px 0px;
  
}
.box .content{
  margin: 0px 0px 0px 0px;
  position: relative;
}
.box .content:before{
  position: absolute;
  content: '';
  top: -10px ;
  left: 10px;
  height: 2px;
  width: 90%;
  background: #1a1a1a;
  
}
.box .content:after{
  position: absolute;
  content: '';
  height: 2px;
  width: 38%;
  background: #2463a7;
  top: -10px;
  left: 10px;
}
.left .content p{
  text-align: justify;
}

/**VAINITAS COLOR */

    
.center .content .text{
  font-size: 1.0625rem;
  font-weight: 500;
  padding-left: 10px;
}
.center .content .phone{
  margin: 15px 0;
}
/**COLOR LETRAS DE FORMULARIO */
.right form .text{
  font-size: 1.0625rem;
  margin-bottom: 2px;
  color: #fff9f9;
}
.right form .msg{
  margin-top: 10px;
}
.right form input, .right form textarea{
  width: 100%;
  font-size: 1.0625rem;
  background: #0d2835;
  padding-left: 10px;
  border: 1px solid #0d2830;
}
.right form input:focus,
.right form textarea:focus{
  outline-color: #0fda41;
}
.right form input{
  height: 35px;
}
.right form .btn{
  margin-top: 10px;
}

/**COLOR DEBAJO DEL DESARROLLADO */
.bottom  span{
  color: #fffdfd;
}
.bottom  a{
  color: #0bf846;
  text-decoration: none;
}
.bottom  a:hover{
  text-decoration: underline;
  background: #0fda41;
  text-decoration: none;
}
@media screen and (max-width: 900px) {
  footer{
    position: relative;
    bottom: 0px;
  }
  .main-content{
    flex-wrap: wrap;
    flex-direction: column;
  }
  .main-content .box{
    margin: 5px 0;
  }
}
/**BUTTON */
button{
    background: #2463a7;
    width: 100px;
    border: none;
    height: 40px;
    transition: 1s all ease;
}
button:hover{
    background: #6ab23c;
}
/*****Eliminar border por defecto de un botton */
input{
  border: none;
  outline: none;
  }
textarea{
outline: none;

}
</style>