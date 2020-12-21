<template>
    <div class="modal-backdrop">
        <div class="modal-item">
            <h1>Modal Title</h1>
            <p>Modal Content</p>
        </div>
    </div>
</template>

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
</style>