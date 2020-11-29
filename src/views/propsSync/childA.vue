<template>
    <div>
        <p>Count:{{count}}</p>
        <button @click="childClick">Add by childA</button>

        <p>Score:{{score}}</p>
        <button @click="scoreClick">Calculate Score</button>
    </div>
</template>

<script>
export default {
    name: 'childA',
    props: {
        score: Number,
        count: Number
    },
    methods: {
        childClick () {
            console.log('click by childA')
            this.$emit('counter-update', this.count + 1)
        },
        scoreClick () {
            console.log('click by childA-score')
            this.$emit('update:score', this.count * 10)
        }
    }
}
</script>
