<template>
    <div class="modal-backdrop">
        <div class="modal-item" :class="{ sale: theme === 'sale' }">
            <h1>{{ header }}</h1>
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'header',
            'content',
            'theme'
        ]
    }
</script>

<!-- <style scoped> --> 
<style>
    .modal-item {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .modal-backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .modal-item h1 {
        color: red;
        border: none;
        padding: 0;
    }
    .modal-item.sale {
        border-bottom: 4px solid red;
    }
</style>