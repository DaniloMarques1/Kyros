package com.danilo.kyros.repositories

import com.danilo.kyros.entities.KyrosUser
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository: JpaRepository<KyrosUser, Long> {
    fun findByEmail(email: String): KyrosUser?
}