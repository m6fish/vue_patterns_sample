<template>
    <div>
        <!-- <fp v-bind="{pid: '001', sex: 'male', name: 'bulb'}"/> -->
        <fp v-for="one in memberData" v-bind="one" :key="one.pid"/>
    </div>
</template>

<script>
import fp from './functional'

export default {
    name: 'FP_index',
    components: {
        fp
    },
    data () {
        return {
            memberData: [{
                pid: 'A001',
                sex: 'male',
                name: 'Bulb'
            }, {
                pid: 'A002',
                sex: 'female',
                name: 'Alice'
            }, {
                pid: 'A003',
                sex: 'male',
                name: 'Ran'
            }]
        }
    }
}
</script>
