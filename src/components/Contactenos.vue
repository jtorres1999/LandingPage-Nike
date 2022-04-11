<template>
  <div>
    <br><br><br><br>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="8" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125576.54234174687!2d-75.57856654249147!3d10.400359997494816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625e7ae9d1351%3A0xb161392e033f26ca!2sCartagena%20de%20Indias%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1649717314877!5m2!1ses!2sco" 
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        </b-col>
        <b-col cols="12" md="4" >
          <h2>Contactenos</h2>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <br>
            <b-form-group id="input-group-2"  label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Nombre Completo"
                required
              ></b-form-input>
            </b-form-group>
            <br>
            <b-form-group
              id="input-group-1"
              label-for="input-1">
              <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder=" Email"
                  required
              ></b-form-input>
            </b-form-group>
            <br>
            <b-form-group id="input-group-1"  label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.asunto"
                placeholder="Asunto"
                required
              ></b-form-input>
            </b-form-group>
            <br>
            <b-form-group id="input-group-1"  label-for="input-2">
              <b-form-textarea
                id="textarea-rows"
                v-model="form.mensaje"
                placeholder="Mensaje"
                rows="3"
              ></b-form-textarea>
            </b-form-group>
            <br>
            <b-button type="submit" class="btn ">Enviar</b-button>
            
            
          </b-form>
        </b-col>
      </b-row>   
    </b-container>
    <br><br>
  </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          email: '',
          name: '',
          asunto: '',
          mensaje: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.form.email = ''
        this.form.name = ''
        this.form.asunto = ''
        this.form.mensaje = ''
      },
      onReset(event) {
        event.preventDefault()
  
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
.bv-example-row{
  padding: 0px;
  margin-left: 20px;
  max-width: 96%;
  margin-top: 10px;
}
iframe{
  width: 100%;
  margin: 10px 0px;
  height: 90%;
}
h2{
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  text-align: center;

}
button{
  margin-left: 30px;
}
.btn2{
  background-color: rgb(118, 118, 119);
}
.btn{
  background-color: #6ab23c;
  margin-left: 180px;
}
</style>