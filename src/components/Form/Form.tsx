export default function Form() {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="name">Ім’я:</label>
        <input type="text" id="name" name="name" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Імейл:</label>
        <input type="email" id="email" name="email" className="form-input" />
      </div>

      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="delivery"
          name="delivery"
          className="form-checkbox"
        />
        <label htmlFor="delivery">Хочу доставку</label>
      </div>
    </form>
  );
}
