const courseSetName = new Set();
const courseMap = new Map();

let courseId = 1;

const courseNameInput = document.getElementById("courseName");
const addCourseBtn = document.getElementById("addCourseBtn");
const courseList = document.getElementById("courseList");

function addCourse() {
  const courseName = courseNameInput.value.trim();

  if (!courseName) {
    alert("Vui lòng nhập tên khóa học!");
    return;
  }

  if (courseSetName.has(courseName)) {
    alert("Khóa học đã tồn tại!");
    return;
  }

  courseSetName.add(courseName);
  courseMap.set(courseId, { id: courseId, name: courseName });

  // Tạo và thêm khóa học vào UI
  const li = document.createElement("li");
  li.innerHTML = `
        ${courseName}
        <button class="delete" data-id="${courseId}">Xóa</button>
    `;
  courseList.appendChild(li);

  li.querySelector(".delete").addEventListener("click", function () {
    deleteCourse(this.dataset.id);
  });

  // Tăng ID và xóa input
  courseId++;
  courseNameInput.value = "";
}

function deleteCourse(id) {
  const course = courseMap.get(Number(id));

  if (course) {
    courseSetName.delete(course.name);
    courseMap.delete(Number(id));

    // Xóa khỏi UI
    const li = document.querySelector(`button[data-id="${id}"]`).parentElement;
    courseList.removeChild(li);
  }
}

addCourseBtn.addEventListener("click", addCourse);

courseNameInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addCourse();
});
