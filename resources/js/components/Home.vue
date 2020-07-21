<template>

    <h1 class="font-normal text-3xl leading-none"> Home</h1>

</template>

<script>
    export default {
       created() {
            console.log('Home.');
            
            // axios
            //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            //     .then(response => (this.info = response))

        },
    }
</script>
