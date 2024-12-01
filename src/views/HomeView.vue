<script setup>
import instanceAxios from '@/utils/configAxios';
import { onMounted, ref } from 'vue';

const students = ref([])


const deleteStudent = async (id) => {
  const isDeleted = confirm('Are you sure')
  if (!isDeleted) return
  await instanceAxios.delete(`students/${id}`)
  fetchStudents()
}

const fetchStudents = async () => {
  const { data } = await instanceAxios.get('students');
  students.value = data
}

onMounted(() => {
  fetchStudents()
})


</script>

<template>
  <main>
    <div class="text-center pt-4 pb-4">
      <h3> List Student</h3>
    </div>
    <RouterLink to="/create" class="btn btn-primary"> Create </RouterLink>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>image</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, age, email, image } in students" :key="id">
          <td>{{ id }}</td>
          <td>{{ name }}</td>
          <td>{{ age }}</td>
          <td>{{ email }}</td>
          <td><img width="100" :src="image" alt=""></td>
          <td>
            <RouterLink class="btn btn-primary" :to="{ name: 'student-update', params: { id } }">Update</RouterLink>
            <RouterLink class="btn btn-primary" :to="{ name: 'student-detail', params: { id } }">Detail</RouterLink>
            <button class="btn btn-danger" @click="deleteStudent(id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
