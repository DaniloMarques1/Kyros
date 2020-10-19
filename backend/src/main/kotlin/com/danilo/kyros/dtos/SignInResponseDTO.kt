package com.danilo.kyros.dtos

import com.danilo.kyros.entities.KyrosUser

data class SignInResponseDTO(
        val token: String,
        val kyrosUser: KyrosUser
)
