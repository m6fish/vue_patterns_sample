<template>
    <div class="basic">
        <slot name="header">
            <h1>Here might be a User Name</h1>
        </slot>

        <!-- only one default slot -->
        <slot>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </slot>

        <slot name="footer">
            <p>Here's some contact info</p>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'basic'
}
</script>
