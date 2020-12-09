<template>
    <div class="maintable">
        <div>
            <input type="number" v-model="base"/>
            <input type="number" v-model="bonus"/>
        </div>

        <!-- Senior -->
        <calculator v-slot="{salary, tax, level}" v-bind="{isJunior: false, base: +base, bonus: +bonus}">
            <div>
                <div>Senior</div>
                <span>salary: {{salary}}</span> /
                <span>tax: {{tax}}</span> /
                <span>level: {{level}}</span>
            </div>
        </calculator>

        <!-- junior -->
        <calculator v-slot="{salary, tax, level}" v-bind="{isJunior: true, base: +base, bonus: +bonus}">
            <div>
                <div>junior</div>
                <span>salary: {{salary}}</span> /
                <span>tax: {{tax}}</span> /
                <span>level: {{level}}</span>
            </div>
        </calculator>
    </div>
</template>

<script>
import calculator from './calculator'
export default {
    name: 'maintable',
    components: {
        calculator
    },
    data () {
        return {
            base: 1000, // 底薪
            bonus: 100 // 加給
        }
    }
}
</script>
