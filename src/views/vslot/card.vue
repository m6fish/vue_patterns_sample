<template>
    <div class="card">
        <p>name: {{user.name}}</p>
        <p>rank: {{user.rank}}</p>
        <slot v-bind="{salary: getSalary}"/>
        <slot name="performance" :performance="getPerformcance" />
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        /**
         * user.id
         * user.name
         * user.rank
         */
        user: {
            type: Object,
            default: () => { return {} }
        }
    },
    computed: {
        getSalary () {
            const { rank } = this.user
            return rank * 10000
        },
        getPerformcance () {
            const { rank } = this.user
            return rank > 3 ? 'A' : 'B'
        }
    }
}
</script>
