import React from 'react';
import axios from 'axios';

import estilos from './Login.module.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

// Importe a imagem
import paisagem from '../assets/paisagem.svg';

const schemaLogin = z.object({
    email: z.string().min(10, 'Mínimo de 10 caracteres'),
    usuario: z.string().min(5, 'Mínimo de 5 caracteres').max(20, 'Máximo de 20 caracteres'),
    senha: z.string().min(8, 'Informe 8 caracteres').max(8, 'Máximo de 8 caracteres'),
});

export function LoginCD() {
    
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schemaLogin)
    });

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                email: email.usuario,
                username: data.usuario,
                password: data.senha
            });

            const { access, refresh } = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            console.log('Login bem-sucedido!');
            navigate('/inicial'); // Redireciona para a página de sensores
        } catch (error) {
            console.error('Erro de autenticação', error);
        }
    }

    return (
        <div className={estilos.conteiner}>
            {/* Usando a imagem importada */}
            

           
            <form className={estilos.formulario} onSubmit={handleSubmit(obterDadosFormulario)}>
                <p className={estilos.titulo}>Connect</p>
                <p className={estilos.titulo1}>Map</p>

                <input
                    {...register('email')}
                    className={estilos.campo}
                    placeholder="Email"
                />
                {errors.email && (
                    <p className={estilos.mensagem}>{errors.usuario.message}</p>
                )}


                <input
                    {...register('usuario')}
                    className={estilos.campo}
                    placeholder="User"
                />
                {errors.usuario && (
                    <p className={estilos.mensagem}>{errors.usuario.message}</p>
                )}

                <input
                    {...register('senha')}
                    type="password"
                    className={estilos.campo}
                    placeholder="Password"
                />
                {errors.senha && (
                    <p className={estilos.mensagem}>{errors.senha.message}</p>
                )}

                <button className={estilos.botao}>Enter</button>
            </form>
            <img src={paisagem} alt="React Logo" className={estilos.logo} />
        </div>


    );
}