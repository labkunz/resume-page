<template>
    <hgroup>
        <h3 class="font-poppins text-[15px] text-[#ffffff] font-bold">{{ props.title }}</h3>
        <p class="font-poppins text-[11px] text-[#ffffff]">{{ props.content }}</p>
    </hgroup>
</template>

<script>
export default {
    name: 'contactItem',
    props: {
        title: {
            type: String,
            default: "Title"
        },
        content: {
            type: String,
            default: "Content"
        }
    },
    setup (props) {
        return { props }
    }
}
</script>