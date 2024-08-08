<template>
    <div class="flex flex-col gap-8">
        <hgroup>
            <h3 class="font-poppins text-[11px] text-[#595656] font-bold">{{ props.compeny }}</h3>
            <p class="font-poppins text-[11px] text-[#595656]">{{ props.jobTitle }}</p>
        </hgroup>
        <p class="font-poppins text-[11px] text-[#595656]">{{ props.experience }}</p>
    </div>
</template>

<script>
export default {
    name: "workExperienceItem",
    props: {
        compeny: {
            type: String,
            default: "Compeny"
        },
        jobTitle: {
            type: String,
            default: "JobTitle"
        },
        experience: {
            type: String,
            default: "Experience"
        }
    },
    setup (props) {
        return { props }
    }
}
</script>