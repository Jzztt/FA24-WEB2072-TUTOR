<template>
    <div>
        <div class="text-center">
            <h3>Create Student</h3>
        </div>
        <div class="d-flex justify-content-center">
            <form @submit.prevent="handleSubmit" class="w-50 shadow rounded p-3 mb-3">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="student.name">
                    <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
                </div>
                <div class="form-group">
                    <label for="age">Age </label>
                    <input type="number" class="form-control" v-model="student.age">
                    <div v-if="errors.age" class="text-danger">{{ errors.age }}</div>

                </div>
                <div class="form-group">
                    <label for="email">Email </label>
                    <input type="text" class="form-control" v-model="student.email">
                    <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>

                </div>
                <div class="form-group">
                    <label for="image">Image </label>
                    <input type="text" class="form-control" v-model="student.image">
                    <div v-if="errors.image" class="text-danger">{{ errors.image }}</div>

                </div>
                <button type="submit" class="btn btn-primary"> Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import instanceAxios from '@/utils/configAxios';
import { reactive, ref } from 'vue';


const student = ref({
    name: '',
    age: '',
    email: '',
    image: ''
})

const errors = reactive({
    name: null,
    age: null,
    email: null,
    image: null,
});


const validateForm = () => {
    let isValid = true;

    if (!student.value.name.trim()) {
        errors.name = "Tên không được để trống.";
        isValid = false;
    } else {
        errors.name = null;
    }

    if (!student.value.age || isNaN(student.value.age) || student.value.age <= 0) {
        errors.age = "Tuổi phải là số nguyên dương.";
        isValid = false;
    } else {
        errors.age = null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!student.value.email || !emailRegex.test(student.value.email)) {
        errors.email = "Email không hợp lệ.";
        isValid = false;
    } else {
        errors.email = null;
    }

    const urlRegex = /^(https|http):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!student.value.image || !urlRegex.test(student.value.image)) {
        errors.image = "Link ảnh không hợp lệ.";
        isValid = false;
    } else {
        errors.image = null;
    }

    return isValid;
}

const handleSubmit = async () => {
    if (!validateForm()) return
    await instanceAxios.post('students', student.value);
    router.push({ path: '/' })
}
</script>

<style lang="scss" scoped></style>