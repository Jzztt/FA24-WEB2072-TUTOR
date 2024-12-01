const validateForm = ( student, errors) => {
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

export default validateForm