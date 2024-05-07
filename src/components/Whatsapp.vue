<template>
    <div class="whatsapp-float">
        <a :href="whatsappLink" target="_blank" class="whatsapp-btn" title="¿Necesitas Ayuda con el desafío?">
            <i class="bi bi-whatsapp"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: 'WhatsappFloat',
    props: {
        phoneNumber: {
            type: String,
            required: true
        }
    },
    computed: {
        whatsappLink() {
            return `https://wa.me/${this.phoneNumber}`
        }
    }
}
</script>

<style scoped>
.whatsapp-float {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
}

.whatsapp-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #25d366;
    color: #fff;
    font-size: 30px;
    text-decoration: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;
    position: relative;
}

.whatsapp-btn:hover::before {
    content: attr(title);
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
}

.whatsapp-btn:hover {
    background-color: #128c7e;
}
</style>