package com.danilo.kyros

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KyrosApplication

fun main(args: Array<String>) {
    runApplication<KyrosApplication>(*args)
}
