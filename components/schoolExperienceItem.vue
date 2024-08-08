<template>
    <div class="flex justify-between">
        <hgroup>
            <h3 class="font-poppins text-[11px] text-[#595656] font-bold">{{ props.year }}</h3>
            <p class="font-poppins text-[11px] text-[#595656]">{{ props.name }}</p>
        </hgroup>
        <p class="font-poppins text-[11px] text-[#595656]">{{ props.description }}</p>
    </div>
</template>

<script>
export default {
    name: "schoolExperienceItem",
    props: {
        year: {
            type: Number,
            default: 2024
        },
        name: {
            type: String,
            default: "School"
        },
        description: {
            type: String,
            default: "Description"
        }
    },
    setup (props) {
        return { props }
    }
}
</script>