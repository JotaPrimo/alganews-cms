import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import * as I from './Input.styles'; 

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
}


export default function Input({ label, ref, ...props }: InputProps) {
    return <I.Wrapper>
      {
        label && 
        <span className="Label">
            { label }
        </span>
      }
      <input 
      { ...props }
        type="text" 
      />
    </I.Wrapper>
}