
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useCreateEmployee = () => {
    const [form, setForm] = useState({
        nombre: "",
        dni: "",
        direccion: "",
        email: "",
        id: "",
    });

    const URL = 'https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado';

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.nombre) {
            Alerta('Debe llenar el campo nombre ', 'warning');
        } else if (!form.dni) {
            Alerta('Debe llenar el campo DNI', 'warning')
        }
        else if (!form.direccion) {
            Alerta('Debe llenar el campo direccion', 'warning')
        }
        else if (!form.email) {
            Alerta('Debe llenar el campo email', 'warning')
        } else if (!form.id) {
            Alerta('Debe llenar el campo id', 'warning')
        }

        axios.post(URL)
            .then(response => {
                Alerta('Empleado creado exitosamente', 'success');
                setForm({ nombre: "", dni: "", direccion: "", email: "", id: "" });
            }).catch(
                err => {
                    Alerta(`No se pudo crear el empleado ${err}`, 'error')
                }
            )



    };

    const Alerta = (message, icon) => {
        Swal.fire({
            title: message,
            icon: icon
        })
    }

    return {
        setForm,
        form,
        handleChange,
        handleSubmit
    }

};

export default useCreateEmployee;
