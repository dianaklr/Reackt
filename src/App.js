import { useForm } from 'react-hook-form';

export  default function App() {
    let {register, handleSubmit, watch, formState:{errors}} = useForm({defaultValues: {title: 'your name'}});

    const onSubmit = (data) =>{
        console.log(data)
    }

    console.log(watch('title'));

    return (
      <div>add
          <form onSubmit={handleSubmit(onSubmit)}>
                {/*спед регістра - автоматично зробить нейм з тайтлом - автоматизація*/}
                <input {...register("title")}/>
                {errors.title && <span>ERROR</span>}
                <input {...register("body")}/>
                <input type="submit" value={'save post'}/>

              <select {...register('userId')}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5"}>5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>




              </select>
          </form>
      </div>
  );
}


/*
         <input type='text' name={'title'}/>
          <input type='text' name={'body'}/>
 */

