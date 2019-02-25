<template>
  <div class="contact">
    <div class="contact-header">
      <div class="divider"><hr></div>
      <span class="contact-title">Contact Us</span>
      <div class="divider"><hr></div>
      <div class="contact-body">
            <form class="contact-form" @submit.prevent="submit">
                <!-- <div class="error-message">
                    <p v-show="!email.valid">Please enter a valid email address.</p>
                </div> -->
                <div>
                    <div>
                        <label class="label" for="name">Name</label>
                        <input type="text" name="name" id="name" required="" v-model="name">
                    </div>
                    <div>
                        <label class="label" for="email">Email</label>
                        <input type="email" name="email" id="email" required=""
                            :class="{ email , error: !email.valid }"
                            v-model="email.value">
                    </div>
                    <div>
                        <label class="label" for="textarea">Message</label>
                        <textarea class="message" name="textarea" id="textarea" required=""
                                v-model="message.text"
                                :maxlength="message.maxlength"></textarea>
                        <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
                    </div>
                    <div>
                        <input type="submit" value="Send Form">
                    </div>
                </div>
            </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'contact',
  data () {
    return {
      name: '',
      email: {
        value: '',
        valid: true
      },
      message: {
        text: '',
        maxlength: 255
      },
      submitted: false
    }
  },
  methods: {
    submit () {
      this.submitted = true
    },
    validate (type, value) {
      if (type === 'email') {
        this.email.valid = !!this.isEmail(value)
      }
    },
    isEmail (value) {
      // eslint-disable-next-line no-useless-escape
      const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      return emailRegExp.test(value)
    }
  },
  watch: {
    'email.value': function (value) {
      this.validate('email', value)
    }
  }
}
</script>
<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
}
.contact {
  position: absolute;
  display: flex;
  text-align: center;
  top: 151px;
  width: 100vw;
}
.contact-header {
  width: inherit;
  position: fixed;
}
.contact-title {
  font-weight: 500;
  font-size: 32px;
}
.contact hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.contact-body {
  max-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}
.contact-form {
  font-size: 20px;
}
.contact-form div {
  position: relative;
  margin: 10px 0;
}
.contact-form .label {
  color: #94aab0;
  margin-bottom: 10px;
}
.contact-form .label {
  display: block;
}
.contact-form input,
.contact-form textarea,
.contact-form label {
  color: #2b3e51;
}
.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
  display: block;
  width: 100%;
  appearance: none;
}
.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.contact-form input[type="text"]:focus,
.contact-form input[type="email"]:focus {
  outline: none;
  border-color: #2c3e50;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}
.contact-form textarea {
  resize: vertical;
  max-height: 85px;
  overflow: auto;
}
.contact-form input[type="submit"] {
  border: none;
  background: #2c3e50;
  border-radius: 0.25em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  /* float: right; */
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  appearance: none;
}
/* @media only screen and (max-width: 359px) and (min-width: 320px) {
  .contact-header {
    width: 320px;
  }
  .contact-body {
    width: 290px;
  }
} */
@media only screen and (min-width: 768px) {
  .contact {
    width: 360px;
  }
}
</style>
