<template>
  <div class="bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
    <div class="flex items-center mb-4">
      <img :src="userData.avatar_url" alt="User Avatar" class="rounded-full w-12 h-12 mr-4" />
      <h5 class="font-semibold text-lg text-white">{{ userData.login }}</h5>
    </div>
    <p class="text-gray-400 mb-4">{{ repoDescription }}</p>
    <div class="flex justify-between">
      <a :href="repoUrl" target="_blank" class="text-blue-400 hover:text-blue-500 flex items-center">
        <i class="fab fa-github mr-2"></i> Repositorio
      </a>
      <a v-if="projectUrl" :href="projectUrl" target="_blank" class="text-green-400 hover:text-green-500 flex items-center">
        <i class="bi bi-link-45deg mr-2"></i> Demo
      </a>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  props: {
    repoUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userData: {},
      repoDescription: '',
      projectUrl: '',
    };
  },
  mounted() {
    this.fetchRepoData();
  },
  methods: {
    fetchRepoData() {
      const repoOwner = this.repoUrl.split('/')[3];
      const repoName = this.repoUrl.split('/')[4];
      const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;

      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        })
        .then((response) => {
          this.userData = response.data.owner;
          this.repoDescription = response.data.description;
          this.projectUrl = response.data.homepage;
        })
        .catch((error) => {
          console.error('Error fetching repo data:', error);
        });
    },
  },
};
</script>