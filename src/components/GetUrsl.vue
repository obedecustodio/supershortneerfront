<template>
  <div class="container">

    <h1 class="text-secondary text-center">Super Shortneer</h1>
    <form class="my-4 form-inline" @submit="postUrl">
      <label for="url" class="visually-hidden">Url:</label>
      <input v-model="url.long" type="text" placeholder="Your Long Url" class="form-control col mr-2 mb-3"/>
      <button class="btn btn-primary center" type="submit">Shrink</button>
    </form>

    <div class="alert alert-success">
      <p v-if="msg">{{ warn }}</p>
      <p v-else="msg">Your Short Url: <a :href="'https://supershortneerbackend.vercel.app/url/' + shorturl" class="text-success" target="_blank" > {{ shorturl }} </a></p>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'UrlShortneer',
  data() {
    return {
      shorturl: null,
      longurl: null,
      url: {
        long: ''
      },
      warn: 'Your short url will appear here',
      msg: true
    }
  },
  methods: {
    async getUrls() {
      const req = await fetch('https://supershortneerbackend.vercel.app/urls')

      const data = await req.json()

      this.shorturl = data[data.length - 1].shorturl
      this.longurl = data[data.length - 1].longurl
      this.msg = false
      this.warn = ""
    },
    async postUrl(e) {
      e.preventDefault()

      this.msg = true
      this.warn = 'shortening...'
      console.log(this.url)
      const dataJson = JSON.stringify(this.url)
      console.log(dataJson)
      const req = await fetch('https://supershortneerbackend.vercel.app/url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dataJson
      })

      this.url.long = '';
      this.getUrls();
    }
  },
  mounted() {
    // this.getUrls()
  }
}
</script>

