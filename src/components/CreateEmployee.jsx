import { useState } from "react";
import UseCreateEmployee from "../hooks/UseCreateEmployee";

const CreateEmployee = () => {

    const {
        setForm,
        form,
        handleChange,
        handleSubmit } = UseCreateEmployee();

    return (
        <div className="max-w-lg mx-auto my-10 bg-white shadow-lg rounded-2xl p-6 text-black" >
            <h2 className="text-2xl font-bold mb-6 text-center">Crear Empleado</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-1 font-medium">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Jesua Pavón"
                        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">DNI</label>
                    <input
                        type="text"
                        name="dni"
                        value={form.dni}
                        onChange={handleChange}
                        placeholder="Ej. 0801200419619"
                        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Dirección</label>
                    <input
                        type="text"
                        name="direccion"
                        value={form.direccion}
                        onChange={handleChange}
                        placeholder="Ej. Col. Torocagua"
                        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jesuaduron@email.com"
                        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Id</label>
                    <input
                        type="text"
                        name="id"
                        value={form.id}
                        onChange={handleChange}

                        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

                <button

                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl"

                >
                    Guardar
                </button>
            </form>
        </div>
    );

}


export default CreateEmployee; 