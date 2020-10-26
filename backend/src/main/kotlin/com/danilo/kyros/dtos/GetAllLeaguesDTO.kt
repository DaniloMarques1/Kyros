package com.danilo.kyros.dtos

import com.danilo.kyros.entities.League

data class GetAllLeaguesDTO(
        val myLeagues: List<League>,
        val availableLeagues: List<League>
)
