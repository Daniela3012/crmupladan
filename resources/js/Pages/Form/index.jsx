import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import { faArrowLeft, faArrowRight, faCheck, faCircleInfo, faLeftRight, faPaperPlane, faPlaneArrival, faRing, faWarning, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';

const index = (props) => {

  const [formState,setFormState] = useState(1)

  const facultades = [
    {
        id: 1,
        facultad: 'Facultad de Ingenieria',
    },
    {
        id: 2,
        facultad: 'Facultad de Ciencias de la Salud',
    },
    {
        id: 3,
        facultad: 'Facultad de Ciencias Administrativas y Contables',
    },
    {
        id: 4,
        facultad: 'Facultad de Derecho y Ciencias Políticas',
    },
    {
        id: 5,
        facultad: 'Facultad de Medicina Humana',
    },
  ]

  //aca termina de rellenar todas las carreras de acuerdo a su facultad
  const carreras = [
    {
        id:1,
        facultad:1,
        carrera:'asdasd'
    },
  ]

  return (
    <div className='bg-[url("http://imagen.upla.edu.pe/wp-content/uploads/2023/02/2-campus-chorrillos-6-scaled.jpg")] flex justify-center min-h-[100vh] min-w-[100vw] bg-cover bg-center p-12'>
        <div className='backdrop-blur-xl w-[80vw] p-0 flex bg-cyan-100 rounded-xl'>
            <div className='flex flex-col bg-gradient-to-t from-gray-700 via-gray-600 to-gray-700 sm:w-1/3 p-6 items-center justify-center rounded-tl-xl rounded-bl-xl'>
            <ApplicationLogo/>
                <p className='text-white font-black text-xl mt-5'>
                    CONSULTAS
                </p>
                <div className='border-l-2 border-gray-400 pl-[50px] p-2'>
                    <div className='flex justify-center items-center my-6'>
                        <div className={`transition ease-in-out rounded-full -ml-[61px] `+((formState == 1)?'w-[20px] h-[20px] border-[2px] bg-gray-600 border-white':'bg-gray-400 w-[15px] h-[15px]')}>
                        </div>
                        <h1 className={`transition ease-in-out pl-4 w-[150px] `+((formState == 1)?'text-white':'text-gray-400')}>
                            Modalidad
                        </h1>
                    </div>
                    <div className='flex justify-center items-center my-6'>
                        <div className={`transition ease-in-out rounded-full -ml-[61px] `+((formState == 2)?'w-[20px] h-[20px] border-[2px] bg-gray-600 border-white':'bg-gray-400 w-[15px] h-[15px]')}>
                        </div>
                        <h1 className={`transition ease-in-out pl-4 w-[150px] `+((formState == 2)?'text-white':'text-gray-400')}>
                            Área
                        </h1>
                    </div>
                    <div className='flex justify-center items-center my-6'>
                        <div className={`transition ease-in-out rounded-full -ml-[61px] `+((formState == 3)?'w-[20px] h-[20px] border-[2px] bg-gray-600 border-white':'bg-gray-400 w-[15px] h-[15px]')}>
                        </div>
                        <h1 className={`transition ease-in-out pl-4 w-[150px] `+((formState == 3)?'text-white':'text-gray-400')}>
                            Datos Personales
                        </h1>
                    </div>
                    <div className='flex justify-center items-center my-6'>
                        <div className={`transition ease-in-out rounded-full -ml-[61px] `+((formState == 4)?'w-[20px] h-[20px] border-[2px] bg-gray-600 border-white':'bg-gray-400 w-[15px] h-[15px]')}>
                        </div>
                        <h1 className={`transition ease-in-out pl-4 w-[150px] `+((formState == 4)?'text-white':'text-gray-400')}>
                            Finalizado
                        </h1>
                    </div>
                </div>
            </div>
            <div className='flex col sm:w-2/3 rounded-xl p-6 justify-center items-center'>
                <form action="" className='w-full'>
                    {
                        formState == 1 && (
                            <div className='w-full'>
                                <h1 className='flex items-center justify-center py-3 bg-gray-600 text-white text-xl font-extrabold border rounded-lg hover:bg-gray-800 peer-checked:ring-cyan-500 peer-checked:ring-2 peer-checked:border-transparent text-center'>INSCRIPCIONES PARA EL EXAMEN DE ADMISIÓN</h1>
                                <h2 className='my-6 text-center uppercase text-cyan-800 text-xl font-bold'>
                                    ¿En qué modalidad te gustaría estudiar?
                                </h2>
                                <p className='px-12'>
                                    {
                                        //estos de aca ponles una descripcion :3
                                    }
                                    Rellena tus datos y te brindaremos información para postular en nuestra sede Huancayo!
                                </p>
                                <div className='flex items-center w-full'>
                                    <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                        <ul className={`flex mx-auto flex-wrap items-center justify-around w-full`}>
                                            <li className='relative my-1 w-1/3'>
                                                <input className="sr-only peer" type="radio" value="1" name="area" id="area_i"
                                                    
                                                />
                                                <label className="flex items-center justify-center pr-10 py-5 pl-10 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 font-semibold peer-checked:ring-cyan-500 peer-checked:ring-2 peer-checked:border-transparent text-center" htmlFor="area_i">
                                                    PRESENCIAL
                                                </label>
                                                <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                                    <div className='rounded-full border-2 bg-cyan-600 w-[25px] h-[25px] text-center'>
                                                    <FontAwesomeIcon icon={faCheck} className='text-white'/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='relative my-1 w-1/3'>
                                                <input className="sr-only peer" type="radio" value="2" name="area" id="area_ii"
                                                    
                                                />
                                                <label className="flex items-center justify-center pr-10 py-5 pl-10 bg-white border border-gray-300 font-semibold rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 peer-checked:ring-cyan-500 peer-checked:ring-2 peer-checked:border-transparent text-center" htmlFor="area_ii">
    SEMIPRESENCIAL
</label>

                                                <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                                    <div className='rounded-full border-2 bg-cyan-600 w-[25px] h-[25px] text-center'>
                                                    <FontAwesomeIcon icon={faCheck} className='text-white'/>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <SecondaryButton
                                    className='absolute bottom-4 right-4'
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        setFormState(formState+1)
                                    }}
                                >
                                    Continuar
                                    <FontAwesomeIcon icon={faArrowRight} className='mx-2'/>
                                </SecondaryButton>
                            </div>
                        )
                    }
                    {
                        formState == 2 && (
                            <div className='w-full'>
                                <h1 className='my-6 text-center uppercase text-cyan-800 text-xl font-bold'>
                                    ¿En qué Facultad te gustaría estudiar?
                                </h1>
                                <p className='px-12'>
                                En la universidad cuenta con 5 facultades completamente equipadas enfocadas en el desarrollo de investigación en cada campo
                                </p>
                                <div className='flex items-center w-full'>
                                    <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                        <ul className={`flex mx-auto flex-wrap items-center justify-around w-full`}>
                                            {
                                                facultades.map((facultad,index) =>
                                                    <li key={index} className='relative my-1'>
                                                        <input className="sr-only peer" type="radio" value="1" name="facultad" id={'facultad_'+facultad.id}
                                                            
                                                        />
                                                        <label className="flex items-center justify-center pr-6 py-3 pl-6 bg-white border border-gray-300 rounded-lg cursor-pointer font-semibold focus:outline-none hover:bg-gray-50 peer-checked:ring-cyan-500 peer-checked:ring-2 peer-checked:border-transparent text-center" htmlFor={'facultad_'+facultad.id}>
                                                            {facultad.facultad}
                                                        </label>
                                                        <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                                            <div className='rounded-full border-2 bg-cyan-600 w-[25px] h-[25px] text-center'>
                                                            <FontAwesomeIcon icon={faCheck} className='text-white'/>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <SecondaryButton
                                    className='absolute bottom-4'
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        setFormState(formState-1)
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className='mx-2'/>
                                    Volver
                                </SecondaryButton>
                                <SecondaryButton
                                    className='absolute bottom-4 right-4'
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        setFormState(formState+1)
                                    }}
                                >
                                    Continuar
                                    <FontAwesomeIcon icon={faArrowRight} className='mx-2'/>
                                </SecondaryButton>
                            </div>
                        )
                    }
                    {
                        formState == 3 && (
                            <div className='w-full'>
                                <h1 className='my-6 text-center uppercase text-cyan-800 text-xl font-bold'>
                                    Datos Personalesm
                                </h1>
                                <p className='px-12'>
                                    Registra tus datos correctamente para comunicarnos contigo y resolver tus dudas
                                </p>
                                <div className='flex items-center w-full'>
                                    <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                        <div className='flex flex-wrap'>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Apellido Paterno'} className={'uppercase'}/>
                                                
                                                <TextInput 
                                                    className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('apellido_paterno',e.target.value)}
                                                />
                                            </div>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Apellido Materno'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('apellido_materno',e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-wrap'>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Primer Nombre'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('primer_nombre',e.target.value)}
                                                />
                                            </div>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Segundo Nombre'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('segundo_nombre',e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-wrap'>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Correo Electrónico'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2' type={'email'}
                                                    onChange={e=>setData('correo_electronico',e.target.value)}
                                                />
                                            </div>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Número de Celular'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2' type={'number'}
                                                    onChange={e=>setData('numero_celular',e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex justify-center'>
                                    <PrimaryButton
                                        className='!bg-gray-600'
                                    >
                                        Contáctame
                                    </PrimaryButton>
                                </div>
                                <SecondaryButton
                                    className='absolute bottom-4'
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        setFormState(formState-1)
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className='mx-2'/>
                                    Volver
                                </SecondaryButton>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    </div>
  )
}

export default index