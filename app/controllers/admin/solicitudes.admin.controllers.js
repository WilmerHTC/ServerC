import dbconnection from "../../database/dbConf.js";

export const verSolicitud = async (req, res) => {
  try {
    const query =
      "SELECT * FROM usuarios WHERE idTipo =2 AND estadoUsuario = 0";
    dbconnection.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(result);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const aceptarSolicitud = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const query = "UPDATE usuarios SET estadoUsuario = ? WHERE idUsuario = ?";
    dbconnection.query(query, [1, id], (err, result) => {
      if (err) {
        return res.status(400).json("No fue posible aceptar la solicitud");
      }
      res.status(200).json("Solicitud Aceptada");
    });
  } catch (error) {
    return res.status(500).json("Error en el servidor");
  }
};
export const nuevaSolicitud = async (req, res) => {
  try {
    const query =
      "SELECT COUNT(*) AS nuevaSolicitud FROM usuarios WHERE idTipo =2 AND estadoUsuario = 0";
    dbconnection.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(result[0]);
    });
    console.log(query);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
