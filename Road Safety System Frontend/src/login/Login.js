import React from 'react'
import "./Login.css";

export const Login = () => {
    return (
        <div className='container w-75 mt-5 rounded shadow'>
            <div className='row align-items-stretch'>
                <div className='col logo d-none d-lg-block col-md-5 col-lg-5 col-xl-6'></div>
                <div className='col p-5 rounded login'>
                    <h2 className='fw-bold text-center'>Iniciar Sesión</h2>
                    <form className='mt-5'>
                        <label>
                            <i className="bi bi-person-fill">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="currentColor"
                                    className="bi bi-person-fill"
                                    viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                            </i>
                            <input type='text'
                                className='form-input'
                                name='user'
                                placeholder='Usuario' />
                        </label>
                        <label className='mt-3'>
                            <i className="bi bi-lock-fill">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="currentColor"
                                    className="bi bi-lock-fill"
                                    viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                </svg>
                            </i>                            
                            <input type='password'
                                className=' form-input mt-3'
                                name='pass'
                                placeholder='Contraseña' />
                        </label>
                        <div className='d-grid mt-5'>
                            <button type='submit' className='btn btn-primary btn-login'>Ingresar
                                <i className="bi bi-box-arrow-in-right">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="25"
                                        fill="currentColor"
                                        className="bi bi-box-arrow-in-right"
                                        viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                                        <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                    </svg>
                                </i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
