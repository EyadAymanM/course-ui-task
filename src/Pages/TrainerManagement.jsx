function TrainerManagement() {
  const instructors = [
    {
      name: "Ahmed Shaaban",
      specialization: 'Web Development',
      rate: 8
    },
    {
      name: "Hady Medhat",
      specialization: 'UI/UX',
      rate: 9
    },
    {
      name: "Osama Khalaf",
      specialization: 'Game Dev',
      rate: 10
    },
    {
      name: "Ahmed Shaaban",
      specialization: 'Web Development',
      rate: 8
    },
    {
      name: "Hady Medhat",
      specialization: 'UI/UX',
      rate: 9
    },
    {
      name: "Osama Khalaf",
      specialization: 'Game Dev',
      rate: 10
    },

  ]

  return (
    <div className="container flex flex-col gap-6 pt-5 ">
      <h1 className="text-3xl font-serif text-gray-600">Trainers</h1>
      <div className="grid justify- sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4">
        {instructors.map((i, _) =>
          <div key={_} className="flex flex-col p-2 border hover:border-b-3 hover:border-l-3 max-w-fit shadow hover:bg-amber-50">
            <img src="https://placehold.co/250x250" alt="" className="rounded-t shadow" />
            <h2 className="text-2xl text-bold">Ahmed Shaaban</h2>
            <p className="text-gray-400 text-xl"><strong>Specialization:</strong> Web Development</p>
            <p className="text-gray-400 text-xl"><strong>Rating:</strong> 7.5</p>
          </div>)}
      </div>
    </div>
  )
}
export default TrainerManagement