<script>
export default {
    name: 'myList',
    props: {
        myRender: {
            type: Function,
            default: () => {}
        }
    },
    data () {
        return {
            list: ['Apple', 'Facebook', 'Google']
        }
    },
    render (h) {
        return (<ul>{
            this.$props.myRender({
                thisList: this.list
            })
        }</ul>)
    }
}
</script>
