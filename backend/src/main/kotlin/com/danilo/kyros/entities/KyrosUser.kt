package com.danilo.kyros.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

@Entity
class KyrosUser(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    @Column(length = 100)
    val name: String,
    @Column(unique = true)
    val email: String,
    @Column(name = "password")
    @JsonIgnore
    val hashedPassword: String,

    @JsonIgnore
    @OneToMany(mappedBy = "admin", fetch = FetchType.LAZY, cascade = [CascadeType.ALL])
    var leagues: List<League>
)
