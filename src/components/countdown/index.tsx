
interface MyButtonProps {
    /** El texto que se mostrará dentro del botón */
    title: string;
    /** Si se puede interactuar con el botón */
    disabled: boolean;
  }
  
  function MyButton({ title, disabled }: MyButtonProps) {
    return (
      <button disabled={disabled}>{title}</button>
    );
  }
  

  const Saveday = () => {  
  return (
    <div>
    <h1>Bienvenido a mi aplicación</h1>
    <MyButton title="Soy un botón" disabled={false}/>
 </div>  

);
}

export default Saveday;