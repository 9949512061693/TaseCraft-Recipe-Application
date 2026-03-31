import React, { useState } from 'react'
import {
    Typography,
    Box,
    Paper,
    TextField,
    Stack,
    Button
} from '@mui/material'

import LoginImg from '../assets/LoginImg.png'
import { useNavigate } from 'react-router-dom'

const RegistrationForm = () => {
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    const navigate = useNavigate();

    // 🧠 Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // ✅ Validation Function
    const validate = () => {
        if (!formData.name.trim()) {
            return "Name is required"
        }
        if (!formData.email.trim()) {
            return "Email is required"
        }

        // simple email check
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            return "Enter valid email"
        }

        if (!formData.password.trim()) {
            return "Password is required"
        }

        if (formData.password.length < 6) {
            return "Password must be at least 6 characters"
        }

        return ""
    }

    // 🚀 Handle Submit
    const handleClick = () => {
        const validationError = validate()

        if (validationError) {
            setError(validationError)
            return // ❌ stop navigation
        }

        setError('')
        setLoading(true)

        // simulate success
        setTimeout(() => {
            navigate('/')
        }, 800)
    }

    return (
        <Box sx={{ height: '100vh', position: 'relative' }}>

            {/* IMAGE */}
            <Box
                sx={{
                    display: { xs: 'flex', sm: 'block' },
                    width: '100%',
                    height: { sm: '50%', md: '100%' },
                }}
            >
                <Box
                    component="img"
                    src={LoginImg}
                    alt="Login"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Box>

            {/* FORM */}
            <Box
                sx={{
                    position: { xs: 'static', md: 'absolute' },
                    top: { md: '50%' },
                    left: { md: '5%' },
                    transform: { md: 'translateY(-50%)' },
                    width: { xs: '100%', sm: '100%', md: '350px' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Paper
                    elevation={6}
                    sx={{
                        width: '100%',
                        maxWidth: 350,
                        p: { sm: 2, md: 4 },
                        borderRadius: 4
                    }}
                >
                    <Stack spacing={3} padding={2}>

                        <Typography
                            variant="h5"
                            textAlign="center"
                            fontWeight="bold"
                            color="#1F2937"
                        >
                            TasteCraft 🍽️
                        </Typography>

                        <Typography textAlign="center" color="#6B7280">
                            Create your account 👋
                        </Typography>


                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                        />

                        {error && (
                            <Typography
                                sx={{
                                    color: 'red',
                                    fontSize: 14,
                                    textAlign: 'center'
                                }}
                            >
                                {error}
                            </Typography>
                        )}

                        {/* Button */}
                        <Button
                            onClick={handleClick}
                            variant="contained"
                            sx={{
                                backgroundColor: '#2563EB',
                                textTransform: 'none',
                                fontWeight: 600,
                                py: 1.2,
                                borderRadius: 2,
                                boxShadow: '0px 4px 12px rgba(37,99,235,0.4)',
                                '&:hover': {
                                    backgroundColor: '#1D4ED8'
                                }
                            }}
                        >
                            {loading ? 'Creating Account...' : 'Register'}
                        </Button>

                        <Typography textAlign="center" fontSize={14} color="#6B7280">
                            Already have an account?{' '}
                            <span
                                style={{ color: '#2563EB', cursor: 'pointer' }}
                                onClick={() => navigate('/login')}
                            >
                                Login
                            </span>
                        </Typography>

                    </Stack>
                </Paper>
            </Box>

        </Box>
    )
}

export default RegistrationForm