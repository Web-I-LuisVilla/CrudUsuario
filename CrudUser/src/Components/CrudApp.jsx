import React, { useState } from "react";
import CrudTable from "./CrudTable";
import CrudForm from "./CrudForm";

const initialDB = [
  {
    nombre: "pedro",
    apellido: "gomez",
    cedula: "1001254811",
    correo: "pedrogomez@gmail.com",
    telefono: "3012564785",
    edad: "22",
    fecha_de_nacimiento: "2000-06-03",
    direccion: "calle 8",
    id: 1,
  },
  {
    nombre: "juan",
    apellido: "real",
    cedula: "1012236547",
    correo: "juanreal@gmail.com",
    telefono: "3689536552",
    edad: "17",
    fecha_de_nacimiento: "2005-09-25",
    direccion: "calle 9",
    id: 2,
  },
  {
    nombre: "ana",
    apellido: "velez",
    cedula: "1002456852",
    correo: "anavelez@gmail.com",
    telefono: "3014257874",
    edad: "20",
    fecha_de_nacimiento: "2002-12-03",
    direccion: "calle 20",
    id: 3,
  },
  {
    nombre: "andres",
    apellido: "murcia",
    cedula: "101655365",
    correo: "andresmurcia@gmail.com",
    telefono: "3685239524",
    edad: "13",
    fecha_de_nacimiento: "2010-02-01",
    direccion: "calle 16",
    id: 4,
  },
  {
    nombre: "juan",
    apellido: "miguel",
    cedula: "1002784112",
    correo: "juanmiguel@gmail.com",
    telefono: "3014682357",
    edad: "24",
    fecha_de_nacimiento: "1998-09-25",
    direccion: "calle 28",
    id: 5,
  },
];

const CrudApp = () => {
  const [DB, setDB] = useState(initialDB);
//   Constante que nos permite saber cuando se creo o cuando se modifica
  const [dataToEdit, setDataToEdit] = useState(null);

  //   Se crea base de datos
  const creatData = (data) => {
    data.id = Date.now();
    //  console.log(data);
    setDB([...DB, data]);
  };

  //   Actualiza los datos el usuario
  const updateData = (data) => {
    let newData = DB.map((el) => (el.id === data.id ? data : el));
    setDB(newData);
  };

//   
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );
    if (isDelete) {
      let newData = DB.filter((el) => el.id !== id);
      setDB(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Luis Villa y Ronaldo Suarez</h2>
      <CrudForm
        creatData={creatData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={DB}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
