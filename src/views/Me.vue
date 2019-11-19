<template>
  <div class="flex-row">
    <div 
      :class="darkMode ? 'bg-gray-600 text-gray-200':'bg-blue-100'"
      class=" flex justify-center pt-8">
      <div class="w-3/4">
      <hr class=" w-full mt-2 flex justify-center">
        <div class="flex flex-row justify-between items-center  py-4">
          <div class="flex w-1/2">
            <div class="font-black">
              <h2 class="text-5xl">Hi, I'm James.</h2>
              <span class="text-lg">I am a visionary!</span>
            </div>
          </div>
          <div class="flex w-1/2 justify-center">
          <img 
            src="@/assets/img/me.png" 
            style="height:16rem;" 
            class=""/>
          </div>
        </div>
        <hr class=" w-full mt-2 flex justify-center">
        <div class="py-12 text-right font-bold text-xl">
          I created this site as a place to fail in public. I know I want to build something great—I'm just not quite sure I've found out what yet. I'll be using this little corner of the internet to document my journey.
        </div>
      </div>
    </div>
    <div 
      class="flex justify-center py-12"
      :class="darkMode ? 'bg-gray-800 text-gray-200':''">
      <div class="w-3/4">
        <div v-for="(section, idx) in sections"
          :key="idx"
          class="pb-6">
            <h2 class="text-3xl font-black underline">{{ section.header }}</h2>
            <ul v-for="(sub, idx) in section.sub" :key="idx+100">
              <li class="text-lg no-underline font-bold">
                <span>{{ sub.label }}: </span>
                <a :href="sub.url" class="text-blue-500 underline hover:bg-blue-100">{{ sub.text }}</a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me',
  components: {},
  computed: {
    darkMode () {
      return this.$store.state.darkMode.darkMode
    },
    sections () {
      return [
        {
          header: 'Around the web',
          sub: [
            {
              label: 'Email',
              text: 'James@itsjamesmurray.com',
              url: 'mailto:james@itsjamesmurray.com'
            },
            {
              label: 'Twitter',
              text: 'ItsJamesMurray',
              url: 'https://www.twitter.com/itsjamesmurray'
            },
            {
              label: 'GitHub',
              text: 'ItsJamesMurray',
              url: 'https://www.github.com/itsjamesmurray'
            }
          ]
        }, 
        {
          header: 'Work experience',
          sub: [
            {
              label: 'Google',
              text: 'Analytical Lead [Healthcare]',
              url: 'https://www.linkedin.com/in/itsjamesmurray'
            },
            {
              label: 'PricewaterhouseCoopers',
              text: 'Audit',
              url: 'https://www.linkedin.com/in/itsjamesmurray'
            }
          ]
        }, 
        {
          header: 'Formal education',
          sub: [
            {
              label: 'London Business School',
              text: 'Masters in Management',
              url: 'https://www.london.edu/mim'
            },
            {
              label: 'University of Missouri-Kansas City',
              text: 'Bachelors of Science in Accounting',
              url: 'https://bloch.umkc.edu/'
            }
          ]
        }, 
        {
          header: 'What I\'m working on',
          sub: [
            {
              label: 'My blog',
              text: 'ItsJamesMurray',
              url: 'https://www.itsjamesmurray.com'
            },            
            {
              label: 'Secret Side Hustle',
              text: 'TBD',
              url: 'https://www.google.com/'
            }
          ]
        }
      ]
    }
  }
}
</script>
