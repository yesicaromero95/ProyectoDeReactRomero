import "./checkout.scss"

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="formulario">
      <form onSubmit={handleSubmitForm} >
        <div className="itemForm">
          <label className="label">Nombre completo: </label>
          <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} required/>
        </div>
        <div className="itemForm">
          <label className="label">Telefono: </label>
          <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} required/>  
        </div>
        <div className="itemForm">
          <label className="label">Email: </label>
          <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} required/>
        </div>
        <div className="itemForm">
          <label className="label">Repetir Email: </label>
          <input type="email" name="repeatEmail" value={dataForm.repeatEmail} onChange={handleChangeInput} required/>
        </div>
        <button type="submit" className="botonOrden">Enviar orden</button>
      </form>
    </div>
  )
}

export default FormCheckout
