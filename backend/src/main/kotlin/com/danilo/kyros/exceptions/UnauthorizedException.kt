package com.danilo.kyros.exceptions

data class UnauthorizedException(override val message: String): RuntimeException()
