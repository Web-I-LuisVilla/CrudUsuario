import React, { useState, useEffect } from "react";

const initialForm = {
  nombre: "",
  apellido: "",
  cedula: "",
  correo: "",
  telefono: "",
  edad: "",
  fecha_de_nacimiento: "",
  direccion: "",
  id: null,
};

const CrudForm = ({ creatData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  //Valida si la varible datatoedit se modifica
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  // CambioAusuarios
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // AgregarUsuario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.nombre ||
      !form.apellido ||
      !form.cedula ||
      !form.correo ||
      !form.telefono ||
      !form.edad ||
      !form.fecha_de_nacimiento ||
      !form.direccion
    ) {
      alert("Debes ingresar todos los campos");
      return;
    }

    if (form.id === null) {
      creatData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  // BorrarTodo
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h2>{dataToEdit ? "Editar" : "Agregar"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nombre}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          value={form.apellido}
        />
        <input
          type="number"
          name="cedula"
          placeholder="Cedula"
          onChange={handleChange}
          value={form.cedula}
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          onChange={handleChange}
          value={form.correo}
        />
        <input
          type="number"
          name="telefono"
          placeholder="Telefono"
          onChange={handleChange}
          value={form.telefono}
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          onChange={handleChange}
          value={form.edad}
        />
        <input
          type="date"
          name="fecha_de_nacimiento"
          placeholder="Fecha de nacimiento"
          onChange={handleChange}
          value={form.fecha_de_nacimiento}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Direccion"
          onChange={handleChange}
          value={form.direccion}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
