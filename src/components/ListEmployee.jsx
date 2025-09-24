import UseListEmployee from "../hooks/UseListEmployee";


const ListEmployee = () => {
    const { listData, isLoading, error, getInitials } = UseListEmployee();

    return (
        <div className="p-6 main">
            <section
                className="bg-white shadow-md rounded-xl p-4"
            >

                <div>
                    <h2 className="text-4xl m-3 p-5 text-black font-bold">
                        Lista de Empleados
                    </h2>
                </div>

                <div className="overflow-x-auto rounded-lg content-table">
                    <table className="w-full h-3/4  text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-700 text-sm">
                            <tr>
                                <th className="p-3">
                                    <input type="checkbox" />
                                </th>
                                <th className="p-3 font-semibold">Nombre</th>
                                <th className="p-3 font-semibold">DNI</th>
                                <th className="p-3 font-semibold">Direccion</th>
                                <th className="p-3 font-semibold">Email</th>
                                <th className="p-3 font-semibold">Id</th>
                                <th className="p-3 font-semibold">Editar</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                            {isLoading && (
                                <tr>
                                    <td colSpan="8" className="p-4 text-center">
                                        Cargando...
                                    </td>
                                </tr>
                            )}

                            {error && (
                                <tr>
                                    <td colSpan="8" className="p-4 text-center text-red-500">
                                        Error al cargar datos
                                    </td>
                                </tr>
                            )}

                            {!isLoading &&
                                !error &&
                                listData.map((data, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="p-3">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="p-3 flex items-center gap-6">
                                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-500 text-white font-semibold">
                                                {getInitials(data.nombre)}
                                            </div>
                                            {data.nombre}
                                        </td>
                                        <td className="p-3">{data.dni || "-"}</td>
                                        <td className="p-3">{data.direccion || "-"}</td>
                                        <td className="p-3">{data.email || "-"}</td>
                                        <td className="p-3">{data.id || "-"}</td>
                                        <td className="p-3">

                                        </td>
                                        <td className="p-2">
                                            <button className="px-1 py-1 rounded bg-blue-50 text-white hover:bg-blue-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                                            </button>
                                        </td>

                                        <td className="p-2">
                                            <button className="px-1 py-1 rounded bg-blue-50 text-white hover:bg-blue-100  hover:text-red-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            { }
                            {!isLoading &&
                                !error &&
                                listData.length === 0 &&
                                Array.from({ length: 5 }).map((_, idx) => (
                                    <tr key={idx} className="h-16">
                                        <td className="p-3">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="p-3 flex items-center gap-3">
                                            <span className="w-9 h-9 rounded-full bg-gray-200"></span>
                                        </td>
                                        <td className="p-3"></td>
                                        <td className="p-3"></td>
                                        <td className="p-3"></td>
                                        <td className="p-3"></td>
                                        <td className="p-3">
                                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-400 text-xs font-medium">
                                                Status
                                            </span>
                                        </td>
                                        <td className="p-3"></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </section>
        </div>

    )
}


export default ListEmployee; 