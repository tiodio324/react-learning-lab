import { useForm } from 'react-hook-form'
import styles from './FormsLibrary.module.css'

function FormsLibrary() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  function onSubmit(data) {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <div className={styles.page}>
      <h2>Формы (библиотека) *</h2>
      <p>Библиотека react-hook-form</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>
          Имя
          <input
            {...register('name', { required: 'Обязательное поле' })}
            placeholder="Введите имя"
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </label>
        <label>
          Email
          <input
            type="email"
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Неверный формат email',
              },
            })}
            placeholder="email@example.com"
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </label>
        <label>
          Возраст
          <input
            type="number"
            {...register('age', {
              required: 'Обязательное поле',
              min: { value: 1, message: 'Минимум 1' },
              max: { value: 120, message: 'Максимум 120' },
            })}
            placeholder="Возраст"
          />
          {errors.age && <span className={styles.error}>{errors.age.message}</span>}
        </label>
        <div className={styles.buttons}>
          <button type="submit">Отправить</button>
          <button type="button" onClick={() => reset()}>
            Сбросить
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormsLibrary
