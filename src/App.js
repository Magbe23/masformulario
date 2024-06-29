import React, { useState } from 'react';
import './App.css';

const RegistrationForm = () => {
  //Almacenar los valores del formulario
  const[form, setForm] = useState ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  //Almacenar los mensajes de error
  const[errors, setErrors] = useState ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',

  });

  //Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    validateField (name, value);
  };

  //Validar campos individuales
  const  validateField = (name, value) => {
    let error = '';

    switch (name){
      case 'firstName':
      case 'lastName':
        if (value.length < 2) {
          error = 'El campo debe tener al menos 2 caracteres';
        }
        break;
      case 'email':
        if (value.length < 5) {
          error = 'El campo debe tener al menos 5 caracteres';
        }
        break;
      case 'password':
        if (value.length < 8) {
          error = 'La contraseña debe tener al menos 8 caracteres';
        }
        break;
      case 'confirmPassword':
        if (value !== form.password) {
          error = 'Las contraseñas deben coincidir'
        }
        break;
        default:
        break; 
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  return (
    <form className="registration-form">
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          className={errors.firstName ? 'error' : ''}
        />
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          className={errors.lastName ? 'error' : ''}
        />
        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className={errors.password ? 'error' : ''}
        />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? 'error' : ''}
        />
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
      </div>
      <button type="submit" className="submit-button">Register</button>
    </form>
  );
};

export default RegistrationForm;