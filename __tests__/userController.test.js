//1. importamos dependencias, modulos y funciones que vayamos a usar

import supertest from "supertest"; //permite probar controladores get, put,delete, etc
import app from "../app.js"; //permite probar conexion con DB y rutas
import mongoose from "mongoose";
import { userModel } from "../src/models/users.model.js";

//2. definir los bloques de prueba

describe("pruebas de los controladores de usuarios", () => {
  /*
    Configuraciòn global de las pruebas
        beforeEach: para ejecutar acciones que queramos que se hagan antes de cada prueba
        afterAll: ejecuta acciones que queramos que se hagan al final de TODAS las peticiones
    */

  //este será para limpiar la base de datos antes de cada prueba
  //los corchetes dentro de parentesis significa "todo"
  beforeEach(async () => {
    await userModel.deleteMany({});
  });

  //cerrar conexion con la base de datos despues de todas las pruebas
  afterAll(async () => {
    await mongoose.connection.close();
  });

  const testUser = {
    fullName: "pepito perez",
    email: "pepito@gmail.com",
    password: "123",
  };

  //2.1 defina los bloques de prueba para la peticion POST
  describe("pruebas POST /users", () => {
    /* 
    caso exitoso:
    caso fallido: faltan campos requeridos, credenciales incorrectas, elementos no encontrados
    */

    //primer caso de prueba: creación de usuarios
    it("deberia crear un usuario correctamente", async () => {
      const res = await supertest(app).post("/usuarios").send(testUser);

      //definir que esperamos de esa respuesta
      expect(res.statusCode).toBe(201);
    });

    //segundo caso de prueba: error si falta un campo obligatorio
    it("deberia devolver un error si falta un cambio obligatorio", async () => {
    const res = await supertest(app).post("/usuarios").send({email:testUser.email});

    //definir que esperamos de esa respuesta
    expect(res.body).toHaveProperty('mensaje','Ocurrió un error al crear un usuario');
  });


  });

  //2.2 defina los bloques de prueba para la peticion GET
  //(recuerda que con el deletemany vaciaste toda la BD asi que ten en cuenta el comentario de abajo)
  //para el proyecto si van a probar que funcione la peticion get teniendo usuario almacenados:
//await userModel(testUser).save();  -->  debemos primero guardar un usuario

  describe("pruebas GET /users", () => {
it('deberia indicar que no hay usuarios almacenados',async()=> {
    const res = await supertest(app).get('/usuarios')
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('mensaje','No hay usuarios almacenados')
})

  });
});
