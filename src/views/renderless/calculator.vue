<script>
export default {
    name: 'calculator',
    props: {
        isJunior: Boolean,
        base: Number,
        bonus: Number
    },
    data () {
        return {
            TAX_LIMIT: 20000
        }
    },
    computed: {
        level () {
            return this.isJunior ? 1 : 2
        },
        salary () {
            return (+this.base + +this.bonus) * this.level
        },
        tax () {
            return this.salary < this.TAX_LIMIT ? '5%' : '12%'
        }

    },
    render () {
        return this.$scopedSlots.default({
            salary: this.salary,
            tax: this.tax,
            level: this.level
        })
    }
}
</script>
