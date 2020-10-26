package com.danilo.kyros.dtos

data class SignUpUserRequestDTO(
        val name: String,
        val email: String,
        val password: String,
        val confirmPassword: String
)
