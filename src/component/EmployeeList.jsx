import { useNavigate } from "react-router-dom";

const EmployeeList = () => {

    const navigate = useNavigate()
    return ( 
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button
                onClick={() => navigate("/addEmployee")} 
                className="rounded bg-slate-600 text-white px-6 py-2">Add Employee</button>
            </div>
            <div className="shadow border-b flex">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                First Name</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Last Name</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Email ID</th>
                            <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="text-left px-6 py-4 whitespace-nowrap">
                                <div className="text-small text-gray-500">Jon</div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap">
                                <div className="text-small text-gray-500">Snow</div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-medium text-small">
                                <div className="text-small text-gray-500">Jon@gmail.com</div>
                            </td>
                            <td className="text-right px-6 py-4 whitespace-nowrap">
                                <a href="http://" 
                                className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
                                <a href="http://"
                                className="text-indigo-600 hover:text-indigo-800">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default EmployeeList;