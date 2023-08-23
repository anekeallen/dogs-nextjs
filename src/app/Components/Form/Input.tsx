import React from 'react'
import styles from './Input.module.css';

interface InputProps {
  label: string;
  id?: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
}

const Input: React.FC<InputProps> = ({label, id, type, value, onChange, error, onBlur}) => {
  return (
    <div className={styles.wrapper} >
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input onBlur={onBlur} onChange={onChange} value={value}  id={id} name={id} type={type} className={styles.input} />
      {error && <p className={styles.error}>{error}</p>}
    </div>

  )
}

export default Input