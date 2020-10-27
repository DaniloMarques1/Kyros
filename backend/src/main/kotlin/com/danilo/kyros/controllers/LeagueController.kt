package com.danilo.kyros.controllers

import com.danilo.kyros.dtos.CreateLeagueRequestDTO
import com.danilo.kyros.dtos.GetAllLeaguesDTO
import com.danilo.kyros.dtos.ResponseDTO
import com.danilo.kyros.entities.League
import com.danilo.kyros.services.LeagueService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/leagues")
@CrossOrigin
class LeagueController(private val leagueService: LeagueService) {
    @PostMapping
    fun createLeague(@RequestBody createLeagueRequestDTO: CreateLeagueRequestDTO,
                     @RequestHeader("token") token: Long): ResponseEntity<League> {
        val league = leagueService.createLeague(createLeagueRequestDTO, token)
        return ResponseEntity(league, HttpStatus.CREATED)
    }

    @GetMapping
    fun getLeagues(@RequestHeader("token") id: Long): ResponseEntity<GetAllLeaguesDTO> {
        val myLeagues = leagueService.findMyLeagues(id)
        val availableLeagues = leagueService.findAvailableLeagues(id)
        return ResponseEntity(GetAllLeaguesDTO(myLeagues, availableLeagues), HttpStatus.OK)
    }

    @DeleteMapping("/{id}")
    fun removeLeague(@PathVariable("id") leagueId: Long, @RequestHeader("token") token: Long): ResponseEntity<ResponseDTO> {
        println("token = $token")
        println("id = $leagueId")
        leagueService.removeLeague(leagueId, token)
        return ResponseEntity(ResponseDTO("League removed successfuly"), HttpStatus.OK)
    }
}
