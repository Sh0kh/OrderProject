import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle, FaPlus } from "react-icons/fa";
import ReactLoading from "react-loading";
import $api from "../../utils/axios";

export default function GroupsId() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeDay, setActiveDay] = useState(null);
  const [students, setStudents] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const today = new Date();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await $api.get(`api/teacher/group/search/${id}`);
        setGroupName(response.data.name || "Noma'lum guruh");
        const fetchedStudents = response.data.students.map((student) => ({
          name: student.name || "Noma'lum",
          days: student.readerevaluation.length
            ? [student.readerevaluation[0].on_time === 1 ? true : false]
            : [null],
          ratings: student.readerevaluation.length
            ? [
                {
                  activity: student.readerevaluation[0].attended_score || 0,
                  homework: student.readerevaluation[0].homework_score || 0,
                },
              ]
            : [],
        }));
        setStudents(fetchedStudents);
        setLoading(false);
      } catch (err) {
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const toggleAction = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleDayForm = (studentIndex) => {
    setActiveDay(activeDay === studentIndex ? null : studentIndex);
  };

  const handleAttendanceChange = (studentIndex, dayIndex, value) => {
    const newStudents = [...students];
    newStudents[studentIndex].days[dayIndex] = value;
    setStudents(newStudents);
  };

  const handleRatingChange = (studentIndex, dayIndex, field, value) => {
    const newStudents = [...students];
    if (newStudents[studentIndex].ratings.length === 0) {
      newStudents[studentIndex].ratings = [{ activity: 0, homework: 0 }];
    }
    newStudents[studentIndex].ratings[dayIndex][field] = parseInt(value) || 0;
    setStudents(newStudents);
  };

  const handleAddEvaluation = (studentIndex, activity, homework) => {
    const newStudents = [...students];
    newStudents[studentIndex].ratings = [
      {
        activity: parseInt(activity) || 0,
        homework: parseInt(homework) || 0,
      },
    ];
    setStudents(newStudents);
    setActiveDay(null); // Formani yopish
  };

  if (loading) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-[50vh]">
        <ReactLoading type="spin" color="#1ca9ff" height={50} width={50} />
        <p className="mt-4 text-lg text-gray-600">Ma'lumotlar yuklanmoqda...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="bg-red-100 text-red-600 p-4 rounded-xl shadow-md">
          <p className="text-lg font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="bg-gray-100 text-gray-600 p-6 rounded-xl shadow-md">
          <p className="text-lg font-semibold">Hech qanday ma'lumot topilmadi</p>
          <p className="mt-2">Bu guruhda talabalar mavjud emas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mt-[50px] bg-gray-100 px-4 py-3 flex justify-between items-center mb-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold">{groupName}</h1>
        <button className="bg-[#1ca9ff] flex items-center gap-[5px] text-white px-[20px] py-[8px] rounded-[10px] shadow-xl border-[2px] border-[#1ca9ff] duration-500 hover:text-[#1ca9ff] hover:bg-transparent">
          <FaPlus />
          Yangi qo‘shish
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md relative">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold">Davomat</h2>
          <div className="bg-gray-100 p-2 rounded-lg">
            <h3 className="text-center font-semibold">
              {today.toLocaleString("default", { month: "long" })} {today.getFullYear()}
            </h3>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-fixed">
            <thead>
              <tr>
                <th className="p-2 w-1/3">Ism</th>
                <th className="p-2 w-1/3 text-center">Davomat</th>
                <th className="p-2 w-1/3 text-center">Baholar</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr key={i} className="border-t">
                  
                  <td className="p-2">
                    <div onClick={() => toggleAction(i)} className="flex items-center gap-2 cursor-pointer">
                      <FaUserCircle className="text-gray-500" />
                      <span className="hover:underline">{student.name}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m6 7l6 6l6-6l2 2l-8 8l-8-8z"
                        />
                      </svg>
                    </div>
                    {activeIndex === i && (
                      <div className="mt-2 flex gap-2">
                        <button className="bg-yellow-400 mx-[10px] hover:bg-yellow-500 text-white px-3 py-1 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
                            />
                          </svg>
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="p-2 text-center">
                    {student.ratings.length > 0 ? (
                      <div className="flex flex-col text-sm text-gray-600">
                        <p>Faollik: {student.ratings[0].activity}</p>
                        <p>Vazifa: {student.ratings[0].homework}</p>
                        <p>Vazifa: {student.ratings.on_time === 1 ? `Bor edi` : `Yoq edi`}</p>

                      </div>
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                  <td className="p-2 text-center">
                    <div className="flex flex-col gap-2 items-center">
                      {student.days[0] === null ? (
                        <span>-</span>
                      ) : (
                        <button
                          className={`px-3 py-1 rounded text-white font-semibold ${
                            student.days[0] ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                          }`}
                        >
                          {student.days[0] ? "Bor edi" : "Yo‘q edi"}
                        </button>
                      )}
                      <button
                        onClick={() => toggleDayForm(i)}
                        className="bg-[#1ca9ff] text-white w-6 h-6 rounded-full flex items-center justify-center"
                      >
                        +
                      </button>
                      {activeDay === i && (
                        <div className="mt-4 flex flex-col gap-4 items-center">
                          <div className="flex gap-4 justify-center">
                            <input
                              type="number"
                              min="1"
                              max="5"
                              placeholder="Faollik (1-5)"
                              value={student.ratings.length > 0 ? student.ratings[0].activity : ""}
                              onChange={(e) =>
                                handleRatingChange(i, 0, "activity", e.target.value)
                              }
                              className="border border-gray-300 rounded-md p-1 w-24 text-sm"
                            />
                            <input
                              type="number"
                              min="1"
                              max="5"
                              placeholder="Vazifa (1-5)"
                              value={student.ratings.length > 0 ? student.ratings[0].homework : ""}
                              onChange={(e) =>
                                handleRatingChange(i, 0, "homework", e.target.value)
                              }
                              className="border border-gray-300 rounded-md p-1 w-24 text-sm"
                            />
                          </div>
                          <div className="relative inline-block">
                            <button
                              className={`px-4 py-1 rounded-full font-semibold text-white transition-all duration-300 ${
                                student.days[0] === null
                                  ? "bg-blue-500 hover:bg-blue-600"
                                  : student.days[0]
                                  ? "bg-green-500 hover:bg-green-600"
                                  : "bg-red-500 hover:bg-red-600"
                              } group relative`}
                            >
                              {student.days[0] === null ? (
                                "DAVOMAT"
                              ) : student.days[0] ? (
                                "BOR EDI"
                              ) : (
                                "YO‘Q EDI"
                              )}
                              <div className="absolute hidden group-hover:flex gap-2 bg-white p-2 rounded shadow-lg left-0 right-0 justify-center top-0 h-full items-center">
                                <button
                                  onClick={() => handleAttendanceChange(i, 0, true)}
                                  className="text-green-500 hover:text-green-600"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                                    />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleAttendanceChange(i, 0, false)}
                                  className="text-red-500 hover:text-red-600"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </button>
                          </div>
                        
                        </div>
                      )}
                    </div>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}