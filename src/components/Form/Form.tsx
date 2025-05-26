import css from "./Form.module.css";
import { useId } from "react";

export default function Form() {
  const id = useId();
  const handleSubmit = (formData: FormData) => {
    console.log("formaaaaa", formData);
    const values = Object.fromEntries(formData);
    console.log(values);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <div className={css.formGroup}>
        <label htmlFor={id}>Ім’я:</label>
        <input
          type="text"
          id={`${id}-name`}
          name="name"
          className={css.formInput}
        />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="email">Iмейл:</label>
        <input
          type="text"
          id={`${id}-email`}
          name="email"
          className={css.formInput}
        />
      </div>

      <div className={`${css.formGroup} ${css.checkboxGroup}`}>
        <input
          type="checkbox"
          id="delivery"
          name="delivery"
          className={css.formCheckbox}
        />
        <label htmlFor="delivery">Хочу доставку</label>
        <button>Submit</button>
      </div>
    </form>
  );
}
