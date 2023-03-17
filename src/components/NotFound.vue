<template>
    <div class="not-found">
        <h2 class="text-2xl font-medium mb-2">404 - Page Not Found</h2>
        <p class="mb-4 italic">The page you are looking for does not exist</p>
        <router-link class="bg-blue-500 shadow-lg hover:shadow-transparent text-white animate-pulse hover:animate-none font-medium px-2 py-1 rounded active:scale-95 transition active:bg-blue-600" to="/">Go to Home</router-link>
    </div>
</template>

<script>
    export default {
        name: 'NotFound'
        
    }
</script>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>