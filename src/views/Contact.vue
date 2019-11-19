<template>
  <div :class="darkMode ? 'bg-gray-800 text-gray-200':''">
    <div class="flex-col justify-center m-auto w-3/4">
      <div class="font-black pt-8 text-center">
        <h2 class="text-4xl">Sign up for my newsletters</h2>
        <span>You might end up liking what I write.</span>
      </div>
      <div class="min-h-auto h-64 w-3/4 m-auto mt-12">
        <iframe
          style="height:100%;width:100%;"
          src="https://itsjamesmurray.substack.com/embed"
          frameborder="1"
          scrolling="yes"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
      <div class="font-black pt-8 text-center">
        <span>I am a visionary.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  computed: {
    darkMode() {
      return this.$store.state.darkMode.darkMode;
    }
  }
};
</script>
