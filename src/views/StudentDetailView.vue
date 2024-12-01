<template>
    <div>
        <div >
            <h3 class="text-center">Student Detail</h3>
            <div class="d-flex justify-content-center">
                <div class="p-3 shadow rounded">
                    <p>Name: {{ student.name }}</p>
                    <p>Email: {{ student.email }}</p>
                    <p>Age:{{ student.age }}</p>
                    <p>Avatar:<img width="100" :src="student.image" alt=""></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import instanceAxios from '@/utils/configAxios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const { params } = useRoute();
const student = ref({})

const fetchStudent = async () => {
    const { data } = await instanceAxios.get(`students/${params.id}`)
    student.value = data
}

onMounted(() => {
    fetchStudent()
})

</script>

<style lang="scss" scoped></style>