<template>
    <div>
        <button @click="addCount" >ADD by parent</button>
        <childA :count="count" @counter-update="addCount" :score.sync="score"/>
    </div>
</template>

<script>
import childA from './childA'

export default {
    name: 'propsSync',
    components: {
        childA
    },
    data () {
        return {
            count: 0,
            score: 0
        }
    },
    methods: {
        addCount () {
            this.count++
        }
    }
}
</script>
