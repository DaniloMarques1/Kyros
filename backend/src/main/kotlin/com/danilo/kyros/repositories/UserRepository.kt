package com.danilo.kyros.repositories

import com.danilo.kyros.entities.KyrosUser
import org.springframework.data.repository.CrudRepository

interface UserRepository: CrudRepository<KyrosUser, Long> {
    fun findByEmail(email: String): KyrosUser?
}