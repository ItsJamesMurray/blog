<template>
  <div class="flex-row">
    <div
      :class="darkMode ? 'text-gray-200 bg-gray-700':'bg-blue-100'"
      class="flex justify-center pt-8">
      <div v-if="loading" class="h-screen">
        <Loading />
      </div>
      <div v-else>
        <div class="w-3/4 m-auto">
          <hr class="w-full mt-2 flex justify-center">
          <div class="flex sm:flex-row flex-col justify-between items-center py-4">
            <div class="flex sm:w-1/2">
              <div class="font-black">
                <h2 class="text-5xl">Hi, I'm James.</h2>
                <span class="text-lg">I live in Chicago with my girlfriend 👫and pup 🐶. I spend my days at Google working with healthcare advertisers and my evenings trying to make millions 🚀.</span>
              </div>
            </div>
            <div class="flex sm:w-1/2 justify-center">
            <img
              src="@/assets/img/me.png"
              style="width:16rem; height:16rem"
              class="object-cover"/>
            </div>
          </div>
          <hr class=" w-full mt-2 flex justify-center">
          <div class="py-12 text-right font-bold text-xl">
            I created this site as a place to fail in public. I know I want to build something great—I'm just not quite sure I've found out what yet. I'll be using this little corner of the internet to document my journey.
          </div>
      </div>
        <div
          class="flex justify-center py-12"
          :class="darkMode ? 'bg-gray-800 text-gray-200':'bg-white'">
          <div class="px-4 sm:w-3/4 sm:p-0 w-screen">
            <h2 class="text-3xl font-black">Recent Posts:</h2>
            <BlogRoll
              v-for="(post, idx) in posts.slice(0,5)"
              :key="idx+100"
              :post="post"
            />
            <br>
            <div class="flex justify-center mt-4">
              <button
                class="bg-blue-200 text-blue-700 font-black rounded py-4 px-8 mb-12 hover:bg-blue-500 hover:text-gray-200"
                @click="navToBlog()">
                  See More Posts
              </button>
            </div>
            <div v-for="(section, index) in sections"
              :key="index+1000"
              class="pb-6">
              <h2 class="text-3xl font-black underline">{{ section.header }}</h2>
              <ul v-for="(sub, ix) in section.sub" :key="ix+10000">
                <li class="text-lg no-underline font-bold">
                  <span>{{ sub.label }}: </span>
                  <a :href="sub.url" class="text-blue-500 underline hover:bg-blue-100">{{ sub.text }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogRoll from '@/components/BlogRoll/BlogRoll'
import Loading from '@/components/Loading/Loading'

export default {
  name: 'home',
  components: {
    BlogRoll,
    Loading
   },
   methods: {
     navToBlog (){
       this.$router.push({name: 'blog'})
     }
   },
   computed: {
    darkMode () {
      return this.$store.state.darkMode.darkMode
    },
    loading () {
      return this.$store.state.blogPosts.loading
    },
    posts () {
      return this.$store.state.blogPosts.blogPosts
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
        }
      ]
    }
  }
}
</script>
