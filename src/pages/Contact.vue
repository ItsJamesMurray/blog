<template>
  <Layout>
    <div class="w-full h-full flex flex-col justify-center">
      <div class="font-black text-white pt-8 text-center mb-16 font-mono">
        <h2 class="text-4xl">Sign up for my newsletters</h2>
        <span>You might end up liking what I write.</span>
      </div>
      <form class="w-full max-w-lg mx-auto" novalidate="true" @keyup.enter="handleSubmit">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2 text-white" for="grid-first-name">
              First Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Elon" >
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2 text-white" for="grid-last-name">
              Last Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Musk" >
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2 text-white" for="grid-email">
              Email
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="elon@tesla.com" >
          </div>
        </div>
        <button
          class="w-full hover:bg-white font-black rounded py-4 px-8 mb-12 font-mono text-white border-4 border-white hover:text-black mx-auto"
          type="button">
          <!-- @click="handleSubmit"> -->
          Submit 
        </button>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>
