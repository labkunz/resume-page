<template>
    <li class="asideContent">{{ props.name }}</li>
</template>

<script>
export default {
    name: "skillItem",
    props: {
        name: {
            type: String,
            default: "Name"
        }
    },
    setup (props) {
        return { props }
    }
}
</script>