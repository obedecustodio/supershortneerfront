<template>
  <div class="container">

    <h1 class="text-secondary text-center">Super Shortneer</h1>
    <form class="my-4 form-inline" @submit="postUrl">
      <label for="url" class="visually-hidden">Url:</label>
      <input v-model="url.long" type="text" placeholder="Your Long Url" class="form-control col mr-2 mb-3"/>
      <button class="btn btn-primary center" type="submit">Shrink</button>
    </form>

    <table class="table table-striped table-responsive bg-dark">
      <thead>
        <tr>
        <th>Long Url</th>
        <th>Short Url</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="url in urls" :key="url.id">  
        <td>
          <a :href=" url.longurl" class="text-primary" target="_blank">{{ url.longurl }}</a>
        </td>
        <td>
          <a :href="'https://supershortneerbackend.vercel.app/url/' + url.shorturl" class="text-success" target="_blank">{{ url.shorturl }}</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'UrlShortneer',
  data() {
    return {
      urls: null,
      url: {
        long: ''
      }
    }
  },
  methods: {
    async getUrls() {
      const req = await fetch('https://supershortneerbackend.vercel.app/urls')

      const data = await req.json()

      this.urls = data

      console.log(this.url)
    },
    async postUrl() {
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
    this.getUrls()
  }
}
</script>

