const express = require('express');
const Admin = require("../server");
const adminRouter = express.Router();

// Ruta API para agregar un usuario y contraseña de administrador
// Route for validating admin login credentials
adminRouter.post('/Login_Admi', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    const admin = await Admin.findOne({ username });
  
    if (!admin) {
      res.status(401).json({ error: 'El nombre de usuario o la contraseña no son válidos' });
      return;
    }
  
    if (admin.password !== password) {
      res.status(401).json({ error: 'El nombre de usuario o la contraseña no son válidos' });
      return;
    }
  
    res.status(200).json({ success: true });
  });
  
module.exports = AdminRouter;