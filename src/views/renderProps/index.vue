<template>
    <div class="main">
        <my-list :my-render="rendList"/>
        <my-list :my-render="rendFilter"/>
    </div>
</template>

<script>
import myList from './myList.vue'
export default {
    name: 'renderProps',
    components: {
        myList
    },
    methods: {
        rendList ({ thisList }) {
            return (thisList.map((com) => <li>{ com }</li>))
        },
        rendFilter ({ thisList }) {
            const filterList = thisList.reduce((ans, com) => {
                (com !== 'Apple') && ans.push(com)
                return ans
            }, [])

            return (filterList.map((com) => <li>{ com }</li>))
        }
    }
}
</script>
