package com.danilo.kyros.services

import com.danilo.kyros.dtos.CreateLeagueRequestDTO
import com.danilo.kyros.entities.League
import com.danilo.kyros.repositories.LeagueRepository
import org.springframework.stereotype.Service

@Service
class LeagueService(private val leagueRepository: LeagueRepository,
                    private val userService: UserService) {
    fun createLeague(createLeagueRequestDTO: CreateLeagueRequestDTO, id: Long): League {
        val user = userService.findById(id)
        return save(League(
                name = createLeagueRequestDTO.name,
                maxTeams = createLeagueRequestDTO.maxTeams,
                admin = user
        ))
    }

    fun findMyLeagues(id: Long): List<League> {
        val user = userService.findById(id)
        return leagueRepository.findAllByAdmin(user)
    }

    fun findAvailableLeagues(id: Long): List<League> {
        val user = userService.findById(id)
        return leagueRepository.findAllLeagues(user)
    }

    fun save(league: League): League = leagueRepository.save(league)
}