package com.danilo.kyros.repositories

import com.danilo.kyros.entities.KyrosUser
import com.danilo.kyros.entities.League
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.util.*

interface LeagueRepository: JpaRepository<League, Long> {
    fun findByName(name: String): League?
    fun findAllByAdmin(admin: KyrosUser): MutableList<League>

    @Query("select l from League l where l.admin != :admin")
    fun findAllLeagues(@Param("admin") admin: KyrosUser): MutableList<League>
}