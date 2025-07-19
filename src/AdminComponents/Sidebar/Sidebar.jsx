import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../../utils/logo-dark.svg';
import $api from "../../utils/axios";
import ReactLoading from 'react-loading';

export default function Sidebar() {
    const [role, setRole] = useState(null);
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userRole = localStorage.getItem('role');
        setRole(userRole);

        if (userRole === 'teacher') {
            fetchGroups();
        }
    }, []);

    const fetchGroups = async () => {
        setLoading(true);
        try {
            const response = await $api.get('api/teachersGroups');
            console.log('API response:', response.data);
        
            if (!Array.isArray(response.data)) {
                throw new Error('Guruhlarni olishda xato: Noto‘g‘ri ma‘lumot formati');
            }
            setGroups(response.data);
        } catch (err) {
            console.error('Fetch groups error:', err); 
            setError(err.response?.data?.message || 'Guruhlarni olishda xato yuz berdi');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-[97%] w-[300px] shadow-2xl bg-white fixed mt-[10px] ml-[10px] p-[10px] rounded-[10px]">
            <div>
                <img src={logo} alt="" className="mx-auto" />
            </div>
            <div className="mt-[30px]">
       
                <NavLink to={role === 'admin' ? '/admin/dashboard' : '/admin/dashboard'}>
                    <button className="group w-full mb-[10px] shadow-md duration-500 hover:shadow-xl scale-95 hover:scale-100 flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]">
                        <svg
                            className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"/>
                        </svg>
                        <span className="text-[#70757b] group-hover:text-[#0077b6] duration-300">
                            Bosh sahifa
                        </span>
                    </button>
                </NavLink>

            
                {role === 'admin' && (
                    <NavLink to={'/admin/teacher'}>
                        <button className="group w-full shadow-md duration-500 hover:shadow-xl scale-95 hover:scale-100 flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]">
                            <svg
                                className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256m131.83 176H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432M147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91m65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89"/>
                            </svg>
                            <span className="text-[#70757b] group-hover:text-[#0077b6] duration-300">
                                Ustozlar
                            </span>
                        </button>
                    </NavLink>
                )}

               
                {role === 'admin' ? (
                    <NavLink to={'/admin/groups'}>
                        <button className="group w-full shadow-md mt-[10px] duration-500 hover:shadow-xl scale-95 hover:scale-100 flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]">
                        <svg className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M0 18v-1.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18zm6 0v-1.625q0-.8.438-1.463t1.237-1.162T9.588 13T12 12.75q1.325 0 2.438.25t1.912.75t1.225 1.163t.425 1.462V18zm13.5 0v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V18zM4 13q-.825 0-1.412-.587T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13m16 0q-.825 0-1.412-.587T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13m-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12"/>
                                        </svg>
                            <span className="text-[#70757b] group-hover:text-[#0077b6] duration-300">
                                Gruhlar
                            </span>
                        </button>
                    </NavLink>
                ) : role === 'teacher' && (
                    <>
{loading && (
  <div className="flex justify-center mt-4">
    <ReactLoading type="bubbles" color="#278bff" height={60} width={60} />
  </div>
)}
                        {error && <p className="text-red-500">{error}</p>}
                        {groups.length > 0 ? (
                            groups.map((group) => (
                                <NavLink key={group.id} to={`/teacher/groups/${group.id}`}>
                                    <button className="group w-full shadow-md mt-[10px] duration-500 hover:shadow-xl scale-95 hover:scale-100 flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]">
                                        <svg className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M0 18v-1.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18zm6 0v-1.625q0-.8.438-1.463t1.237-1.162T9.588 13T12 12.75q1.325 0 2.438.25t1.912.75t1.225 1.163t.425 1.462V18zm13.5 0v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V18zM4 13q-.825 0-1.412-.587T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13m16 0q-.825 0-1.412-.587T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13m-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12"/>
                                        </svg>
                                        <span className="text-[#70757b] group-hover:text-[#0077b6] duration-300">
                                            {group.name}
                                        </span>
                                    </button>
                                </NavLink>
                            ))
                        ) : !loading && !error && (
                            <p className="text-[#70757b]">Guruhlar topilmadi</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}