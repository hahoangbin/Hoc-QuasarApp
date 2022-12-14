<template>
  <q-page padding >
    <input 
    v-model="message" 
    @keyup.esc="clearMessage" 
    @keyup.enter="alertMessage"
    v-autofocus
    :class="{ 'error' : message.length > 25 }"
    :style="errorStyle" 
    ref="messageInput"
    />

    <button @click="clearMessage">Xóa</button>
    <div>{{ message.length }}</div>

    <h5
     v-if="message.length" 
     class="border-grey">{{ message }}
    </h5>
    <h6 v-else>No message AHAHA</h6>

    <hr>

    <p>Uppercase message: {{ messageUppercase }}</p>

    <hr>

    <p>Lowercase message: {{ messageLowercase }}</p>

    <hr> 

    <button 
      style="position: absolute; left: 16px" 
      @click="couter++" >
      {{ couter }}
    </button>

    <h1>{{ title }}</h1>
  </q-page>
</template>


<script>

export default {

  data() {
    return {
      message: "< I love YOU > so much",
      title: "1234",
      couter: 0
    }
  }, 
  computed: {
    messageUppercase() {
      return this.message.toUpperCase() + " " + this.couter
    },

    messageLowercase() {
      return this.message.toLowerCase() + " " + this.couter
    },
    errorStyle() {
      if (this.message.length > 25) {
        return {
          'color' : 'red',
          'background' : 'pink'
        }
      }
    }
  },
  methods: {
    clearMessage() {
      this.message = ''
    },
    alertMessage() {
      alert(this.message)
    }
  },
  diretives: {
    autofocus: {
      inserted(el) {
        console.log('input inserted')
        el.focus()
      }
    }
  },

  mounted() {
    console.log(this.$refs)
    this.$refs.messageInput.className = 'bg-green'
  },

}

</script>

  <style>
    .border-grey {
      border: 1px solid grey;
    }
    input, button {
      font-size: 24px;
    }
    .error {
      color: red;
      background: pink;
    }
  </style>