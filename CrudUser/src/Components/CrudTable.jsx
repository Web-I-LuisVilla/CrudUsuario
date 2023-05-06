import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
return (
    <div>
    <h2>Tabla de datos</h2>
    <table>
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Edad</th>
            <th>Fecha de nacimiento</th>
            <th>Direccion</th>
            <th>Acciones</th>
        </tr>
        </thead>

        <tbody>
        {data.length > 0 ? (
            data.map((el) => (
            <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
            />
            ))
        ) : (
            <tr>
            <td colSpan="9">Sin datos</td>
            </tr>
        )}
        </tbody>
    </table>
    </div>
);
};

export default CrudTable;
