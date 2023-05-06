import React, { useContext } from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let {nombre,apellido,cedula,correo,telefono,edad,fecha_de_nacimiento,direccion,id} = el;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{cedula}</td>
      <td>{correo}</td>
      <td>{telefono}</td>
      <td>{edad}</td>
      <td>{fecha_de_nacimiento}</td>
      <td>{direccion}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
