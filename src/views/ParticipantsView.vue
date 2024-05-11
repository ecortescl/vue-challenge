<template>
  <div class="challenge-form">
    <h2 class="text-2xl font-bold mb-6">Participantes</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <RepoCard
        repoUrl="https://github.com/SunlightShield/Challenge_Vue"
        
      />
      <RepoCard
        repoUrl="https://github.com/Pipedsl/Vue-Challenge-2024"
      
      />
      <RepoCard
        repoUrl="https://github.com/Dalvae/simulador-creditos"
        
      />
      <RepoCard repoUrl="https://github.com/rayoconico/tarea" />
    </div>
  </div>
</template>
<script>
import RepoCard from "@/components/RepoCard.vue";
export default { components: { RepoCard } };
</script>
