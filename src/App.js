import { useForm } from 'react-hook-form';

export  default function App() {
    let {register, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }

  return (
      <div>add
          <form onSubmit={handleSubmit(onSubmit)}>
                {/*спед регістра - автоматично зробить нейм з тайтлом - автоматизація*/}
                <input {...register("title")}/>
                <input {...register("body")}/>
                <input type="submit" value={'save post'}/>
          </form>
      </div>
  );
}


/*
         <input type='text' name={'title'}/>
          <input type='text' name={'body'}/>
 */

