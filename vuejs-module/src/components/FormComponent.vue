<template>
    <div class="container mt-5">
        <h1>Form</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="form.name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="form.email" required>
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input type="number" class="form-control" id="age" v-model.number="form.age" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "PersonForm",
    data() {
        return {
            form: {
                name: "",
                email: "",
                age: null
            }
        };
    },
    methods: {
        submitForm() {
            this.form.name = "";
            this.form.email = "";
            this.form.age= null;
        }
    }
};
</script>
