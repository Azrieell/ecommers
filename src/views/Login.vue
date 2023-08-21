<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <form id="" class="mb-4" @submit.prevent="performLogin">

        <p class="text-center text-lg font-medium">Sign in to your account</p>

        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">

            <div class="mb-4">
              <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email
                or email</label>
              <input type="text"
                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                id="email" v-model="email" placeholder="Masukan Email" autofocus="" />
            </div>

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            </span>
          </div>
        </div>

        <div>
          <div class="mb-4">
            <div class="flex justify-between">
              <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                for="password">Password</label>
              <a href="auth-forgot-password-basic.html"
                class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                <small class=" ">Forgot Password?</small>
              </a>
            </div>
            <div class="relative flex w-full flex-wrap items-stretch">
              <input type="password" id="password"
                class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                v-model="password" placeholder="Masukan Password" />
            </div>

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
          </div>
        </div>

        <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
          Sign in
        </button>

        <p class="text-center text-sm text-gray-500">
          No account?
          <a class="underline" href="">Sign up</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      ...mapActions('auth', ['login']),
      async performLogin() {
        const credentials = {
          email: this.email,
          password: this.password,
        };

        const success = await this.login(credentials);

        if (success) {
          // Redirect to the desired route on successful login
          this.$router.push('/');
        } else {
          alert("Login Failed");
        }
      },
    },
  };
</script>