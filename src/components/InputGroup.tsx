
import {useStore} from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { value } from 'valibot';

interface Props{
    value: string;
    onChange: (value: string) => void;
}

export default component$<Props>((value, onChange) => {

    let inputValue = value
  return (
    <div>
        <input type="text" value={inputValue} onChange$={(e) => onChange(e.target.value)}/>

        <button onClick$={() => onChange(inputValue) }>Add</button>
    </div>
  )
});
