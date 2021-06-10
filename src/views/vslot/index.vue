<template>
    <div class="main">
        <basic></basic>

        <hr/>

        <!-- Named Slots: before vue 2.6 -->
        <basic>
            <!-- default slot -->
            <p>Hello Vue slot</p>

            <template slot="footer">
                <p>footer</p>
            </template>

            <template slot="header">
                <h1>Bulb</h1>
            </template>
        </basic>

        <hr/>

        <!-- Named Slots: after 2.6 -->
        <basic>
            <template v-slot:header>
                <h1>NewBulb</h1>
            </template>

            <p>Hello v-slot</p>

            <template v-slot:footer>
                <p>v-slot footer</p>
            </template>
        </basic>

        <hr/>

        <!-- Scoped Slots: before vue 2.6 -->
        <card v-bind="{user: userA}">
            <template slot="default" slot-scope="slotProps">
                {{ slotProps.salary }}
            </template>
        </card>

        <!-- Scoped Slots: after vue 2.6 -->

        <card v-bind="{user: userB}">
            <template v-slot:default="{salary}">
                {{ salary }}
            </template>
        </card>

        <hr/>

        <!-- Named Slots Shorthand: after 2.6 -->
        <basic>
            <template #header>
                <h1>NewBulb - Shorthand</h1>
            </template>

            <p>Hello v-slot Shorthand</p>

            <template #footer>
                <p>v-slot footer</p>
            </template>
        </basic>

        <!-- Named Slots Shorthand: after vue 2.6 -->
        <card v-bind="{user: userB}">
            <template #default="{salary}">
                {{ salary }}
            </template>
        </card>

        <hr/>

        <card v-bind="{user: userA}">
            <template v-slot:performance="{ performance }">
                performance: {{ performance }}
            </template>
        </card>

    </div>
</template>

<script>
import basic from './basic'
import card from './card'
export default {
    name: 'myVslot',
    components: {
        basic,
        card
    },
    data () {
        return {
            userA: {
                id: '001',
                name: 'Bulb',
                rank: 3
            },
            userB: {
                id: '002',
                name: 'Bulb-2',
                rank: 6
            }
        }
    }
}
</script>
