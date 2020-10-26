package com.danilo.kyros.entities

import javax.persistence.*

@Entity
class League(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        @Column(unique = true, length = 100)
        var name: String,

        var maxTeams: Int,

        @ManyToOne(fetch = FetchType.LAZY, optional = false)
        val admin: KyrosUser
)
