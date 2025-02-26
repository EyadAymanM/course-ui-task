import { useState } from "react"

function CourseManagement() {
  const [newCourse, setNewCourse] = useState({
    course: "",
    instructor: '',
    videos: 0
  })
  const [courses, setCourses] = useState([
    {
      course: "Responsive Web Design",
      instructor: 'Shady Wael',
      videos: 15
    },
    {
      course: "Node js",
      instructor: 'Medhat Saleh',
      videos: 28
    },
    {
      course: "Backend - Django",
      instructor: 'Mohamed Monir',
      videos: 19
    },
  ])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newCourse);

    if (newCourse.course != "" && newCourse.instructor != "" && newCourse.videos > 0 && courses.findIndex(c => c.course == newCourse.course) == -1)
      setCourses([...courses, newCourse])
  }
  return (
    <div className="container mx-auto flex flex-col gap-6 pt-5 ">
      <h1 className="text-3xl font-serif text-gray-600">Course Management</h1>
      <div className="relative flex flex-col w-full h-full  text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Course Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Instructor
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Videos
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => <tr key={c.course}>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {c.course}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {c.instructor}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {c.videos}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <button onClick={() => setCourses(courses.filter(cd => cd.course != c.course))} href="#" className="hover:bg-blue-400 rounded-full cursor-pointer block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  🗑️
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <form onSubmit={handleSubmit} className="flex px-20 py-6 gap-3 flex-col md:flex-row not-md:w-80">
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="courseName">Course Name</label>
          <input onChange={(e) => setNewCourse({ ...newCourse, course: e.target.value })} type="text" name="courseName" className="border px-2 py-1 min-w-30 border-gray-400 focus:outline-0 focus:border-b-black focus:border-b-3" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="instructor">Insrtuctor</label>
          <input onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })} type="text" name="instructor" className="border px-2 py-1 min-w-30 border-gray-400 focus:outline-0 focus:border-b-black focus:border-b-3" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="videoCount">Course Name</label>
          <input onChange={(e) => setNewCourse({ ...newCourse, videos: e.target.value })} type="text" name="videoCount" className="border px-2 py-1 min-w-30 border-gray-400 focus:outline-0 focus:border-b-black focus:border-b-3" />
        </div>
        <input type="submit" value="Add Course" className=" border w-fit rounded px-2 hover:bg-black hover:text-white cursor-pointer duration-300" />
      </form>
    </div>
  )
}
export default CourseManagement